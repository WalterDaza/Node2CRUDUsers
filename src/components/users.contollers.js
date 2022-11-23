const usersDB = []
let id = 1

// {
// 	id: 1,
// 	first_name: 'string',
// 	last_name: 'string',
// 	email: 'string',
// 	password: 'string',
// 	birthday: 'YYYY/MM/DD'
// }

const findAllUsers = () => {  // mostrar todos los usuarios
    return usersDB
}

const findUserById = (id) => { //mostrar cita por id
    const data = usersDB.find(item => item.id == id) // itera cada indice del arreglo e identifica el id y lo extrae
    return data
}

const createNewUser = (obj) => { //crear nuevo usuario
    const newUser = {
        id: id++,
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    }
    usersDB.push(newUser)
    return newUser
}

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser
}