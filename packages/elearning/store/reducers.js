/* eslint-disable default-param-last */
import { combineReducers } from "redux";
import * as types from "./types";

import Cookies from 'js-cookie';

const initialState = {
	cartItems: Cookies.get("cart_items") ? JSON.parse(Cookies.get("cart_items")) : [],
	discount: 0.0,
};

// COUNTER REDUCER
const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_TO_CART:
			let existingItem = state.cartItems.find(
				(course) => action.data.id === course.id
			);
			if (existingItem) {
				existingItem.quantity += 1;
				return {
					...state,
				};
			} else {

				const updatedCartItems = [...state.cartItems, action.data];
				Cookies.set("cart_items", JSON.stringify(updatedCartItems));

				return {
					...state,
					cartItems: updatedCartItems,
				};
			}

		case types.GET_DISCOUNT:
			return {
				...state,
				discount: action.data,
			};

		case types.REMOVE_CART:
			let new_items = state.cartItems.filter(
				(item) => action.id !== item.id
			);
			Cookies.set("cart_items", JSON.stringify(new_items))
			return {
				...state,
				cartItems: new_items,
			};
		case types.RESET_CART:
			Cookies.remove("cart_items")
			return {
				...state,
				cartItems: [],
			};
		default:
			return state;
	}
};

// COMBINED REDUCERS
const reducers = {
	cart: cartReducer,
};

export default combineReducers(reducers);
