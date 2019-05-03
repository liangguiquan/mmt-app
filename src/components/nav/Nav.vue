<template>
  <div class="nav">
    <router-link to="/goods" class="nav-item">
      点餐
      <i class="line"></i>
    </router-link>
    <router-link to="/ratings" class="nav-item">
      评价({{commentNum}})
      <i class="line"></i>
    </router-link>
    <router-link to="/seller" class="nav-item">
      商家
      <i class="line"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  props:{
    commentNum: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped>
.nav {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #e4e4e4;
}
.nav .nav-item {
  position: relative;
  flex: 1;
  text-align: center;
  text-decoration: none;
  font-size: 13px;
  color: #666;
}
.nav .nav-item.active {
  color: #ffbb22;
}
.nav .nav-item.active .line {
  position: absolute;
  left: 50%;
  margin-left: -10px;
  bottom: 0;
  width: 20px;
  height: 2px;
  display: inline-block;
  background-color: #ffbb22;
}
</style>