const usersController = require('./users.contollers')

const getAllUsers = (req, res) => {
    const data = usersController.findAllUsers()
    res.status(200).json(data)
}

const getUsersById = (req, res) => {
    const id = req.params.id 
    const data = usersController.findUserById(id)

    if(data){
        res.status(200).json(data)
    } else {
        res.status(404).json({message: 'invalid Id'})
    }   
}

const postNewUser = (req, res) => {
    const {first_name, last_name, email, password, birthday} = req.body

    if(first_name && last_name && email && password && birthday){
        const data = usersController.createNewUser({first_name, last_name, email, password, birthday})
        res.status(200).json(data)
    } else {
        res.status(404).json({
            message: 'Invalid Data',
            fields: {
                first_name: 'String', 
                last_name: 'String', 
                email: 'String', 
                password: 'String', 
                birthday: 'YYYY/MM/DD'
            }})
    }
}

module.exports = {
    postNewUser, 
    getAllUsers,
    getUsersById
}