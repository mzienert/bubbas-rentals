// AUTH
import { RentalFormData } from "../types/RentalForm";

export const USER_HAS_AUTHENTICATED = "USER_HAS_AUTHENTICATED"

// UI
export const SNACKBAR_CLEAR = 'SNACKBAR_CLEAR'
export const SNACKBAR_SUCCESS = 'SNACKBAR_SUCCESS'
export const LOADING_BAR = 'LOADING_BAR'

// RIDERS
export const ADD_RIDER = 'ADD_RIDER'

interface AddRiderAction {
    type: typeof ADD_RIDER
    payload: RentalFormData
}

export type RiderActionTypes = AddRiderAction // | NextActionType
