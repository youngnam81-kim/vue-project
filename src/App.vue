<script setup>
import LocalChild from '@/components/LocalChild.vue'; //@는 src 폴더라고 할수있음.
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import SideMenu from './components/SideMenu.vue';
import HeaderAxios from './components/HeaderAxios.vue';
</script>

<template>
  <Header></Header>
  <div class="center">
    <SideMenu class="side-menu"></SideMenu>
    <!-- <HeaderAxios></HeaderAxios> -->
    <router-view class="router-view" />
  </div>
  <Footer class="footer"></Footer>
  <!-- <GlobalChild></GlobalChild>  -->
  <!-- 전역변수는 import 안하고 쓸수있다. main.js 에서 설정 mount #app 하기전에 선언해야함.-->
  <!-- <LocalChild></LocalChild> -->

</template>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: left;
  margin: 10px auto;
  padding: 0px;
  border: 0px solid rgb(136, 23, 23);
}

.side-menu {
  width: 200px;
  // border: 10px solid rgb(136, 23, 23);
}

.router-view {
  margin-left: 210px;
  width: 100%;
  min-height: 500px;
}

.footer {
  width: 100%;
  margin: 10px auto;
  text-align: center;
  margin: 10px;
  padding: 0px;
  border: 0px solid rgb(136, 23, 23);
}

@media screen and (max-width: 900px) {
  .side-menu {
    display: none;
  }

  .router-view {
    margin-left: 0px;
    width: 100%;
  }

  .footer {
    width: 100%;
    margin: 10px auto;
    text-align: center;
    margin: 10px;
    padding: 0px;
    border: 0px solid rgb(136, 23, 23);
  }
}
</style>
