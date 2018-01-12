import {BidApi} from '../data/host'
import { push } from 'react-router-redux'
import data from '../data/data.json'

export function getBid(clientBID) {
	return (dispatch) => {
		console.log(clientBID);
		return BidApi.get(clientBID).then((client) => {
			dispatch(gotBid(client))
		}).catch((err) => {

			// Remove this on Monday if API integrated is well
            const client = data.clients.find((client) => client.clientBID === clientBID);
            dispatch(gotBid(client))

            console.log(err);
		})
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
		return BidApi.find(search).then((clients) => {
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

export function getAuditLog(bid) {
	return (dispatch) => {
		BidApi.getAuditLog(bid)
			.then((result) => {
				dispatch(receivedAuditLog(result))
			})
			.catch(err => console.error(err))
	}
}

export function receivedAuditLog(auditLog) {
	console.log(auditLog)
	return {
		type: "GOT_AUDITLOG",
		payload: auditLog || []
	}
}
