import {BidApi} from '../data/host'
import { push } from 'react-router-redux'
import data from '../data/data.json'

export function getBid(clientBID) {
	return (dispatch) => {
        const client = data.clients.find((client) => client.clientBID === clientBID);
        dispatch(gotBid(client))
		// return BidApi.get().then((client) => {
		// 	dispatch(gotBid(client))
		// }).catch((err) => {

		// })
	}
}


export function getBids() {
	return (dispatch) => {
		dispatch(gotBids(data.clients))
		// return data.clients;
	}
}
export function findBid(search) {
	return (dispatch) => {
		return BidApi.find({search}).then((clients) => {
            dispatch(gotBids(clients))
            dispatch(push('/portal/' + search))
		}).catch((err) => {

		})
	}
}

export function requestAccess(clientBID) {
	return (dispatch) => {
		console.log('requestAccess: ', clientBID)
		return new Promise((resolve, reject) => {
			dispatch({type: 'REQUEST_ACCESS', payload: {clientBID, access: 'INPROGRESS'}})
			setTimeout(() => {
				dispatch({type: 'REQUEST_ACCESS', payload: {clientBID, access: 'GRANTED'}})
				resolve();
			}, 3000);
		})
	}
}

export function gotBid(client) {
	return {
		type: 'GOT_BID',
		payload: client || {}
	};
}

export function gotBids(clients) {
	return {
		type: 'GOT_BIDS',
		payload: clients || []
	};
}
