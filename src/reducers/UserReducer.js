const users = (state = [], action) => {
  let i
  switch (action.type) {
    case 'GET_USERS':
      return [
        ...action.payload       
      ]
    case 'ADD_USER':
      return [...state, action.payload]
    case 'SAVE_USER':
      i = state.findIndex((i) => i.Id === action.payload.Id)
      return [...state.slice(0, i), action.payload, ...state.slice(i+1)]
    case 'DELETE_USER':	
      i = state.findIndex((u) => u.id === action.payload)
      return [...state.slice(0, i), ...state.slice(i+1)]
    default:
      return state
  }
}

export default users