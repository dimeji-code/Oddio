import { INCREMENT } from "../actions/cart"
import CartItem from "../../models/cartItem"

const initialState = {
    totalItems: 0,
    totalAmount: 0,
    itemList: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:

            const addedItem = action.product
            const price = addedItem.price
            const title = addedItem.brand

            let updatedOrNewCartItem;

            if (state.itemList[addedItem.id]) {

                updatedOrNewCartItem = new CartItem(
                    state.itemList[addedItem.id].quantity + 1,
                    price,
                    title,
                    state.itemList[addedItem.id].sum + price
                )
            }
            else {
                updatedOrNewCartItem = new CartItem(1, price, title, price)

            }


            return {
                // ...state,
                itemList: { ...state.itemList, [addedItem.id]: updatedOrNewCartItem },
                totalItems: state.totalItems + 1,
                totalAmount: state.totalAmount + price
            }

        default:
            return state

    }
    return state
}