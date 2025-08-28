<template>
    <div>
        <p>게시글</p> <button @click="moreContents" class="inline-block">더보기</button>
        <hr>
        <table class="board-table">

            <tbody>
                <tr v-if="list && list.length > 0" v-for="item in list" :key="item.id">
                    <td @click="modalPopup(item.id)">{{ item.title }}</td>
                    <td @click="modalPopup(item.id)">{{ item.postDate }}</td>
                </tr>
                <tr v-else>
                    <td colspan="2" class="no-posts" style="text-align: center;">등록된 글이 없습니다.</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
import axios from 'axios';
import router from '../../router';
export default {
    data() {
        return {
            list: [],
            id:'',
        }
    },
    methods: {
        moreContents(){
            // alert('더보기 게시판 링크 할것');
            // return;
            router.push({
                name: 'boardList'
            });
        },
        modalPopup(id){

            alert(id + ' ID 로 리스트에서 내용을 가져오는 modal popup 예정');
        }
    },
    async mounted() {
        try {
            const response = await axios.get("/vue-project/board_posts.json");
            this.list = response.data;
            console.log(this.list);
        } catch (error) {
            console.error('오류 발생:', error);
            this.errorMessages = '사용자 정보 처리 중 오류가 발생했습니다.';
        }

    },
}
</script>

<style lang="scss" scoped>
p {
    display: inline-block;
    margin: 0;
}

div {
    border-bottom: 1px solid rgb(206, 206, 206);
}

table {
    width: 100%;
}

button {
    text-align: right;
    margin-left: 0, auto;
}

td {
    width: 80%;
    cursor: pointer;
}
</style>