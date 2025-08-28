<script setup>
import Header from '@/components/Header.vue';
import Footer from './components/Footer.vue';
import SideMenu from './components/SideMenu.vue';
import Modal from './components/Modal.vue';
</script>

<template>
  <Header></Header>
  <div class="center">
    <SideMenu class="side-menu"></SideMenu>
    <router-view class="router-view" />

    <Modal :visible="isModalVisible" @close="closeGlobalModal">
      <h2>전역 모달입니다!</h2>
      <p>어떤 컴포넌트에서든 열 수 있어요.</p>
      <button @click="closeGlobalModal">닫기</button>
    </Modal>

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
