import { ADD_RIDER } from "../actionTypes";

const initialState = {
    data: []
};

export default function(state = initialState, action: any) {
    switch (action.type) {
        case ADD_RIDER: {
            const { rider } = action.payload;
            return { 
                ...state,
                data: [...state.data, rider]
            }
        }
        default:
            return state;
    }
}
