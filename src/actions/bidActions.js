import {BidApi} from '../data/host'
import { push } from 'react-router-redux'
import data from '../data/data.json'

export function getBid(clientBid) {
	return (dispatch) => {
        const client = data.clients.find((client) => client.clientBid === clientBid);
        dispatch(gotBid(client))
		// return BidApi.get().then((client) => {
		// 	dispatch(gotBid(client))
		// }).catch((err) => {

		// })
	}
}

export function findBid(search) {
	return (dispatch) => {
		return BidApi.find({search}).then((clients) => {
            dispatch(gotBids(clients))
            dispatch(push('/portal/bids'))
		}).catch((err) => {

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
