import { CART_ITEMS_ADD } from "./types";

let cartItemAdd=(product)=>dispatch=>{
    dispatch({
        type:CART_ITEMS_ADD,
        payload: product
    })
}

export default cartItemAdd; 