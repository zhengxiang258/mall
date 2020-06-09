<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item"
      :class="{active:index === itemIndex}"
      @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabcontrol',
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data(){
    return {
      itemIndex : 0
    }
  },
  methods:{
    itemClick(index){
      this.itemIndex = index
      this.$emit('tabClick',index)
    }
  }

};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  margin-top: 10px;
  background-color: #fff;
  height: 44px;
  line-height: 44px;
  z-index: 9;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span{
  padding: 5px;
}

.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 3px solid #FC9B9B;
}
</style>
