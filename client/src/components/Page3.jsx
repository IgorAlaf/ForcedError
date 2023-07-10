import React, { useState } from 'react'
import Auth from './Auth'
import { createFakeUser } from '../http'

const Page3 = () => {
	const [login, setLogin] = useState('')
	const [pass, setPass] = useState('')
	const handleSubmit = async e => {
		e.preventDefault()
		if (login && pass) {
			try {
				await createFakeUser(login, pass)
			} catch (e) {}
		}
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

export default Page3
