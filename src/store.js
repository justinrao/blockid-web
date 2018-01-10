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
    users: [],
    session: {},
    router: {},
    provinces: [
        {id: 'AB', label: 'Alberta'},
        {id: 'BC', label: 'British Columbia'},
        {id: 'MB', label: 'Manitoba'},
        {id: 'ON', label: 'Ontario'},
        {id: 'NB', label: 'New Brunswick'},
        {id: 'NL', label: 'Newfoundland'},
        {id: 'NS', label: 'Nova Scotia'},
        {id: 'NT', label: 'Northwest Territories'},
        {id: 'NU', label: 'Nunavut'},
        {id: 'PE', label: 'Prince Edward Island'},
        {id: 'SK', label: 'Saskatchewan'},
        {id: 'QC', label: 'Quebec'},
        {id: 'YT', label: 'Yukon'}
    ],
    idtypes: [
        {id: 'dl', label: 'Driver\'s License'},
        {id: 'pp', label: 'Passport'}
    ]
}

export const history = createBrowserHistory({ basename: '/' })
const middleware = routerMiddleware(history)
const store = createStore(reducer, defaultState, applyMiddleware(thunk, middleware));
export default store