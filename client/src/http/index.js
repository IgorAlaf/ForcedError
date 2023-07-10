import axios from 'axios'

const $api = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	withCredentials: true
})

export const createRealyUser = async (login, password) => {
	const response = $api.post(`${process.env.REACT_APP_API_URL}/auth`, {
		login,
		password
	})
	return response
}
export const createBadUser = async (login, password) => {
	const response = $api.post(`${process.env.REACT_APP_API_URL}/auth`, {
		email: login,
		password
	})
	return response
}

export const createFakeUser = async (login, password) => {
	const response = $api.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
		login,
		password
	})
	return response
}
export const createExpectUser = async (login, password) => {
	const response = $api.post(`${process.env.REACT_APP_API_URL}/auth`, {
		login,
		password
	})
	return response
}
export const createServerErrorUser = async (login, password) => {
	const response = $api.post(`${process.env.REACT_APP_API_URL}/auth`, {
		login,
		password
	})
	return response
}
