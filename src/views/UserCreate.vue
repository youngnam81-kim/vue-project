<template>
    <div>
        <h2>신규 등록</h2>
        <div>
            <label for="name">이름 :
                <input type="text" id="name" name="name" v-model=name><br></br><br></br></label>
            <label for="age">나이 :
                <input type="text" id="age" name="age" v-model=age><br></br><br></br></label>
            <label for="email">e-mail :
                <input type="text" id="email" name="email" v-model=email><br></br><br></br></label>
            <label for="job">직업 :
                <input type="text" id="job" name="job" v-model=job><br></br><br></br></label>
            <label for="address">주소 :
                <input type="text" id="address" name="address" v-model=city><br></br><br></br></label>
            <label for="contact">전화번호 :
                <input type="text" id="contact" name="contact" v-model=contact><br></br><br></br></label>
            <label for="interests">Interests :
                <input type="text" id="interests" name="interests" v-model=interests><br></br><br></br></label>
        </div>
        <div class="no-border">
            <button @click="insertUser">등록</button>&nbsp;&nbsp;
            <button @click="this.$router.go(-1);">취소</button>
        </div>
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
            name: '',
            age: '',
            email: '',
            address: '',
            job: '',
            city: '',
            contact: '',
            interests: '',

        }
    },
    setup() {
        const authStore = useAuthStore(); // 스토어 인스턴스 생성
        return { authStore }; // 템플릿에서 authStore를 사용할 수 있도록 반환
    },
    methods: {
        insertUser() {
            confirm('등록 하시겠습니까?'); //추후 modal로 해야겠다.
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