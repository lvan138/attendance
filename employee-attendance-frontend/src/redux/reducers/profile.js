import { List, fromJS } from "immutable";

import {
    UPDATE_PROFILE_SUCCESS
} from "../actions/constants"


const profile = (state = [], action) => {
    switch (action.type) {
        case UPDATE_PROFILE_SUCCESS: 
           return action.profile;        
        
        default:
           return state;
   }
}

export default profile;