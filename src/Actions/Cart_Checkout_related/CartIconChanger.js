import { CART_ICON_TOTAL } from "./types";

let change_icon_number=(plus_or_minus)=>dispatch=>{
    dispatch({
        type:CART_ICON_TOTAL,
        payload:plus_or_minus
    })
}

export default change_icon_number; 