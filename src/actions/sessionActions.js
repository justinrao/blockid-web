import * as Host from '../data/host'
import * as actions from './index.js'
import * as moment from 'moment'

export function login({userId, password}) {
	return (dispatch) => {
        dispatch(gotSession({sessionId: 23874234, expires: moment().add(1, 'year')}))
        // dispatch(getProfile())           
        // return Host.authenticate({username: userId, password}).then((session) => {
		// 	dispatch(gotSession(session))
        //     dispatch(getProfile(session))           
		// }).catch((err) => {

		// })
	}
}

export function logout() {
    return {type: 'LOGOUT'};
}

export function gotSession(session) {
	return {
		type: 'LOGIN',
		payload: session || {}
	};
}

export function gotProfile(profile = {Permissions: {}}) {
    return {type: 'GET_PROFILE', payload: profile
    }    
}

export function getData({Users = {}, Manage = {}}) {
    return (dispatch) => {
        if (Users.View) {
            dispatch(actions.getUser())
        }
    }
}
export function getProfile(session) {
	return (dispatch) => {
		return Host.getProfile().then((profile) => {
			dispatch(gotProfile(profile))
		})
	}
}
