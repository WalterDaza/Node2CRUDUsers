const express = require("express")

const usersRouter = require('./components/users.router')

const port = 9452
const app = express()

app.use(express.json())

app.get ('/', (req, res) => {
    res.status(200).json({message: 'Ok'})
}) 

app.use('/api/v1', usersRouter)


app.listen(port, () => {
    console.log(`Serverd started at port ${port}`)
})