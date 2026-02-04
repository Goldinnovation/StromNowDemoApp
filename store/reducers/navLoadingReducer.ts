





const initialState = {
    isLoading: false
}

  
  export default (state = initialState, { type, payload }: any) => {
    switch (type) {
      case "SET_NAV_LOADING":
        return { ...state, isLoading: payload }
      
      default:
        return state
    }
  }
  
  