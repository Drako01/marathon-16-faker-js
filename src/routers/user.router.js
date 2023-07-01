import { Router } from 'express'
import { generateUser } from '../utils.js'

const router = Router()

router.get('/', async (req, res) => {
    const users = []
    for (let index = 0; index < 4; index++) {
        users.push(generateUser())
    }
    res.json({ status: 'success', payload: users })
})

export  default router