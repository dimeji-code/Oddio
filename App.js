import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import SwitchNav from "./navigation/SwitchNav"

import cartReducer from "./store/reducers/cart"
import wishListReducer from "./store/reducers/wishlist"
import authReducer from "./store/reducers/auth"

import {createStore, combineReducers} from "redux"
import {Provider} from "react-redux"


const rootReducer = combineReducers({
  auth: authReducer,
  wishList: wishListReducer,
  // cart: cartReducer,
});

const store = createStore(rootReducer)



export default function App() {
  return (
    <Provider store={store}>
        <SwitchNav />
      </Provider>
  );
}


