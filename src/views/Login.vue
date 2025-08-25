<template>
    <div class="container">
        <h2>로 그 인</h2>
        아 이 디 : <input type="text" v-model="id">
        패스워드 : <input type="text" v-model="password">
        <br>
        <button @click="login">확 인</button>
        <p>{{ id }} 님 안녕하세요.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '김영남',
            id: '',
            password: '',
        }
    },
    methods: {
        login() {
            alert('로그인 확인');
        },
    }

}
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    align-items: center;


}
</style>