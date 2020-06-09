<template>
  <div class="detail-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">
      <h3>{{ goods.title }}</h3>
      <div class="info-box">
        <span class="newPrice">{{ goods.newPrice }}</span>
        <span class="oldPrice">{{ goods.oldPrice }}</span>
        <span class="discount" v-if="Object.keys(goods.discount).length !== 0">{{ goods.discount }}</span>
      </div>

    </div>

    <div class="detail-columns">
      <span class="sales">{{ goods.columns[0] }}</span>
      <span class="collection">{{ goods.columns[1] }}</span>
      <span class="fee">{{ goods.services[goods.services.length - 1].name }}</span>
    </div>

    <div class="detail-services">
      <span v-for="index in goods.services.length - 1" class="service-txt">
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped="scoped">
.detail-info {
  padding: 8px 5px;
}
.info-box{
  height: 30px;
}
.info-title {
  position: relative;
}
.info-title h3 {
  color: #000000;
  font-weight: 600;
  margin-bottom: 10px;
}
.newPrice {
  color: var(--color-high-text);
  font-size: 18px;
  margin-right: 5px;
  line-height: 30px;
}
.oldPrice {
  text-decoration: line-through;
  font-size: 14px;
  margin-right: 5px;
}
.discount {
  color: #fff;
  background-color: var(--color-tint);
  border-radius: 8px;
  padding: 0 10px;
  vertical-align:top;
/*  position: absolute;
  top: 60%;
  left: 33%; */
  font-size: 14px;
}

.detail-columns {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 20px;
  border-bottom: 1px solid #c0c0c0;
  padding-bottom: 8px;
}


.detail-services {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #000000;
  align-items: center;
  margin-top: 10px;
  border-bottom: 3px solid #CCCCCC;
  padding-bottom: 15px;
}
.service-txt img{
  width: 15px;
  height: 15px;
  border: 0px;
}
.service-txt{
  display: flex;
  align-items: center;
  padding: 15px 0px;
}
</style>
