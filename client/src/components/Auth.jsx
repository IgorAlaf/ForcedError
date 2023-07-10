import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Auth = ({
	handle,
	login,
	pass,
	setLogin,
	setPass,
	show,
	message,
	messageError,
	setShow
}) => {
	const resetForm = e => {
		e.preventDefault()
		if (login && pass) {
			setLogin('')
			setPass('')
			if (setShow) {
				setShow(false)
			}
		}
	}
	return (
		<div className='h-screen flex justify-center items-center'>
			<div
				className='bg-[#fff] p-8 rounded-[22px]'
				style={{ maxWidth: '310px' }}
			>
				<h1 className='text-3xl ml-1 font-bold text-[#3B2C68]'>
					Welcome Back...
				</h1>
				<h3 className='text-xs text-gray-400 mt-1'>
					Please enter your login and password
				</h3>
				<form className='mt-4' onSubmit={handle}>
					<div>
						<input
							type='text'
							value={login}
							onChange={e => setLogin(e.target.value)}
							placeholder='login'
							className='outline-none py-[7px] px-3 border border-solid border-gray-300 rounded-lg mt-2 w-full'
						/>
						{show && messageError && (
							<div className='text-red-500 text-sm mt-1 font-semibold absolute '>
								{messageError}
							</div>
						)}
						<input
							type='text'
							value={pass}
							onChange={e => setPass(e.target.value)}
							placeholder='password'
							className='outline-none py-[7px] px-3 border border-solid border-gray-300 rounded-lg mt-7 w-full'
						/>
					</div>
					<h4 className='text-xs text-gray-400 mt-5'>
						By login,you agree to our{' '}
						<span className='underline text-[#8473ED]'>Terms & Conditions</span>
					</h4>
					<div className='mt-5 flex items-center justify-between gap-4'>
						<button
							onClick={handle}
							type='submit'
							className='bg-[#8473ED] duration-500 transition hover:bg-[#ada0ff] text-white text-md font-semibold rounded-sm py-1 px-5 pr-6 flex justify-start'
							style={{ flex: '1 1 100%' }}
						>
							login...
						</button>

						<button
							type='reset'
							onClick={resetForm}
							className='duration-500 transition hover:bg-gray-300 text-md font-semibold rounded-sm py-1  px-6 text-gray-500'
						>
							reset
						</button>
					</div>
				</form>
				<div className='mt-8 pt-6 border-t border-solid text-gray-500 text-xs border-gray-300'>
					You can visit other pages{' '}
					<Link to={'/'} className='text-[#8473ED] underline'>
						Main page
					</Link>
				</div>
				{show && message && (
					<div className='text-green-500 text-sm mt-1 font-semibold absolute'>
						{message}
					</div>
				)}
			</div>
		</div>
	)
}

export default Auth
