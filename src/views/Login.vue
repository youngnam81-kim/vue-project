<template>
    <!-- 메소드 이름을 handleLogin으로 변경 -->
    <!-- <form @submit.prevent="handleLogin"> -->
        <form @submit.prevent="apiLogin">
        <div class="container">
            <h2>로 그 인</h2>
            <div v-if="errorMessages" class="error-message">{{ errorMessages }}</div>
            <div v-else-if="errorMessages != ''" class="error-message">{{ name }}</div>

            <div>
                <div class="border-no">
                    이&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;름 : <input type="text" id="name" v-model="name" required
                        placeholder="이름을 입력하세요.">
                </div><br>
                <div class="border-no">
                    패스워드 : <input type="text" id="password" v-model="password" required>
                </div>
            </div>
            <br>
            <button type="submit">로그인</button>
            <br>
            <p style="color: rgb(80, 80, 80);">※ 많은 메뉴를 사용 하시려면 로그인이 필요합니다.</p>
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
            name: '김영남',
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
                    // console.log(foundUser);


                    this.authStore.loginSuccess(foundUser); // ⬅️ 스토어 액션 호출하여 로그인 상태 업데이트
                    this.errorMessage = '';
                    this.$router.push('/'); // 로그인 후 메인 페이지로 이동

                    // this.isLoggedIn = true;
                    // this.currentUser = foundUser;
                    // this.errorMessages = '';
                    // localStorage.setItem('user', JSON.stringify(foundUser));
                    // localStorage.setItem('isLoggedIn', 'true');
                    // this.$router.push('/');

                } else {
                    // console.log('실패');
                    this.errorMessages = '아이디 또는 비밀번호가 맞지 않습니다.'
                    // this.isLoggedIn = false;
                    // this.currentUser = null

                }


            } catch (error) {
                console.error('로그인 중 오류 발생:', error);
                this.errorMessages = '로그인 처리 중 오류가 발생했습니다.';
            }

        },

        async apiLogin() {

            try {
                // 백엔드 API 엔드포인트로 로그인 요청 전송
                // const response = await axios.post("/api/login", {
                //     userId: this.name,     // 폼에서 입력받은 사용자 이름
                //     password: this.password  // 폼에서 입력받은 비밀번호
                // });

                //post 방식
                const response = await axios.post("http://localhost:8080/api/users/login", {
                    userId: this.name,
                    password: this.password
                });

                // const response = await axios.post("/api/users/"); //get 방식
                // const response = await axios.get("http://localhost:8080/api/users/", {
                //     params: {
                //         userId: this.name,
                //         password: this.password
                //     },
                //     withCredentials: true
                // });

                // 응답에서 사용자 정보와 토큰 추출
                const { user, success } = response.data;

                console.log(response);

                if (user) {
                    // 로그인 성공 시 스토어에 사용자 정보 저장
                    this.authStore.loginSuccess(user);

                    // 토큰이 있다면 저장 (JWT 인증 방식 사용 시)
                    if (token) {
                        localStorage.setItem('token', token);
                        // axios 기본 헤더에 인증 토큰 설정 (이후 요청에 자동 포함)
                        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    }

                    this.errorMessage = '';
                    this.$router.push('/'); // 로그인 성공 시 메인 페이지로 이동
                }
            } catch (error) {
                console.error('로그인 중 오류 발생:', error);

                // 서버에서 전달된 오류 메시지가 있으면 표시
                if (error.response && error.response.data && error.response.data.message) {
                    this.errorMessages = error.response.data.message;
                } else {
                    this.errorMessages = '아이디 또는 비밀번호가 맞지 않습니다.';
                }
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