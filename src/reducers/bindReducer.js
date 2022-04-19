import { combineReducers } from "redux";
import taskReducer from "./taskReducers";
import empReducers from "./empReducers";
export default combineReducers({
    task:taskReducer,
    emp:empReducers,
});