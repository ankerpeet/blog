import $ from 'jquery'

var state = {
    blogArr: []
}

let store = {
    state: state,

    createBlog(blog) {
        var newBlog = {
            title: blog.title,
            body: blog.body
        }

        $.post("//localhost:3000/api/blogs", newBlog)
            .then(console.log(newBlog))
    },

    getBlogs(cb) {
        $.get("//localhost:3000/api/blogs")
            .then((data) => {
                state.blogArr = data
                cb(state.blogArr)
            })
    },
    
    getBlog(id, cb) {
        $.get("//localhost:3000/api/blogs/" + id)
            .then((data) => {
                cb(data)
            })
    }
}

export { store }