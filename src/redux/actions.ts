import {
    SNACKBAR_CLEAR,
    USER_HAS_AUTHENTICATED,
    SNACKBAR_SUCCESS,
    LOADING_BAR,
    ADD_RIDER,
    RiderActionTypes,
} from "./actionTypes"
import {RentalFormData} from "../types/RentalForm";

export const userHasAuthenticated = (isAuthenticated: boolean) => ({
    type: USER_HAS_AUTHENTICATED,
    payload: {
        isAuthenticated
    }
})

export const showSnackbar = (snackbarMessage: any, snackbarType: any) => ({
    type: SNACKBAR_SUCCESS,
    payload: {
        snackbarMessage,
        snackbarType,
    }
})

export const clearSnackbar = () => ({
    type: SNACKBAR_CLEAR
})

export const setLoading = () => ({
    type: LOADING_BAR
})

export const addRider = (rider: RentalFormData): RiderActionTypes => ({
    type: ADD_RIDER,
    payload: rider
})
