import User from '../models/User.js'
import bcrypt from 'bcrypt'
class AuthService {
	async login(login, password) {
		const hashPassword = await bcrypt.hash(password, 3)
		const user = await User.create({
			login,
			password: hashPassword
		})
		return {
			login
		}
	}
}

export default new AuthService()
