import {combineReducers} from "redux";
import locateReducer from './locateReducer';

const rootReducer = combineReducers ({
    locateReducer, //locateReducer: locateReducer
})

export default rootReducer