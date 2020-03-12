const express = require ("express")
const models = require("./users-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    
    try {
        users = await models.findUser()
        res.json(users)
    }catch (error) {
     next(error)
    }
})
module.exports = router