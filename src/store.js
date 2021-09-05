import {createStore,applyMiddleware} from 'redux'
import RootReducer from './Reducers/index '
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const initialState={}
const middleware = [thunk] 
const store = createStore(RootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store; 
