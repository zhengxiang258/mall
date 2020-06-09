import {debounce} from './utils'
import BackTop from 'components/common/backtop/BackTop'
import {POP, NEW, SELL} from "./const";


export const itemListenerMixin = {
  data(){
    return {
      itemImgListener:null
    }
  },
  mounted(){
    let newRefresh = debounce(this.$refs.scroll.refresh,500)
    this.itemImgListener = () => {
      //refresh() vue刷新页面
      newRefresh()
    }
     this.$bus.$on("ItemImageLoad", this.itemImgListener)
     // console.log("我是混入的内容")
  }
}

export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return {
      isShow:false
    }
  },
  methods:{
    backClick(){
      // this.$refs.scroll.scroll.scrollTo(0,0,500)
      this.$refs.scroll.scrollTop(0,0)
    },
  }
}

export const tabControlMixin = {
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
