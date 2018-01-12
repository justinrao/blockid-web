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
        {id: 'NB', label: 'New Brunswick'},
        {id: 'NL', label: 'Newfoundland'},
        {id: 'NS', label: 'Nova Scotia'},
        {id: 'NT', label: 'Northwest Territories'},
        {id: 'NU', label: 'Nunavut'},
        {id: 'ON', label: 'Ontario'},
        {id: 'PE', label: 'Prince Edward Island'},
        {id: 'SK', label: 'Saskatchewan'},
        {id: 'QC', label: 'Quebec'},
        {id: 'YT', label: 'Yukon'}
    ],
    idtypes: [
        {id: 'dl', label: 'Driver\'s License'},
        {id: 'pp', label: 'Passport'}
    ],
    kycStatus: [
        {id: 'INIT', label: 'Started'},
        {id: 'INPROGRESS', label: 'In Progress'},
        {id: 'DONE', label: 'Done'}
    ],
    documentTypes: [
        {id: 'CERTIFICATE_OF_INCORPORATION', label: 'Certificate of Incorporation'},
        {id: 'CLIENT_AGREEMENT', label: 'Client Agreement'},
        {id: 'CERTIFICATE_OF_AUTHORIZED_SIGNATORIES', label: 'Certificate of Authorized Signatures'},
        {id: 'POWER_TO_BID', label: 'Power to Bid'},
        {id: 'PEP_HIO_FORM', label: 'PEP HIO Form'},
        {id: 'CONFIRMATION_OF_EXISTENCE', label: 'Confirmation of Existence'}
    ],
    riskRating: [
        {id: 'STANDARD', label: 'Standard'},
        {id: 'MEDIUM', label: 'Medium'},
        {id: 'HIGH_1', label: 'High 1'},
        {id: 'HIGH_2', label: 'High 2'},
        {id: 'HIGH_3', label: 'High 3'},
        {id: 'RESTRICTED', label: 'Restricted'}
    ]
}

export const history = createBrowserHistory({ basename: '/' })
const middleware = routerMiddleware(history)
const store = createStore(reducer, defaultState, applyMiddleware(thunk, middleware));
export default store