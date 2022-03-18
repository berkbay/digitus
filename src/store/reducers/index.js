const INITIAL_STATE = {
  api:[],
  errorMessage: ''
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_API_SUCCESS' :
      return {...state, api: action.payload, errorMessage: null}
    case 'GET_ERROR' :
      return {...state, api:null, errorMessage: action.payload}
    default: return state
  }
}
