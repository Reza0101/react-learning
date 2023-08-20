const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id)
    return result
}

const formatPrice = price => {
    const cost= price
    return parseFloat(cost).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

  
export {formatPrice, isInCart}