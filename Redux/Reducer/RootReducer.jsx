import { combineReducers } from 'redux';
import { authReducer, googleAuth, userRegister } from './UserReducer';

const rootReducer = combineReducers({
    userAuth: authReducer,
    userRegister: userRegister,
    googleAuth: googleAuth
})

export { rootReducer }
