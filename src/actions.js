export const selectOffer = (offer) => {
  return {
    type: 'SELECT_OFFER',
    data: {...offer}
  }
}