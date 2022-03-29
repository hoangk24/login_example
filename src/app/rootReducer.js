import { combineReducers } from "redux";
import loginSlice from "../feautes/login/loginSlice";

export const rootReducer = combineReducers({
 login: loginSlice,
});
