import {filtersReducer} from "./filters";
import {clothesReducer} from "./Сlothes";
import {combineReducers} from "redux";
import {asideReducer} from "./newItems";


export const rootReducer = combineReducers({
    filters:filtersReducer,
    clothes:clothesReducer,
    aside: asideReducer
})