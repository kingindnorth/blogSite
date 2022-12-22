const express = require("express")
const ejs = require("ejs")
const cookieParser = require("cookie-parser")

const connect = require("./utils/db")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const blogRoute = require("./routes/blogs")
const viewRoute = require("./routes/render")

require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 3210

//serve static folder
app.use(express.static("public"))

//set view engine
app.set("view engine", "ejs")

//cookie parser
app.use(cookieParser())

//body-parser-json
app.use(express.json())
//body-parser-form
app.use(express.urlencoded({extended:true}))

//static file serving
app.use(express.static("public"))

//view engine
app.set("view engine","ejs")

//routes
app.use("/views",viewRoute)
app.use("/auth",authRoute)
app.use("/users",userRoute)
app.use("/blogs",blogRoute)

app.listen(PORT,()=>{
    connect()
    console.log(`server started on port:${PORT}`)
})