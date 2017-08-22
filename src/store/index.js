import vue from 'vue'
import $ from 'jquery'
import vuex from 'vuex'

vue.use(vuex)

var ip = "//localhost:3000"

var store = new vuex.Store({
    state: {
        blogs: [],
        activeBlog: {}
    },
    mutations: {
        //Signature for all mutations
        //MUTAIONS SHOULD ALWAYS BE PURE FUNCTIONS (AKA SETTERS)
        addBlog(state, blog) {
            state.blogs.push(blog)
        },
        updateBlogs(state, blogs) {
            state.blogs = blogs
        },
        setActiveBlog(state, blog) {
            state.activeBlog = blog
        }
    },
    actions: {
        //Signature for all Actions
        createBlog({ commit, dispatch }, blog) {
            $.post(ip + '/api/blogs', blog).then(actualBlog => {
                commit('addBlog', actualBlog)
            }).fail(err => {
                console.error(err)
            })

        },
        removeBlog({ commit, dispatch }, payload) {

        },
        updateBlog({ commit, dispatch }, payload) {

        },
        getBlogs({ commit, dispatch }) {
            $.get(ip + '/api/blogs').then(blogs => {
                //Manipulate date and body to become preview length
                blogs.forEach(blog => {
                    blog.body = blog.body.slice(0, 200)
                    blog.date = blog.date.split(" ")
                    blog.date = blog.date.splice(0, 4).join(" ")
                    commit('updateBlogs', blogs)
                })
            })
        },
        getBlog({ commit, dispatch }, id) {
            $.get(ip + '/api/blogs/' + id).then(blog => {
                commit('setActiveBlog', blog)
            })
        }
    }
})

// var state = {
//     blogArr: []
// }

// let store = {
//     state: state,

//     createBlog(blog) {
//         var newBlog = {
//             title: blog.title,
//             body: blog.body
//         }

//         $.post("//localhost:3000/api/blogs", newBlog)
//             .then(console.log(newBlog))
//     },

//     getBlogs(cb) {
//         $.get("//localhost:3000/api/blogs")
//             .then((data) => {
//                 //Set array equal to response data(blogs)
//                 state.blogArr = data
//                 //Manipulate date and body to become preview length
//                 state.blogArr.forEach(blog => {
//                     blog.body = blog.body.slice(0, 200)
//                     blog.date = blog.date.split(" ")
//                     blog.date = blog.date.splice(0, 4).join(" ")
//                 })
//                 cb(state.blogArr)
//             })
//     },

//     getBlog(id, cb) {
//         $.get("//localhost:3000/api/blogs/" + id)
//             .then((data) => {
//                 cb(data)
//             })
//     }
// }

export { store }