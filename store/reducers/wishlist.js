import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} from "../actions/wishlist"
import {ITEMS} from "../../data/dummy_data"
import Item from "../../models/Item"

const initialState = {
    allItems: ITEMS,
    items:[]
}

export default (state=initialState, action) =>{

    switch(action.type){
        case ADD_TO_WISHLIST:
            const addedItemIndex = state.allItems.findIndex(item => item.id === action.id)
            const addedItem = state.allItems.find(item => item.id === action.id)
            addedItem.isLiked = true

            return{
                ...state,
                items : state.items.concat(addedItem),
                allItems: state.allItems,//.splice(addedItemIndex,1, addedItem),

            }



                case REMOVE_FROM_WISHLIST:
                    const removedItemIndex = state.items.findIndex(item => item.id === action.id)
                    // const removedItemsIndex = state.allItems.findIndex(item => item.id === action.id)
                    const removedItem = state.allItems.find(item => item.id === action.id)

                    const spreadItems = [...state.items]
                    const updatedRemItem = removedItem[removedItemIndex]
                    removedItem.isLiked = false
                    spreadItems.splice(removedItemIndex,1)
                    return{
                        ...state,
                        items : [...spreadItems],
                        allItems: state.allItems,//.splice(removedItemIndex,1, removedItem),
        
                    }

    }
    return state;
}