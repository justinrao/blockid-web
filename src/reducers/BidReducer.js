const bid = (state = {}, action) => {
    let i
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