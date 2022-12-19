const register = (req,res) => {
    res.render("register")
}

const login = (req,res) => {
    res.render("login")
}

const createBlog = (req,res) => {
    res.render("createBlog")
}

const blogs = (req,res) => {
    res.render("blogs")
}

module.exports = {
    register,
    login,
    createBlog,
    blogs
}