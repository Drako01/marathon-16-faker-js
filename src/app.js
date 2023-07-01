import express from 'express'
import usersRouter from './routers/user.router.js'

const app = express()
app.use('/api/users', usersRouter)

app.listen(8080, () => console.log('Server up!'))