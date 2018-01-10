const session = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('bID.session', JSON.stringify(action.payload));
      return {
        ...action.payload       
      }
    case 'LOGOUT':
      localStorage.setItem('bID.session', JSON.stringify(action.payload));
      return {}
    default:
      return state
  }
}

export default session