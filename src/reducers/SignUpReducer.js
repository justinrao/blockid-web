const signup = (state = {}, action) => {
    switch (action.type) {
      case 'SAVE_ACCOUNT':
      case 'SAVE_INITIAL':
      case 'SAVE_ADDRESS':
      case 'SAVE_IDENTITY':
        return { ...state, ...action.payload }
      case 'SUBMIT_ACCOUNT':
        return {} // TODO
      case 'SUBMIT_SIGNUP':
        return {} // TODO
      case 'SUBMIT_DOCUMENT':
        return {} // TODO
      default:
        return state
    }
  }
  
  export default signup