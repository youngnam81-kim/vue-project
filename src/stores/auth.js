import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false, // 로그인 여부
    user: null,        // 사용자 정보 (예: { id: 'kimyoungnam', name: '김영남' })
    // token: null,    // 필요한 경우 인증 토큰
  }),
  actions: {
    // 로그인 처리 액션 (Login 컴포넌트에서 호출)
    loginSuccess(userData) {
      this.isLoggedIn = true;
      this.user = userData;
      // localStorage에 저장하여 페이지 새로고침 시에도 로그인 상태 유지
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(userData));
      console.log('로그인 성공:', userData.name);
    },
    // 로그아웃 처리 액션
    logout() {
      this.isLoggedIn = false;
      this.user = null;
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('user');
      console.log('로그아웃 완료');
    },
    // 앱 시작 시 localStorage에서 로그인 상태 불러오기
    initializeAuth() {
      const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
      const storedUser = localStorage.getItem('user');
      if (storedIsLoggedIn === 'true' && storedUser) {
        this.isLoggedIn = true;
        this.user = JSON.parse(storedUser);
      }
    }
  },
  getters: {
    // 로그인 상태를 쉽게 확인하기 위한 getter
    isAuthenticated: (state) => state.isLoggedIn,
    currentUser: (state) => state.user,
  },
})