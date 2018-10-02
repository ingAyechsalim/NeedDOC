import {combineReducers} from 'redux'
import * as Doctors from '../components/data/data_liste_pharmacie'
const SearchpharReducer = (state = "", action) => {
    switch(action.type) {
        case  "SEARCHDOC" :
        return
        case "erreur" : 
        return 
        default : 
        return state
    }
}

const Reducers = combineReducers({SearchpharReducer})

export default Reducers