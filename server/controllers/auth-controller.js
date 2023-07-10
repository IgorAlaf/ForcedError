import authService from '../services/auth-service.js'

class AuthController {
	async login(req, res, next) {
		const { exception } = req.cookies
		if (exception === '5') {
			res.cookie('exception', 'none')
			setTimeout(() => {
				res.status(504).json({ error: 'Server is not responsed' })
			}, 10000)
		} else if (exception === '6') {
			res.cookie('exception', 'none')
			return res
				.status(500)
				.json({ status: 500, error: 'Internal server error' })
		} else {
			const { login, password } = req.body
			if (!login) {
				return res.status(400).json({
					status: 400,
					error: 'Bad request instead of login comes mail'
				})
			}
			const user = await authService.login(login, password)
			res.json(user)
		}
	}
}

export default new AuthController()
