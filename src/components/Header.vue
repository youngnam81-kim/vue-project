<template>
    <div>
        <h2>김영남 vue-project</h2>
        <div class="top-menu">
            <nav>
                <router-link to="/">홈</router-link> |
                <router-link to="/s0825">S0825</router-link> |
                <router-link to="/hook01">Hook01</router-link> |
                <router-link to="/test03">Test03</router-link> |
                <router-link to="/test02">Test02</router-link> |
                <router-link to="/test">Test01</router-link> |
                <router-link to="/about">소개</router-link> |
                <router-link to="/helloWorld">Vite + Vue</router-link> |
            </nav>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.top-menu {
    text-align: right;
    border: 0px;
}
</style>