<template>
    <div class="create">
        <form @submit.prevent="createBlog()">
            <input type="text" v-model="blog.title" placeholder="Title">
            <div><textarea class="body-input" type="text" v-model="blog.body" cols="30" rows="10"></textarea></div>
            <button class="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
    import { store } from '../store'
    export default {
        name: 'create',
        data() {
            return {
                blog: {
                    title: "",
                    body: ""
                }
            }
        },
        methods: {
            createBlog() {
                store.createBlog(this.blog);
            }
        }
    }

</script>

<style scoped>
    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .body-input {
        max-width: 100%;
        min-height: 200px;
    }
</style>