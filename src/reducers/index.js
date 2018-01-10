import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import users from './UserReducer'
import session from './SessionReducer'

const rootReducer = combineReducers({
	session,
	users,
	router: routerReducer
})

export default rootReducer