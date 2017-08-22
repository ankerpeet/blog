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
                //Set array equal to response data(blogs)
                state.blogArr = data
                //Manipulate date and body to become preview length
                state.blogArr.forEach(blog => {
                    blog.body = blog.body.slice(0, 200)
                    blog.date = blog.date.split(" ")
                    blog.date = blog.date.splice(0,4).join(" ")
                })
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