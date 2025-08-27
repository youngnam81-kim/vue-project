<script>
import HelloWorld from './HelloWorld.vue';
import LocalChild from '../components/LocalChild.vue';

export default {

  data() {
    return {
      count: 0,
    }
  },

  components: {
    HelloWorld,
    LocalChild,
  },
}
</script>

<template>
  <div>
    <div>
      <p>소개 페이지입니다. 전역 컴포넌트를 사용 했습니다.</p>
    </div>
    <hr>
    <!-- <GlobalChild></GlobalChild> -->
    <LocalChild></LocalChild> <!-- 지역변수는 import 해줘야함.-->
    <hr>
  </div>
</template>

<style lang="scss" scoped></style>