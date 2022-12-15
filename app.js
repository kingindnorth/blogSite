const express = require("express")
const ejs = require("ejs")

const connect = require("./utils/db")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
// const blogRoute = require("./routes/blogs")

require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 3210

//body-parser
app.use(express.json())
//static file serving
app.use(express.static("public"))
//view engine
app.set("view engine","ejs")

//routes
app.use("/auth",authRoute)
app.use("/users",userRoute)
// app.use("/blogs",blogRoute)

app.listen(PORT,()=>{
    connect()
    console.log(`server started on port:${PORT}`)
})