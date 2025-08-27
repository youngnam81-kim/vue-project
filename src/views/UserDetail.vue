<template>
    <div v-if="userDetail">
        <h2>{{ this.userDetail.name }} 님 가입 정보</h2>
        <div>
            <label for="name">이름 :
                <input type="text" id="name" name="name" :value=this.userDetail.name><br></br><br></br></label>
            <label for="age">나이 :
                <input type="text" id="age" name="age" :value=this.userDetail.age><br></br><br></br></label>
            <label for="email">e-mail :
                <input type="text" id="email" name="email" :value=this.userDetail.email><br></br><br></br></label>
            <label for="job">직업 :
                <input type="text" id="job" name="job" :value=this.userDetail.job><br></br><br></br></label>
            <label for="address">주소 :
                <input type="text" id="address" name="address" :value=this.userDetail.address.city
                    userDetail.address.district userDetail.address.detail><br></br><br></br></label>
            <label for="contact">전화번호 :
                <input type="text" id="contact" name="contact" :value=this.userDetail.contact><br></br><br></br></label>
            <label for="interests">Interests :
                <input type="text" id="interests" name="interests"
                    :value=this.userDetail.interests><br></br><br></br></label>
            <div class="no-border">
                <button @click="updateUser">수정</button>&nbsp;&nbsp;&nbsp;
                <button @click="this.$router.go(-1);">취소</button>
            </div>
        </div>
    </div>
    <div v-else>
        DATA 로딩 중입니다.
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth'; // 스토어 임포트
import axios from 'axios';

export default {
    data() {
        return {
            paramId: '',
            userDetail: null,
            // name: null,
            // user: null,
            // userId: null,
        }
    },
    setup() {
        const authStore = useAuthStore(); // 스토어 인스턴스 생성
        return { authStore }; // 템플릿에서 authStore를 사용할 수 있도록 반환
    },
    methods: {
        updateUser() {
            confirm('수정 하시겠습니까?'); //추후 modal로 해야겠다.
        }
    },
    async mounted() {
        this.paramId = this.$route.params.id;

        console.log(this.paramId);

        try {
            const response = await axios.get("/vue-project/users.json");
            // console.log(response);
            const users = response.data;
            console.log(users);
            const foundUser = users.find(users => users.id == this.paramId);

            if (foundUser) {
                console.log(foundUser);
                this.userDetail = foundUser;

                // console.log(this.userDetail);
                //user 배열에 넣기.

                //             this.authStore.loginSuccess(foundUser); // ⬅️ 스토어 액션 호출하여 로그인 상태 업데이트
                //             this.errorMessage = '';
                //             this.$router.push('/s0826'); // 로그인 후 메인 페이지로 이동


            } else {
                // console.log('실패');
                this.errorMessages = '사용자 정보가 없는 사용자 입니다.'
            }


        } catch (error) {
            console.error('오류 발생:', error);
            this.errorMessages = '사용자 정보 처리 중 오류가 발생했습니다.';
        }

    },

}
</script>

<style lang="scss" scoped>
.no-border {
    border: none;
    text-align: center;
}
</style>