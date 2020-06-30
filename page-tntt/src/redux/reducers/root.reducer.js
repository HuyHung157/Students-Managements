import { combineReducers } from "redux";
import teacherReducer from "./teacher.reducer";
import locateReducer from './locate.reducer';

const rootReducer = combineReducers({
    teacherReducer,
    locateReducer //locateReducer: locateReducer
})

export default rootReducer