import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import users from './UserReducer'
import session from './SessionReducer'
import signup from './SignUpReducer'
import bid from './BidReducer'

const emptyReducer = (state = [], action) => {
    return state;
  }

const rootReducer = combineReducers({
	session,
	users,
	signup,
	bid,
	idtypes: emptyReducer,
	documentTypes: emptyReducer,
	riskRating: emptyReducer,
	kycStatus: emptyReducer,
	provinces: emptyReducer,
	router: routerReducer
})

export default rootReducer