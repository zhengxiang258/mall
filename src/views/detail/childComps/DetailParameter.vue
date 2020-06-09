<template>
  <div class="params-info" v-if="Object.keys(parameter).length !== 0">
    <table class="info-size" v-for="(table,index) in parameter.sizes" :key="index">
      <tr v-for="(tr,index) in table" :key="index">
        <td v-for="(td,index) in tr" :key="index">{{td}}</td>
      </tr>
    </table>

    <table class="info-param">
      <tr v-for="(info,index) in parameter.infos" :key="index">
        <td class="info-key">{{info.key}}</td>
        <td class="info-value">{{info.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>

  export default{
    name:"DetailParameter",
    props:{
      parameter:{
        type:Object,
        default(){
          return {}
        }
      }
    },
  }
</script>

<style scoped="scoped">
  .params-info{
    width: 100%;
    margin-top: 20px;
    box-shadow: 2px 2px 1px 3px #ccc;
    padding-bottom: 20px;
  }
.info-size{
  width: 100%;
  padding-top: 20px;
  box-shadow: 0 -1px 2px 0px rgba(100,100,100,0.5);
}
.info-size tr{
  border-bottom: 1px solid #CCCCCC;
  display: flex;
  padding: 10px 5px 10px 15px;
  font-size: 14px;
}
.info-size tr td{
  flex: 1;
  padding: 5px 0px;
}

.info-param{
  width: 100%;
}
.info-param tr{
  display: flex;
  padding: 10px 5px 10px 15px;
  border-bottom: 1px solid #CCCCCC;
  font-size: 14px;
}
.info-param tr td{
  padding: 5px 0px;
}
.info-key{
  width: 100px;
}
.info-value{
  flex: 1;
  color: #F22C40;
}
</style>
