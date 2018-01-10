import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

let instance = axios.create();

export function handleResponse({data}) {
    let {status, ...value} = data.d;
    if (status === 2) {
        return Promise.reject('reset');
    } else if (status === 1) {
        return Promise.reject('Request failed.');
    } else if (status === 3) {
        return Promise.reject('Access denied.');
    } else {
        if (value.value)
            return Promise.resolve(value.value);
        else
            return Promise.resolve(value);
    }
}

let session = {}

function request(name, params = {}) {
    return instance.post(`/${name}`, {...session, ...params}).then(handleResponse)
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

