import {User} from '../data/host'
import { push } from 'react-router-redux'

export function getUser() {
	return (dispatch) => {
		User.get().then((items) => {
			dispatch(gotUsers(items))
		}).catch((err) => {

		})
	}
}

export function gotUsers(items) {
	return {
		type: 'GET_USERS',
		payload: items || []
	};
}

export function deletedUser(id) {
	return {
		type: 'DELETE_USER',
		payload: id
	};
}

export function addUser({id, first, last, password, group}) {
	return (dispatch) => {
		User.create({username: id, firstName: first, lastName: last, password, groupId: group}).then(() => {
			User.get().then((items) => {
				dispatch(gotUsers(items))
				dispatch(push('/'))
			})			
		}).catch((err) => {

		})
	}
}

export function updateUser({id, first, last, password, group}) {
	return (dispatch) => {
		User.update({username: id, firstName: first, lastName: last, password, groupId: group}).then((items) => {
			dispatch(gotUsers(items))
			dispatch(push('/'))
		}).catch((err) => {

		})
	}
}

export function deleteUser(id) {
	return (dispatch) => {
		User.delete(id).then(() => {
			dispatch(deletedUser(id))
			dispatch(push('/'))
		}).catch((err) => {
		})
	}
}