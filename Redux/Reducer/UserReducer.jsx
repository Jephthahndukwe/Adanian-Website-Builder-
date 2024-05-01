import * as types from '../Constant/Types'

export const authReducer = (state = { loading: false }, action) => {
    switch(action.type) {
        case types.LOGIN_REQUEST:
            return {
                loading: true,
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                user: action.payload
            }
        case types.LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload
            }
        case types.LOGIN_LOGOUT:
            return {}

        default:
            return state
    }
}

export const userRegister = (state = {}, action) => {
    switch (action.type) {
        case types.REGISTER_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                user: action.payload
            }
        case types.REGISTER_USER_FAIL:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload
            }
        case types.REGISTER_USER_RESET:
            return {}

        default:
            return state
    }
}

export const googleAuth = (state = {}, action) => {
    switch(action.type) {
        case types.GOOGLE_AUTH_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.GOOGLE_AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case types.GOOGLE_AUTH_FAIL:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload
            }
        case types.GOOGLE_AUTH_RESET:
            return {}

        default:
            return state
    }
}