<template>
    <div>
        <h5>전역 컴포넌트</h5>
        <p>전역 컴포넌트 입니다.</p>
    </div>
</template>

<script>
export default {
    setup() {
        console.log("Grobal setup");
    },
    beforeCreate() {
        console.log("Grobal beforeCreate");
    },
    created() {
        console.log("Grobal created");
    },
    beforeMount() {
        console.log("Grobal beforeMount");
    },
    mounted() {
        console.log("Grobal mounted");
    },
    beforeUpdate() {
        console.log("Grobal beforeUpdate");
    },
    updated() {
        console.log("Grobal updated");
    },
    beforeUnmount() {
        console.log("Grobal beforeUnmount");
    },
    unmounted() {
        console.log("Grobal unmounted");
    },
    methods: {
        counter() {
            this.cnt++;
        }
    }
}
</script>

<style scoped>
p {
    color: red;
}

/* 전역 컴포넌트의 스타일은 전체 에 할당된다.... ㅎㄷㄷ각개는 scoped 설정 해줘야 됨.*/
</style>