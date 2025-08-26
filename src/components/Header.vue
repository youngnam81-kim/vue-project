<template>
    <div class="container">
        <h1>{{ SiteName }}</h1>
        <nav class="navbar">
            <div class="menu-icon" @click="toggleMenu">
                <span> ▤</span>
            </div>
            <!-- <div class="user-info">
                <p style="margin: 0px; padding: 0px; font-size: 13px ; text-decoration: underline ;">김영남 님</p>
                <router-link to="/login"><p style="margin: 0px; padding: 0px; font-size: 13px ; ">&nbsp;&nbsp;[인]/[아웃]</p></router-link>
            </div> -->

            <div class="user-info">
                <router-link to="/login" v-if="!authStore.isAuthenticated"
                    style="text-decoration: none; color: inherit;">
                    <p style="margin: 0px; padding: 0px; font-size: 13px ; text-decoration: underline ;">
                        {{ authStore.isAuthenticated ? `authStore.currentUser.name 님` : `[로그인]` }}
                    </p>
                </router-link>
                <p v-else @click="handleLogout" style="margin: 0px; padding: 0px; font-size: 13px ; cursor: pointer;">
                    {{ authStore.currentUser.name }} [로그아웃]
                </p>
            </div>
            <div class="border-no">

                <div class="nav-links" :class="{ active: menuActive }">
                    <router-link @click="toggleMenu" to="/s0826">0826</router-link>
                    <router-link @click="toggleMenu" to="/s0825">0825</router-link>
                    <router-link @click="toggleMenu" to="/hook01">Hook01</router-link>
                    <router-link @click="toggleMenu" to="/test03">Test03</router-link>
                    <router-link @click="toggleMenu" to="/test02">Test02</router-link>
                    <router-link @click="toggleMenu" to="/test">Test01</router-link>
                    <router-link @click="toggleMenu" to="/about">소개</router-link>
                    <router-link @click="toggleMenu" to="/helloWorld">Vite + Vue</router-link>
                    <!-- <router-link @click="toggleMenu" to="/login">로그인</router-link> -->
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { Text } from 'vue';
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
        
}
</script>

<style lang="scss" scoped>
nav {
    text-align: center;
    border: 0px;
    width: 100%;
    /* 너비를 100%로 설정 */
}

a {
    text-decoration: none;
    color: rgb(65, 65, 65);
}

a:hover {
    color: rgb(0, 0, 0);
    text-decoration: underline;
}

/* h2 태그(프로젝트 제목)에 대한 스타일 추가 */
h2 {
    margin-right: auto;
    /* 오른쪽 여백을 자동으로 설정하여 왼쪽 정렬 */
    text-align: left;
    width: 300px
}

.container {
    position: relative;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

}

.user-info {
    border: 0px;
    display: flex;
    cursor: pointer;
    padding: 8px 15px;
    justify-content: right;
    display: none;
}

.navbar {
    margin-bottom: 0px;
    padding-bottom: 0px;
    // text-align: right;
    display: flex;
    flex-direction: row-reverse;
    //justify-content: flex-end;
    // width: 100%;
    /* 너비를 100%로 설정 */
}

.nav-links {
    display: flex;
    flex-direction: row;
    gap: 15px;
    border: none;
    justify-content: flex-end;
}

.menu-icon {
    display: none;
    cursor: pointer;
    padding: 8px 15px;
    background-color: #f0f0f0;
    border-radius: 4px;
    font-weight: bold;
    margin-left: auto;
    /* 오른쪽 정렬을 위해 추가 */
}

/* 미디어 쿼리 부분은 동일하게 유지 */
@media screen and (max-width: 900px) {
    h2 {
        font-size: 20px;
    }

    .menu-icon {
        display: block;
        position: fixed;
        top: 30px;
        right: 30px;
    }

    .user-info {
        border: 0px;
        display: flex;
        cursor: pointer;
        padding: 0px;
        // background-color: #f0f0f0;
        justify-content: right;
        margin: 0px;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 70px;
        // left: 0;
        right: 30px;
        /* 왼쪽 정렬 */
        width: 50%;
        /* 전체 너비 사용 */
        width: 200px;
        background-color: white;
        padding: 10px 0;
        /* 상하 패딩만 주고 좌우는 0으로 */
        z-index: 50;
        text-align: center;
        /* 텍스트 중앙 정렬 */
        border: 1px solid rgb(206, 206, 206);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        /* 그림자 효과 (필요하시면 주석 해제) */
    }

    .nav-links.active {
        display: flex;
        position: fixed;
    }
}

.border-no {
    border: 0px;
    padding: 0px;
    margin: 0px;
    text-align: right;
}
</style>
