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

      // localStorage에 저장하여 페이지 새로고침 시에도 로그인 상태 유지 로컬 옵션
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(userData));

      //브라우저를 닫으면 사라지는 세션 옵션
      // sessionStorage.setItem('isAuthenticated', 'true');
      // sessionStorage.setItem('currentUser', JSON.stringify(userData));


      console.log('로그인 성공:', userData.name);
    },
    // 로그아웃 처리 액션
    logout() {
      this.isLoggedIn = false;
      this.user = null;
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('user');

      // 2. 중요: sessionStorage에서 로그인 상태 제거
      sessionStorage.removeItem('isAuthenticated');
      sessionStorage.removeItem('currentUser');
      // 계속 로그인 하고 싶으면 여길 2.부터 여기까지 주석 처리하면 됨
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