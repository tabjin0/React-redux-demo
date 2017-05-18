import * as actionTypes from './contants/userinfo'

export function login(data) {
	return {
		type: actionTypes.USERINFO_LOGIN,
		data
	}
}
export function updateCityName(data) {
	return {
		type: actionTypes.UPDATE_CITYNAME,
		data
	}
}