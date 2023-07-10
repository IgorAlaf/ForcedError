import React, { useState } from 'react'
import Auth from './Auth'
import { createBadUser } from '../http'

const Page4 = () => {
	const [login, setLogin] = useState('')
	const [pass, setPass] = useState('')
	const [show, setShow] = useState(false)
	const [message, setMessage] = useState('')
	const handleSubmit = async e => {
		e.preventDefault()
		if (login && pass) {
			try {
				await createBadUser(login, pass)
			} catch (e) {}
			setShow(true)
			setMessage('No login field in request body')
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
				messageError={message}
				setShow={setShow}
			/>
		</div>
	)
}

export default Page4
