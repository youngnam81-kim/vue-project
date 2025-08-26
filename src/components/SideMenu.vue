<template>
    <!-- <div class="login-info-section"> 새로운 섹션 추가 -->
    <!-- <div class="menu-icon" @click="toggleMenu"> -->
    <nav class="navbar">
        <div class="login-button" @click="toggleMenu">
            <!-- <p style="margin: 0px; padding: 0px; font-size: 13px ; text-decoration: underline ;">김영남 님 </p> -->
            <!-- <router-link to="/login">
                    <p style="margin: 0px; padding: 0px; font-size: 13px ; ">[인]/[아웃] </p>
                </router-link> -->
            <router-link @click="toggleMenu" to="/login" v-if="!authStore.isAuthenticated"
                style="text-decoration: none; color: inherit;">
                <p style="margin: 0px; padding: 0px; font-size: 13px ; text-decoration: underline ;">
                    {{ authStore.isAuthenticated ? `authStore.currentUser.name 님` : `[로그인]` }}
                </p>
            </router-link>
            <p v-else @click="handleLogout" style="margin: 0px; padding: 0px; font-size: 13px ; cursor: pointer;">
                {{ authStore.currentUser.name }} [로그아웃]
            </p>
        </div>
        <div class="nav-links" :class="{ active: menuActive }">
            <router-link @click="toggleMenu" to="/s0826">0826</router-link>
            <router-link @click="toggleMenu" to="/s0825">0825</router-link>
            <router-link @click="toggleMenu" to="/hook01">Hook01</router-link>
            <router-link @click="toggleMenu" to="/test03">Test03</router-link>
            <router-link @click="toggleMenu" to="/test02">Test02</router-link>
            <router-link @click="toggleMenu" to="/test">Test01</router-link>
            <router-link @click="toggleMenu" to="/about">소개</router-link>
            <router-link @click="toggleMenu" to="/studentLink">교육생</router-link>
            <router-link @click="toggleMenu" to="/userList" v-if="authStore.isAuthenticated">사용자 관리</router-link>
            <!-- <router-link @click="toggleMenu" to="/helloWorld">Vite + Vue</router-link> -->
            <!-- <router-link @click="toggleMenu" to="/login">로그인</router-link> -->
        </div>
        <!-- <div class="menu-icon" @click="toggleMenu"> -->
        <div class="menu-site" @click="toggleMenu">
            <p style="margin: 0px; padding: 0px; font-size: 13px ;">▤ &nbsp; 참고 사이트</p>
        </div>
    </nav>
    <!-- </div> -->
</template>

<script>
import { useAuthStore } from '@/stores/auth'; // 스토어 임포트
export default {
    data() {
        return {
            SiteName: 'Vue Project',
            menuActive: false
        }
    },
    setup() {
        const authStore = useAuthStore(); // 스토어 인스턴스 생성
        return { authStore }; // 템플릿에서 authStore를 사용할 수 있도록 반환
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
            this.authStore.logout(); // ⬅️ 스토어 액션 호출하여 로그아웃
            this.$router.push('/login'); // 로그아웃 후 로그인 페이지로 리다이렉트
            this.toggleMenu(); // 메뉴 닫기
        },
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
    // flex-grow: 1;
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

.menu-site {
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