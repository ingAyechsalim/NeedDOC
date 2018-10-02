import {combineReducers} from 'redux'
import * as Doctors from '../components/data/data_liste_doctors'
const SearchdocReducer = (state = Doctors, action) => {
    switch(action.type) {
        case 'ADD_RNDV':
         
            return (state.concat(action.RNDV))
        
        case 'EDIT_RNDV':
        
            return (state.map(rndv => {
                if (rndv.id === action.id) {
                    return action.RNDV
                }
                return rndv
            }))
        
        case  'DELETE_RNDV':
         
            return (state.filter(rndv => {
                if (rndv.id === action.id) {
                    return false
                }
                return true
            }))
            
        default : 
        return (state)
    }
}

const Reducers = combineReducers({SearchdocReducer})

    


