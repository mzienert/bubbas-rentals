import { ADD_RIDER, RiderActionTypes } from "../actionTypes";
import { RentalFormData } from "../../types/RentalForm";

export interface RidersIState {
    data: Array<RentalFormData>
}

const initialState: RidersIState = {
    data: []
};

export default (state = initialState, action: RiderActionTypes) => {
    switch (action.type) {
        case ADD_RIDER: {
            return {
                data: [...state.data, action.payload]
            }
        }
        default:
            return state;
    }
}
