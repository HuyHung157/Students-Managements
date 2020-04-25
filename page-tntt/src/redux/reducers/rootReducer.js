import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import locateReducer from './locateReducer';

const rootReducer = combineReducers({
    studentReducer,
    locateReducer //locateReducer: locateReducer
})

export default rootReducer