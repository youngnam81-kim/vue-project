<script setup>
import Header from '@/components/Header.vue';
import Footer from './components/Footer.vue';
import SideMenu from './components/SideMenu.vue';
import Modal from './components/Modal.vue';
import { provide, ref } from 'vue';

import test from './views/test.vue';

const isModalVisible = ref(false);
const modalId = ref(null);
const modalTitle = ref('전역 모달입니다!');
const modalMessage = ref('어떤 컴포넌트에서든 열 수 있어요.');

const openModal = (options) => {
  if (options?.id) modalId.value = options.id
  if (options?.title) modalTitle.value = options.title
  if (options?.message) modalMessage.value = options.message
  isModalVisible.value = true
}

const closeModal = () => {
  isModalVisible.value = false;
}

provide('modal', {
  open: openModal,
  close: closeModal
})

</script>

<template>
  <!-- <test></test> -->
  <Header></Header>
  <div class="center">
    <SideMenu class="side-menu"></SideMenu>
    <router-view class="router-view" />

    <Modal v-if="isModalVisible" :id="modalId" :title="modalTitle" :message="modalMessage" @close="closeModal" />

  </div>
  <Footer class="footer"></Footer>

  <!-- 전역변수는 import 안하고 쓸수있다. main.js 에서 설정 mount #app 하기전에 선언해야함.-->
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
  min-height: 650px;
  margin-bottom: 0px;
  padding-bottom: 10px;
}

.footer {
  width: 100%;
  margin: 10px auto;
  text-align: center;
  margin: 10px;
  padding: 0px;
  border: 0px solid rgb(136, 23, 23);
}

@media screen and (max-width: 800px) {
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
