const {createUser,getAllUser,updateUser,deleteUser} = require('../controller/userController')
const router = require('express').Router()
router.post('/createUser',createUser)
router.get('/getAllUser',getAllUser)
router.put('/update/:userId',updateUser)
router.delete('/delete/:userId',deleteUser)








module.exports = router