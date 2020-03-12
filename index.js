
const express = require ("express")
const helmet = require("helmet")
const welcomeRouter = require("./welcome/welcome-router")
const userRouter = require("./users/users-router")

const server = express()
const port = process.env.PORT || 5000

server.use(helmet())
server.use(express.json())

server.use("/",welcomeRouter )
server.use("/users", userRouter)

//customized error message
server.use((err,req,res, next) => {
    res.status(500).json({
        message:"Something went Wrong"
    })
})

server.listen(port, ()=> {
    console.log(`running at http://localhost:${port} `)
})