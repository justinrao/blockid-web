import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import users from './UserReducer'
import session from './SessionReducer'

let permissions = (state = [], action) => {
	return state
}

const rootReducer = combineReducers({
	session,
	users,
	router: routerReducer
})

export default rootReducer