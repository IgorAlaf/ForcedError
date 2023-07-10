import React, { useState } from 'react'
import Auth from './Auth'

const Page1 = () => {
	const [login, setLogin] = useState('')
	const [pass, setPass] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
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

export default Page1
