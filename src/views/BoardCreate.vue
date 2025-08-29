<template>
    <div class="post-form">
        <h2>게시글 작성</h2>
        <form @submit.prevent="submitPost">
            <div class="form-group ">
                <div class="border-no">
                    <select id="category" v-model="category" required>
                        <option value="notice">공지사항</option>
                        <option value="general">일반</option>
                        <option value="question">질문</option>
                    </select>
                    &nbsp;&nbsp;<label class="title" for="title">제목 : </label>
                    <input type="text" id="title" v-model="title" required />
                    작성자 : {{ author }}
                </div>
            </div>
            <textarea class="content" id="content" v-model="content" rows="25" required></textarea>
            <br>
            <br>
            <div class="border-no text-center">
                <button type="submit">등록</button>&nbsp;&nbsp;
                <button @click="this.$router.go(-1);">취소</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'PostForm',
    data() {
        return {
            id: 0,
            title: '재미1',
            category: 'general',
            author: '나',
            content: '컨텐츠',
            postDate: '날짜',
            views: 1
        }
    },
    methods: {
        submitPost() {
            // 현재 날짜를 YYYY-MM-DD 형식으로 설정
            const now = new Date();
            this.post.postDate = now.toISOString().split('T')[0];

            // 폼 데이터를 복사하여 제출
            const postData = { ...this.post };

            // 여기서 API 호출 또는 부모 컴포넌트로 이벤트 전달
            this.$emit('submit-post', postData);

            console.log('제출된 게시글:', postData);

            // 폼 초기화 (선택적)
            this.resetForm();
        },
    }
}
</script>

<style lang="scss" scoped>
.content {
    width: 100%;
}

.form-group {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
}

#category,
.category {
    width: 10%;
}

#title,
.title {
    width: 65%;
}
</style>
