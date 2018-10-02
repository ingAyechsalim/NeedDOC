import {combineReducers} from 'redux'
const SearchdocReducer = (state =[]  , action) => {
    switch(action.type) {
        case  "SEARCHDOC" :
        return action.doc
        default : 
        return state
    }
}


const Reducers = combineReducers({SearchdocReducer})

export default Reducers