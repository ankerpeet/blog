<template>
    <div class="create">
        <form @submit.prevent="createBlog()">
            <input type="text" v-model="blog.title" placeholder="Title">
            <wysiwyg v-model="blog.body" />
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
                this.$store.dispatch("createBlog", this.blog)//createBlog will be a method in the store
            }
        },
        computed: {
            blogs() {
                return this.$store.state.blogs
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
        margin: 25px 0 25px 0;
        width: 100%;
        max-width: 100%;
        min-height: 200px;
    }
</style>