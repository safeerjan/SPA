const rootreducer = (state = { selectedOffer: {} }, action) => {
  switch (action.type) {
    case 'SELECT_OFFER':
      return {
        ...state,
        selectedOffer: action.data
      }
    default:
      return state
  }
}

export default rootreducer