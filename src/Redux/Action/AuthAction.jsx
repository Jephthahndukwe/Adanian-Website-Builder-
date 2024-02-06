import * as types from '../Constant/Auth'
import axios from 'axios'


// LOGIN A USER
export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({ type: types.LOGIN_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('https://nice-yak-bell-bottoms.cyclic.app', { email, password }, config)

        dispatch({
            type: types.LOGIN_SUCCESS,
            payload: data.user,
        })
    } catch (error) {
        dispatch({
            type: types.LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

//REGISTER A USER
export const register = ( userName, email, password ) => async (dispatch) => {
    try {
        dispatch({ type: types.REGISTER_USER_REQUEST })

        const config = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }

        const { data } = await axios.post('http://localhost:8080/api/v1/auth/register', { userName, email, password }, config)

        dispatch({
            type: types.REGISTER_USER_SUCCESS,
            payload: data.user,
        })

    } catch (error) {
        dispatch({
            type: types.REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

//LOAD USER
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: types.LOAD_USER_REQUEST })

        const { data } = await axios.get('https://nice-yak-bell-bottoms.cyclic.app/api/v1/auth/me')

        dispatch({
            type: types.LOAD_USER_SUCCESS,
            payload: data.user,
        })

    } catch (error) {
        dispatch({
            type: types.LOAD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}
