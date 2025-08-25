<script setup>
import LocalChild from '@/components/LocalChild.vue'; //@는 src 폴더라고 할수있음.
import Header from './components/Header.vue';
import HeaderAxios from './components/HeaderAxios.vue';
</script>

<template>
  <Header></Header>
  <!-- <HeaderAxios></HeaderAxios> -->
  <router-view class="router-view" />
  <!-- <GlobalChild></GlobalChild>  -->
  <!-- 전역변수는 import 안하고 쓸수있다. main.js 에서 설정 mount #app 하기전에 선언해야함.-->
  <!-- <LocalChild></LocalChild> -->
</template>

<style scoped></style>
