import { USER_HAS_AUTHENTICATED } from "../actionTypes";

export interface AuthIState {
    isAuthenticated: boolean,
}

const initialState: AuthIState = {
    isAuthenticated: false,
};

export default function(state = initialState, action: any) {
    switch (action.type) {
        case USER_HAS_AUTHENTICATED: {
            const { isAuthenticated } = action.payload;
            return {
                ...state,
                isAuthenticated
            };
        }
        default:
            return state;
    }
}
