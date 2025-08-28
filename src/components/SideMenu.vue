<template>
    <nav class="navbar">
        <div v-if="authStore.isAuthenticated" class="login-button" @click="toggleMenu">
            <p @click="userDetailId" style="margin: 0px; padding: 0px; font-size: 13px; text-decoration: underline;">
                {{ authStore.currentUser.name }}
            </p>
            <p @click="handleLogout" style="margin: 0px; padding: 0px; font-size: 13px; cursor: pointer;">
                [로그아웃]
            </p>
        </div>
        <div v-else class="login-button">
            <router-link @click="toggleMenu" to="/login" style="text-decoration: none; color: inherit;">
                <p style="text-align: right; margin: 0px; padding: 0px; font-size: 13px; text-decoration: underline;">
                    [로그인]
                </p>
            </router-link>
        </div>
        <!-- 트리메뉴 -->
        <!-- 
        <div class="nav-links" :class="{ active: menuActive }">
            
            <tree-menu v-for="(menuItem, index) in menuItems" :key="index" :item="menuItem"
                @navigate="handleNavigation"></tree-menu>
        </div> 
        -->

        <div class="menu-site" @click="toggleMenu">
            <p style="margin: 0px; padding: 0px; font-size: 13px;">▤ &nbsp; 참고 사이트</p>
        </div>
    </nav>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import TreeMenu from './TreeMenu.vue';

export default {
    components: {
        TreeMenu
    },
    data() {
        return {
            SiteName: 'Vue Project',
            menuActive: false,
            myId: '',
            // 트리 구조 메뉴 데이터
            menuItems: [
                {
                    label: '스터디',
                    path: '#',
                    children: [
                        { label: '0827', path: '/s0827' },
                        { label: '0826', path: '/s0826' },
                        { label: '0825', path: '/s0825' },
                        { label: 'Hook01', path: '/hook01' }
                    ]
                },
                {
                    label: '테스트',
                    path: '#',
                    children: [
                        { label: 'Test03', path: '/test03' },
                        { label: 'Test02', path: '/test02' },
                        { label: 'Test01', path: '/test' }
                    ]
                },
                { label: '교육생', path: '/studentLink' },
                {
                    label: '사용자 관리',
                    path: '/userList',
                    requiresAuth: true
                }
            ]
        }
    },
    setup() {
        const authStore = useAuthStore();
        return { authStore };
    },
    methods: {
        toggleMenu() {
            if (window.innerWidth > 900) {
                this.menuActive = false;
            } else {
                this.menuActive = !this.menuActive;
            }
        },
        handleLogout() {
            this.authStore.logout();
            this.$router.push('/login');
            this.toggleMenu();
        },
        userDetailId() {
            this.$router.push({
                name: 'userDetailId',
                params: { id: this.authStore.currentUser.id }
            });
        },
        handleNavigation(item) {
            if (item.requiresAuth && !this.authStore.isAuthenticated) {
                this.$router.push('/login');
            } else if (item.path && item.path !== '#') {
                this.$router.push(item.path);
                if (window.innerWidth <= 900) {
                    this.toggleMenu();
                }
            }
        },
        mounted() {
            // this.myId = useAuthStore.currentUser.id;
        },
        created() {
            // 앱이 시작될 때 Pinia 스토어를 초기화합니다.
            // 이 코드를 main.js에서 createPinia() 후에 한번만 호출하는 것도 좋은 방법입니다.
            // app.use(pinia);
            // const authStore = useAuthStore();
            // authStore.initializeAuth(); // 이렇게 main.js에서 호출하는게 더 좋습니다.
            /*this.authStore.initializeAuth(); // 또는 해당 컴포넌트에서 호출 (최초 로딩 시점)*/
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    text-align: left;
    flex-direction: row;
    display: flex;
    flex-direction: column;
    width: 200px;
    position: fixed;
}

.nav-links {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 8px 15px;
}

.menu-site {
    display: block;
    cursor: pointer;
    padding: 8px 15px;
    background-color: #f0f0f0;
}

.login-button {
    display: flex;
    cursor: pointer;
    padding: 8px 15px;
    background-color: #f0f0f0;
    justify-content: space-between;
}

.menu-icon {
    display: block;
    cursor: pointer;
    padding: 8px 15px;
    background-color: #f0f0f0;
}

a {
    text-decoration: none;
    color: rgb(65, 65, 65);
}

a:hover {
    color: rgb(0, 0, 0);
    text-decoration: underline;
}

template {
    padding-top: 0px;
    margin: 0px;
}

.login-info-section {
    margin: 0px;
    padding: 0px;
    border: none;
    width: 0px;

}
</style>