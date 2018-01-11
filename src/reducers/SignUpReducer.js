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
        
      case 'SAVE_ACCOUNT':
        return {}
      case 'SUBMIT_ACCOUNT':
        return {}
      case 'SAVE_INITIAL':
        return {}
      case 'SAVE_ADDRESS':
        return {}
      case 'SAVE_IDENTITY':
        return {}
      case 'SUBMIT_SIGNUP':
        return {}
      case 'SUBMIT_DOCUMENT':
        return {}
      default:
        return state
    }
  }
  
  export default session