import './style.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import { createPinia } from 'pinia' // Pinia 임포트
import router from '@/router'
import { useAuthStore } from './stores/auth'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Font Awesome 아이콘 등록 (한 번만 호출)
library.add(faHouse);

const app = createApp(App);
const pinia = createPinia(); // Pinia 인스턴스 생성

app.use(pinia); // 앱에 Pinia 플러그인 등록
app.use(router);

// Font Awesome 컴포넌트 등록
app.component('font-awesome-icon', FontAwesomeIcon);

const authStore = useAuthStore();
authStore.initializeAuth(); // 앱 시작 시 localStorage에서 로그인 상태 로드

app.mount('#app');
