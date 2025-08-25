<script setup>
import LocalChild from '@/components/LocalChild.vue'; //@는 src 폴더라고 할수있음.
import Header from './components/Header.vue';
</script>

<template>

  <Header></Header>
  <!-- <Test></Test> -->

  <router-view class="router-view" />
  <!-- <GlobalChild></GlobalChild>  -->
  <!-- 전역변수는 import 안하고 쓸수있다. main.js 에서 설정 mount #app 하기전에 선언해야함.-->
  <!-- <LocalChild></LocalChild> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.router-view {
  width: 1500px;
  text-align: center;
}

Header {
  width: 1500px;
  text-align: center;
}
</style>
