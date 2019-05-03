<template>
  <div id="app">
    <!-- 头部 -->
    <app-header :poiInfo="poiInfo"></app-header>

    <!-- 导航 -->
    <app-nav :commentNum="commentNum"></app-nav>

    <!-- 内容 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>


<script>
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";

export default {
  name: "app",

  components: {
    "app-header": Header,
    "app-nav": Nav
  },

  data() {
    return {
      poiInfo: {},
      commentNum: 0
    };
  },

  created() {
    // 请求goods
    fetch("/api/goods")
      .then(res => {
        return res.json();
      })
      .then(response => {
        // console.log(response);
        if (response.data.code == 0) {
          this.poiInfo = response.data.data.poi_info;
          // console.log(this.poiInfo);
        }
      });

    // 请求ratings
    fetch("/api/ratings")
      .then(res => {
        return res.json();
      })
      .then(response => {
        if (response.data.code == 0) {
          this.commentNum = response.data.data.comment_num;
        }
      });
  }
};
</script>


<style>
</style>
