import { combineReducers } from 'redux';
import { authReducer, googleAuth, store, userRegister } from './UserReducer';

const rootReducer = combineReducers({
    userAuth: authReducer,
    userRegister: userRegister,
    googleAuth: googleAuth,
    store: store
})

export { rootReducer }
