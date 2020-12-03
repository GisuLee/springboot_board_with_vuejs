/* ## BoardList.vue 내용 */
<template>
<v-container>
    <v-data-table :headers="headers" :items="posts" :items-per-page="5" class="elevation-1" >
    </v-data-table>

	{{getPostList}}
    <v-col class="text-right">
        <v-btn color="primary" @click="queryGetPostList" >게시글 작성</v-btn>
    </v-col>
</v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: 'BoardList',
    data() {
        return {
            headers: [{
                text: '번호',
                align: 'left',
                sortable: false,
                value: 'id',
            }, {
                text: '제목',
                value: 'title',
                sortable: false,
            }, {
                text: '작성자',
                value: 'author',
                sortable: false,
            }, {
                text: '수정일',
                value: 'modifiedDate',
                sortable: false,
            }],
            posts: [{
                    id: 1,
                    title: 'abc',
                    author: '이기수',
                    modifiedDate: '2012-12-12'
                },
                {
                    id: 2,
                    title: 'abc',
                    author: '이기수',
                    modifiedDate: '2012-12-12'
                }
            ],
        }
    },
    computed: {
        getPostList() {
            console.log("getPostList")
            console.log(this.$store.getters.getPostList);
            return this.$store.getters.getPostList;
        },
    },
    methods: {
        queryGetPostList() {
            console.log("queryGetPostList")
			this.$store.dispatch('QUERY_POST_LIST');
        }
    }
};
</script>
