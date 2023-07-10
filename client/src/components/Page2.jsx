import React, { useState } from 'react'
import Auth from './Auth'

const Page2 = () => {
	const [login, setLogin] = useState('')
	const [pass, setPass] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		if (login && pass) {
			console.error("Unable to read invalid encoding from field 'password'")
		}
		// throw new Error("Unable to read invalid encoding from field 'password'")
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

export default Page2
