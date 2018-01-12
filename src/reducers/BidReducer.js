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
    switch (action.type) {
      case 'GOT_BIDS':
        return [
          ...action.payload       
        ]
      default:
        return state
    }
  }
  