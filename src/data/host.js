import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

let instance = axios.create();

export function handleResponse({data}) {
	return data
}

let session = {}

function request(name, params = {}) {
    return instance.get(`/${name}`, {...session, ...params}).then(handleResponse)
}

export function setSession({sessionId}) {
 session.sessionId = sessionId;   
}

export function authenticate(credentials) {
    return request('GetSession', credentials).then((s = {}) => {
        session.sessionId = s.sessionId;
        return s;
    });
}

export function getProfile() {
    return Promise.resolve({});
}

export class BidApi {

    static get(bid) {
        return request(`clients/${bid}`);
    }

    static find(search) {
        return request('clients', {
            params: {
                legalName: search
            }
        })
    }

	static getAuditLog(bid) {
		return request(`clients/${bid}/transactions`)
	}
}

export class User {

    static get() {
        return request('GetUsers');
    }
    static create(user) {
        return request('CreateUser', user)
    }
    static update(user) {
        return request('UpdateUser', user)
    }
    static delete(id) {
        return request('DeleteUser', {id})
    }

}
