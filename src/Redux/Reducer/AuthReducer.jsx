import * as types from '../Constant/Auth'

export const authReducer = (state = { user: {} }, action) => {
    switch(action.type) {
        case types.LOGIN_REQUEST:
        case types.REGISTER_USER_REQUEST:
        case types.LOAD_USER_REQUEST:
            return {
                loading: true,
            }
        case types.LOGIN_SUCCESS:
        case types.REGISTER_USER_SUCCESS:
        case types.LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                user: action.payload
            }
        case types.LOAD_USER_FAIL:
            return {
                loading: false,
                user: null,
                error: action.payload
            }
        case types.LOGIN_FAIL:
        case types.REGISTER_USER_FAIL:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload
            }
        case types.CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}
