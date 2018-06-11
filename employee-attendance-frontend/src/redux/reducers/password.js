import { List, fromJS } from "immutable";

import {
    UPDATE_PASSWORD_SUCCESS
} from "../actions/constants"


const password = (state = [], action) => {
    switch (action.type) {
        case UPDATE_PASSWORD_SUCCESS: 
           return action.password;        
        
        default:
           return state;
   }
}

export default password;