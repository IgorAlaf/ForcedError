import React, { useState } from 'react'
import Auth from './Auth'
import { createServerErrorUser } from '../http'

const Page6 = () => {
	const [login, setLogin] = useState('')
	const [pass, setPass] = useState('')
	const handleSubmit = async e => {
		e.preventDefault()
		if (login && pass) {
			try {
				document.cookie = 'exception=6'
				await createServerErrorUser(login, pass)
			} catch (e) {}
		}
		document.cookie = ''
	}
	return (
		<div>
			<Auth
				handle={handleSubmit}
				login={login}
				setLogin={setLogin}
				pass={pass}
				setPass={setPass}
			/>
		</div>
	)
}

export default Page6
