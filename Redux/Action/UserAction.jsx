import * as types from '../Constant/Types'
import axios from 'axios'
import toast from 'react-hot-toast'
import { header, authHeader } from '../Context/Header'
// import { setCredentials } from '../../src/Auth/Slice/userSlice';
// import { setCredentials } from '../../src/Auth/Slice/userSlice'



// LOGIN A USER
export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({ type: types.LOGIN_REQUEST })

        const { data } = await axios.post('https://ayoba.adanianlabs.io/api/user/login', { email, password }, { headers: header })
        if(data.status === 'ok') {
            dispatch({
                type: types.LOGIN_SUCCESS, 
                payload: data.data
            })
            toast.success(`Welcome Back`, {position: "top-right"})
        }
    } catch (error) {
        const message = error.response ? error.response.data.message : "something went wrong"
        dispatch({
            type: types.LOGIN_FAIL, 
            payload: message
        })
        toast.error(message, {
            position: "top-right"
        })
    }
}

//REGISTER A USER
export const register = ( user ) => async (dispatch) => {

    try {
        console.log(user)
        dispatch({ type: types.REGISTER_USER_REQUEST })
        const { data } = await axios.post('https://ayoba.adanianlabs.io/api/user/signup', user)
        if(data.status === 'ok') {
            dispatch({type: types.REGISTER_USER_SUCCESS, payload: data.data})
            toast.success("user registered successfully", {
                position: "top-right"
            })
        } else {
            dispatch({type: types.REGISTER_USER_FAIL, payload: data.error})
        }
    } catch (error) {
        const message = error.response ? error.response.data.message : "something went wrong"
        dispatch({type: types.REGISTER_USER_FAIL, payload: message})
        toast.error(message, {
            position: "top-right"
        })
    }
}

export const logout = () => (dispatch) => {
    dispatch({type: types.LOGIN_LOGOUT})
}

export const googleAuth = () => async (dispatch) => {

    try {
        // console.log(user)
        dispatch({ type: types.GOOGLE_AUTH_REQUEST })
        const res = await axios.get('https://ayoba.adanianlabs.io/api/user/google/success', {
            withCredentials: true
        })
        console.log('message displayed', res)
        // dispatch(setCredentials({ ...res.data.user._json, _id: res.data._id, isAdmin: res.data.user.isAdmin }))
        if(res.status === 'ok') {
            dispatch({type: types.GOOGLE_AUTH_SUCCESS, payload: data.data}),
            toast.success("user displayed successfully", {
                position: "top-right"
            })
        } else {
            dispatch({type: types.GOOGLE_AUTH_FAIL, payload: data.error})
        }
    } catch (error) {
        const message = error.response ? error.response.data.message : "something went wrong"
        dispatch({type: types.GOOGLE_AUTH_FAIL, payload: message})
        toast.error(message, {
            position: "top-right"
        })
    }
}


// CREATING OF STORE
export const storeAuth = (created_by, category, nameOfStore, template) => async (dispatch) => {
    try {
        dispatch({ type: types.STORE_REQUEST });
        const { data } = await axios.post('https://ayoba.adanianlabs.io/api/user/createsite', {created_by, category, nameOfStore, template})
        console.log(data)
        if(data.status === 'ok') {
            dispatch({type: types.STORE_SUCCESS, payload: data.data})
            toast.success("Store Created Successfully", {
                position: "top-right"
            })
        } else {
            dispatch({type: types.STORE_FAIL, payload: data.error})
            toast.error(data.error, { position: "top-right" });
        }
    } catch (error) {
        const message = error.response ? error.response.data.message : "something went wrong"
        dispatch({type: types.STORE_FAIL, payload: message})
        toast.error(message, {
            position: "top-right"
        })
    }
}