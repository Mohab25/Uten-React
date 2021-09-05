import {CART_ITEMS_ADD} from '../Actions/Cart_Checkout_related/types'

let State={
    cart_items:[]
}

export default function cartItemChangeReducer(state=State,action){
    switch(action.type){
        case CART_ITEMS_ADD:{
            // instead of using .push method, i used contact([new_item]) which will return a merged array. 
            return{
                ...state,
                cart_items:state.cart_items.concat([action.payload])
            }
        }
        default:return state
    }
}