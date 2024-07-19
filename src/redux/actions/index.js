// For Add items to cart
export const addCart = (products) => {
    return{
        type : "ADDCART",
        payload : products,
    }
}

// For delete items from cart
export const delCart = (products) => {
    return{
        type : "DELITEM",
        payload : products,
    }
}