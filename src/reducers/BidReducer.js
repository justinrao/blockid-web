const bid = (state = {}, action) => {
    switch (action.type) {
      case 'GOT_BID':
        return {
          ...action.payload       
        }
      default:
        return state
    }
  }
  
  export default bid

  export const bids = (state = [], action) => {
    let i
    switch (action.type) {
      case 'GOT_BIDS':
        console.log(state, action.type, action.payload);
        return [...action.payload]
      case 'REQUEST_ACCESS':
        i = state.findIndex((i) => i.clientBID === action.payload.clientBID)
        return [...state.slice(0, i), {...state[i], access: action.payload.access}, ...state.slice(i+1)]
      default:
        return state
    }
  }
  