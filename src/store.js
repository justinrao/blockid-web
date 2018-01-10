import { applyMiddleware, createStore} from 'redux'
import createBrowserHistory from "history/createBrowserHistory";
import { routerMiddleware } from 'react-router-redux';

import thunk from 'redux-thunk'
import moment from 'moment'

import reducer from "./reducers"

// import {environment} from './environment/environment';

let session = localStorage.getItem('bid.session');
if (session) {
    try {
        session = JSON.parse(session)
        if (moment(session.expires).isBefore(moment())) {
            session = {}
        }
    } catch (e) {
        session = {}
    }
} else {
    session = {}
}
const defaultState = {
    permissions: {},
    users: [],
    session: {},
    router: {},
}

export const history = createBrowserHistory({ basename: '/' })
const middleware = routerMiddleware(history)
const store = createStore(reducer, defaultState, applyMiddleware(thunk, middleware));
export default store