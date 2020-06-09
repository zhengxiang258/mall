<template>
  <div class="detail-comment" v-if="Object.keys(commentInfo).length !==0">
    <div class="comment-top">
      <div class="user-comment">用户评价</div>
      <div class="more">
        更多
        <i class="more-icon"></i>
      </div>
    </div>

    <div class="user">
      <div class="user-name">
       <img :src="commentInfo.user.avatar" alt="">
       <span>{{commentInfo.user.uname}}</span>
      </div>

      <p class="comment-info">{{commentInfo.content}}</p>
      <div class="information">
        <span class="created">{{commentInfo.created | showDate}}</span>
        <span class="style">{{commentInfo.style}}</span>
      </div>

      <div class="comment-image">
        <img  v-for="item in commentInfo.images" :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils/utils'

export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters:{
    showDate(value){
      //1 将时间戳转成Date对象
      const date = new Date(value * 1000)
      //2将date进行格式化
      return formatDate(date,'yyyy-MM-dd')

    }
  }
};
</script>

<style scoped="scoped">
.detail-comment {
  margin-top: 20px;
  padding: 0px 10px;
  box-shadow: 2px 5px 0px 2px #ccc;
  margin-bottom: 20px;
}

.comment-top{
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #000000;
  padding: 15px 0px;
  border-bottom: 1px solid #C5C8C6;
}

.more-icon {
  width: 7px;
  height: 7px;
  border-top: 1px solid #9C9491;
  border-right: 1px solid #9C9491;
  transform: rotate(45deg);
  display: inline-block;
}
.user-name{
  font-size: 14px;
  color: #000000;
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.user-name img{
  width: 50px;
  height: 50px;
  margin-right: 20px;

}

.comment-info{
  color: #6C6B5A;
  font-size: 14px;
  margin-top: 10px;
  line-height: 20px;
}

.information{
  font-size: 14px;
  margin: 8px 0px;
}
.created{
  margin-right: 15px;
}
.comment-image{
  display: flex;
  flex-wrap: wrap;
}
.comment-image img{
  width: 80px;
  height: 80px;
  padding: 8px;
}
</style>
