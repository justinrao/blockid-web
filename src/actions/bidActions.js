import {BidApi} from '../data/host'
import { push } from 'react-router-redux'
import data from '../data/data.json'

export function getBid(clientBid) {
	return (dispatch) => {
        client = data.clients.find((client) => client.clientBid === clientBid);
        dispatch(gotBid(client))
		// return BidApi.get().then((client) => {
		// 	dispatch(gotBid(client))
		// }).catch((err) => {

		// })
	}
}

export function findBid({clientBid, legalName}) {
	return (dispatch) => {
		return BidApi.find({clientId, legalName}).then((client) => {
			dispatch(gotBid(client))
		}).catch((err) => {

		})
	}
}

export function gotBid(client) {
	return {
		type: 'GOT_BID',
		payload: client || []
	};
}
