import React, { useState } from 'react'
import Auth from './Auth'
import { createRealyUser } from '../http'

const Page7 = () => {
	const [login, setLogin] = useState('')
	const [pass, setPass] = useState('')
	const [show, setShow] = useState(false)
	const [message, setMessage] = useState('')
	const handleSubmit = async e => {
		e.preventDefault()
		if (login && pass) {
			try {
				await createRealyUser(login, pass)
				setShow(true)
				setMessage('User successfully registered')
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
				show={show}
				message={message}
				setShow={setShow}
			/>
		</div>
	)
}

export default Page7
