<template>
  <div class="toast" v-show="isShow">
    <span>{{message}}</span>
  </div>
</template>

<script>

  export default{
    name:"Toast",
    props:{
      // message:{
      //   type:String,
      //   default:''
      // },
      // show:{
      //   type:Boolean,
      //   default:false
      // }
    },
    data(){
      return {
        message:'',
        isShow:false
      }
    },
    methods:{
      show(message,duration){
        this.message = message;
        this.isShow = true;
        setTimeout(() => {
          this.isShow = false;
          this.message = ''
        },duration)
      }
    }
  }
</script>

<style scoped="scoped">
.toast{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);

  padding: 8px 10px;
  color: #fff;
  background-color: rgba(0,0,0,.75);
  
  z-index: 999;
}

</style>
