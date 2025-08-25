<template>
    <div class="container">
        <h2>{{ SiteName }}</h2>
        <nav class="navbar">
            <div class="menu-icon" @click="toggleMenu">
                <span> 메뉴 </span>
            </div>
            <div class="nav-links" :class="{ active: menuActive }">
                <router-link @click="toggleMenu" to="/s0825">S0825</router-link>
                <router-link @click="toggleMenu" to="/hook01">Hook01</router-link>
                <router-link @click="toggleMenu" to="/test03">Test03</router-link>
                <router-link @click="toggleMenu" to="/test02">Test02</router-link>
                <router-link @click="toggleMenu" to="/test">Test01</router-link>
                <router-link @click="toggleMenu" to="/about">소개</router-link>
                <router-link @click="toggleMenu" to="/helloWorld">Vite + Vue</router-link>
                <router-link @click="toggleMenu" to="/login">로그인</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            SiteName: '영남 Vue Project',
            menuActive: false
        }
    },
    methods: {
        toggleMenu() {
            this.menuActive = !this.menuActive;
        }
    }
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
    text-decoration: double;
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

.navbar {
    // text-align: right;
    display: flex;
    // flex-direction: row;
    justify-content: flex-end;
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
@media screen and (max-width: 650px) {
    h2 {
        font-size: 20px;
    }

    .menu-icon {
        display: block;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 80px;
        left: 0;
        /* 왼쪽 정렬 */
        width: 100%;
        /* 전체 너비 사용 */
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
    }


}
</style>
