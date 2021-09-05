/* this action here is about set the category when the user clicks on the home page, 
 the name of the category must be related to what button the user clicked. 
*/ 
import { SETPRODUCTCATEGORY } from "../types";

let set_category=(category)=>dispatch=>{
    dispatch({
        type:SETPRODUCTCATEGORY,
        payload:category
    })
}

export default set_category