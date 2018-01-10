import * as Host from '../Data/Host'
import * as actions from './index.js'

export function login({userId, password}) {
	return (dispatch) => {
		return Host.authenticate({username: userId, password}).then((session) => {
			dispatch(gotSession(session))
            dispatch(getProfile(session))           
		}).catch((err) => {

		})
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
            dispatch(actions.getGroup())
            dispatch(actions.getEmployees())
        }
        Manage.Regions && dispatch(actions.getRegions())
        Manage.Category && dispatch(actions.getCategories())
        Manage.RentalType && dispatch(actions.getPrograms())
        Manage.RentalInventory && dispatch(actions.getRentalInventories())
        Manage.RentalCondition && dispatch(actions.getConditions())
        Manage.FundingSource && dispatch(actions.getFundingSources())
    }
}
export function getProfile(session) {
	return (dispatch) => {
		return Host.getProfile().then((profile) => {
			dispatch(gotProfile(profile))
		})
	}
}
