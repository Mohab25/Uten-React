import {ACTIVELINK} from "../Actions/types";

let State = {
    linksPositions:[]
} 

export default function ActiveLinkReducer(state=State,action){
switch(action.type){
    case ACTIVELINK:{
// instead of using .push method, i used contact([new_item]) which will return a merged array. 

        return{
            ...state,
            // i don't know why it's a state.state.items , other reducers (link cart items changer)just work with state.items 
            linksPositions:state.state.linksPositions.concat([action.payload])
        }
    }
    default:return{state}
}

}