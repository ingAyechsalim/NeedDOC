import {combineReducers} from 'redux'
const SearchinfReducer = (state = "", action) => {
    switch(action.type) {
        case  "SEARCHADRESSEINF" :
        return action.adresse
        default : 
        return state
    }
}

const Reducers = combineReducers({SearchinfReducer})

export default Reducers
