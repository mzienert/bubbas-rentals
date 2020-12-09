import { combineReducers } from "redux"
import auth from "./auth"
import riders from "./riders"

export default combineReducers({ auth, riders })
