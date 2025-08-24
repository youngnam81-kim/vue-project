<script setup>
import LocalChild from '@/components/LocalChild.vue'; //@는 src 폴더라고 할수있음.
</script>

<template>
  <h2>하이 Vue Project 입니다.</h2>
  <hr>
  <hr>
  <!-- <Test></Test> -->
  <nav>
    <!-- <router-link to="/">index</router-link> | -->
     <router-link to="/hook01">Hook01</router-link> |
    <router-link to="/test03">Test03</router-link> |
    <router-link to="/test02">Test02</router-link> |
    <router-link to="/test">Test01</router-link> |
    <router-link to="/">홈</router-link> |
    <router-link to="/about">소개</router-link> |
    <router-link to="/helloWorld">Vite + Vue</router-link> |
  </nav>
  <router-view />
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
</style>
