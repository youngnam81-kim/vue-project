<template>
    <form @submit.prevent="handleLogin"> <!-- 메소드 이름을 handleLogin으로 변경 -->
        <div class="container">
            <h2>로 그 인</h2>
            <div v-if="errorMessages" class="error-message">{{ errorMessages }}</div>
            <div v-else-if="errorMessages != ''" class="error-message">{{ name }}</div>

            <div class="border-no">
                이&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;름 : <input type="text" id="name" v-model="name" required placeholder="이름을 입력하세요.">
            </div><br>
            <div class="border-no">
                패스워드 : <input type="text" id="password" v-model="password" required>
            </div>
            <br>
            <button type="submit">로그인</button>
        </div>
    </form>
</template>

<script>
import axios from 'axios';
import { errorMessages } from 'vue/compiler-sfc';
import { useAuthStore } from '../stores/auth';

export default {
    data() {
        return {
            name: '김철수',
            id: '',
            password: '0000',
            errorMessages: '',
            // isLoggedIn: '',
            // currentUser: null,

        }
    },
    setup() {
        const authStore = useAuthStore(); // 스토어 인스턴스 생성
        return { authStore };
    },
    methods: {
        async handleLogin() { // 메소드 이름을 handleLogin으로 변경
            try {
                const response = await axios.get("/vue-project/users.json");
                // console.log({ response });
                const users = response.data;

                const foundUser = users.find(u => u.name === this.name && u.password === this.password);

                if (foundUser) {
                    console.log(foundUser);


                    this.authStore.loginSuccess(foundUser); // ⬅️ 스토어 액션 호출하여 로그인 상태 업데이트
                    this.errorMessage = '';
                    this.$router.push('/s0826'); // 로그인 후 메인 페이지로 이동

                    // this.isLoggedIn = true;
                    // this.currentUser = foundUser;
                    // this.errorMessages = '';
                    // localStorage.setItem('user', JSON.stringify(foundUser));
                    // localStorage.setItem('isLoggedIn', 'true');
                    // this.$router.push('/');

                } else {
                    console.log('실패');
                    this.errorMessages = '아이디 또는 비밀번호가 맞지 않습니다.'
                    // this.isLoggedIn = false;
                    // this.currentUser = null

                }


            } catch (error) {
                console.error('로그인 중 오류 발생:', error);
                this.errorMessages = '로그인 처리 중 오류가 발생했습니다.';
            }

        },
    },
    created() {
        // 페이지 로드 시 로그인 상태 확인
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const user = JSON.parse(localStorage.getItem('user') || 'null');

        if (isLoggedIn && user) {
            this.isLoggedIn = true;
            this.currentUser = user;
            this.$router.push('/');
        }
    }

}
</script>

<style lang="scss" scoped>
.container {
    // position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
}

.border-no {
    border: 0px;
    padding: 0px;
}

.error-message {
    border: 0px;
    padding: 0px;
    color: red;
}
</style>