import {filtersReducer} from "./filters";
import {clothesReducer} from "./Сlothes";
import {combineReducers} from "redux";


export const rootReducer = combineReducers({
    filters:filtersReducer,
    clothes:clothesReducer
})