import {combineReducers} from 'redux'
import * as users from '../components/data/users'
const UserReducer = (state = "", action) => {
    switch(action.type) {
        case  "LOG_IN" :
        return( action.userProfile.email === users.medecin.email ? "medecin" : "infirmier")
        case "LOG_OUT" : 
        return ""
        default : 
        return state
    }
}

const Reducers = combineReducers({UserReducer})

export default Reducers