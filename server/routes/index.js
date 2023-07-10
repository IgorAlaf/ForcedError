import { Router } from 'express'
import authController from '../controllers/auth-controller.js'
const { login } = authController
const router = new Router()

router.post('/auth', login)

export default router
