import './style.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import { createPinia } from 'pinia' // Pinia 임포트
import router from '@/router'
import GlobalChild from '@/components/GlobalChild.vue'
import { useAuthStore } from './stores/auth'

const app = createApp(App);
const pinia = createPinia() // Pinia 인스턴스 생성

app.use(pinia) // 앱에 Pinia 플러그인 등록
app.use(router);

const authStore = useAuthStore(); 
authStore.initializeAuth(); // 앱 시작 시 localStorage에서 로그인 상태 로드

app.component("GlobalChild", GlobalChild);
app.mount('#app');
