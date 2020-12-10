import { combineReducers } from "redux"
import auth, { AuthIState } from "./auth"
import riders, { RidersIState } from "./riders"

export interface RootState {
    auth: AuthIState
    riders: RidersIState
}

export default combineReducers({ auth, riders })
