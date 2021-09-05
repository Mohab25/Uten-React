import {TOTAL_PRICE_QUANTITY} from './types'

let set_totals =(totals_ob)=>dispatch=>{
    dispatch({
        type:TOTAL_PRICE_QUANTITY,
        payload:totals_ob
    })
}

export default set_totals