const session = (state = {}, action) => {
    switch (action.type) {
      case 'ADD_ACCOUNT':
        return {
          ...state, ...action.payload       
        }
      case 'ADD_ADDRESS':
        return { ...state, address: action.payload }
      case 'ADD_IDENTITY':
      return { ...state, ...action.payload }
      case 'ADD_IMAGE':
        return {}
      default:
        return state
    }
  }
  
  export default session