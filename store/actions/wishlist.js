export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST"
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST"

export const addToWishlist = itemId => {
    return{
        type:ADD_TO_WISHLIST, id: itemId
    }
}
export const removeFromWishlist = itemId => {
    return{
        type:REMOVE_FROM_WISHLIST, id:itemId
    }
}
