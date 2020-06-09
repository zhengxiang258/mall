<template>
  <div class="wrapper" ref='wrapper'>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default{
    name:"Scroll",
    data(){
      return {
        scroll:null,
      }
    },
    props:{
      probeType:Number,
      default:0
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType:this.probeType,
        pullUpLoad:true,
        click: true
      })

      this.scroll.on('pullingUp' ,() => {
        // console.log('pullingUp')3
        this.$emit('pullingUp')
      })

      this.scroll.on("scroll",(position) => {
        // console.log(position)
        this.$emit('scroll',position)
      })

      // console.log(this.scroll)
    },
    methods:{
      scrollTop(x,y,time=500){
       this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      },
      //加载图片方法
      refresh(){
        // console.log("---------")
       this.scroll && this.scroll.refresh && this.scroll.refresh()
      },
      getScrollY(){
        return this.scroll ? this.scroll.y : 0
      }


    }
  }
</script>

<style>

</style>
