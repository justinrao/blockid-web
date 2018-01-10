import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import users from './UserReducer'
import session from './SessionReducer'

const emptyReducer = (state = [], action) => {
    return state;
  }

const rootReducer = combineReducers({
	session,
	users,
	idtypes: emptyReducer,
	provinces: emptyReducer,
	router: routerReducer
})

export default rootReducer