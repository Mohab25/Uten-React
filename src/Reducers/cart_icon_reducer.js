import { CART_ICON_TOTAL } from "../Actions/Cart_Checkout_related/types";

let State={
    icon_total:0
}


export default function CartIconReducer(state=State,action){
    switch(action.type){
        case CART_ICON_TOTAL:{
            if(action.payload=='plus'){
                return{
                    ...state,
                    icon_total:state.icon_total+1
                }
            }
            else if(action.payload=='minus'){
                return{
                    ...state,
                    icon_total:state.icon_total-1<0?0:state.icon_total-1
                }
            }
        }
        default:return state
    }
}