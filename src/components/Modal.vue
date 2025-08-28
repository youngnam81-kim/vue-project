<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" v-if="isVisible">
      <div class="modal-content">
        <button class="modal-close" @click="closeModal">×</button>
        <slot></slot> <!-- 모달 내부에 다른 컴포넌트/내용을 넣을 수 있도록 slot 사용 -->
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isVisible: this.visible
    };
  },
  watch: {
    visible(newVal) {
      this.isVisible = newVal;
    }
  },
  methods: {
    closeModal() {
      this.isVisible = false;
      this.$emit('close'); // 부모 컴포넌트에 닫힘 이벤트 알림
    }
  }
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
}
.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
/* 트랜지션 애니메이션 (필요하다면) */
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}
</style>