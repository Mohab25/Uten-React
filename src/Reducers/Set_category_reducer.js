import { SETPRODUCTCATEGORY } from "../Actions/types";

let State={
    category:''
}

export default function SetCategoryReducer(state=State,action){
    switch(action.type){
        case SETPRODUCTCATEGORY:console.log('Reducer is called ',action.payload);return{
            ...state, 
            category:action.payload
        }
        
        default:return{state}
    }
}
