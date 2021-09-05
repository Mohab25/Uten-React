import {combineReducers} from "redux";
import SetCategoryReducer from './Set_category_reducer'
import totals_Reducer from "./totals_reducer";
import CartIconReducer from './cart_icon_reducer'
import cartItemChangeReducer from './cart_item_changer_reducer'
import ActiveLinkReducer from "./active_link_reducer";

export default combineReducers({
    SetCategory:SetCategoryReducer,
    TotalsReducer:totals_Reducer,
    CartIconReducer,
    cartItemChangeReducer,
    ActiveLinkReducer
})
