import './style.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import GlobalChild from '@/components/GlobalChild.vue'

const app = createApp(App);
app.use(router);
app.component("GlobalChild", GlobalChild);

app.mount('#app');
