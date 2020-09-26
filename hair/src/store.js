import {createStore, applyMiddleware} from 'redux';
import reducer from "./reducers/reducer"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
const initialState={}

const middleWare = [thunk]


const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;