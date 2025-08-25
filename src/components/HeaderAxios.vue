<template>
    <div>
        <div class="container">
            <h2>영남 Vue Project</h2>
            <nav class="navbar">
                <div class="menu-icon" @click="toggleMainMenu">
                    <span> 메뉴 </span>
                </div>
                <div class="nav-links" :class="{ active: mainMenuOpen }">
                    <!-- 메인 메뉴와 서브메뉴를 동적으로 렌더링 -->
                    <div v-for="menu in menus" :key="menu.id" class="menu-item">
                        <!-- 서브메뉴가 있는 경우 -->
                        <template v-if="menu.subMenus && menu.subMenus.length > 0">
                            <router-link :to="menu.path" @click="toggleSubmenu(menu.id)">
                                {{ menu.name }}
                            </router-link>
                            <div v-if="activeSubmenus[menu.id]" class="submenu">
                                <router-link v-for="submenu in menu.subMenus" :key="submenu.id" :to="submenu.path"
                                    @click="hideAllMenus">
                                    {{ submenu.name }}
                                </router-link>
                            </div>
                        </template>
                        <!-- 서브메뉴가 없는 경우 -->
                        <router-link v-else :to="menu.path" @click="hideAllMenus">
                            {{ menu.name }}
                        </router-link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            menus: [],
            mainMenuOpen: false,
            activeSubmenus: {} // 각 메뉴 ID를 키로 사용하여 서브메뉴 상태 관리
        };
    },
    created() {
        // 컴포넌트가 생성될 때 메뉴 데이터 가져오기
        this.fetchMenus();
    },
    methods: {
        async fetchMenus() {
            try {
                // 실제 백엔드 API URL로 변경하세요
                const response = await axios.get('/api/menus.json');
                this.menus = response.data.mainMenus;

                // 초기 서브메뉴 상태 설정 (모두 닫힘)
                this.menus.forEach(menu => {
                    this.activeSubmenus[menu.id] = false;
                });
            } catch (error) {
                console.error('메뉴 데이터를 가져오는 중 오류 발생:', error);

                // 오류 시 기본 메뉴 데이터 사용 (개발 중에 유용)
                this.loadDefaultMenus();
            }
        },

        toggleMainMenu() {
            this.mainMenuOpen = !this.mainMenuOpen;
            if (!this.mainMenuOpen) {
                this.closeAllSubmenus();
            }
        },
        toggleSubmenu(menuId) {
            // 현재 서브메뉴 상태 토글
            this.activeSubmenus[menuId] = !this.activeSubmenus[menuId];

            // 다른 서브메뉴는 모두 닫기
            Object.keys(this.activeSubmenus).forEach(id => {
                if (parseInt(id) !== menuId) {
                    this.activeSubmenus[id] = false;
                }
            });

            // 서브메뉴를 열 때 메인 메뉴도 열려있게 유지
            if (this.activeSubmenus[menuId]) {
                this.mainMenuOpen = true;
            }
        },
        closeAllSubmenus() {
            // 모든 서브메뉴 닫기
            Object.keys(this.activeSubmenus).forEach(id => {
                this.activeSubmenus[id] = false;
            });
        },
        hideAllMenus() {
            // 메뉴 클릭 시 모든 메뉴 닫기
            this.mainMenuOpen = false;
            this.closeAllSubmenus();
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
