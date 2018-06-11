import { List, fromJS } from "immutable";

import {
    GET_WAGE_GROUP,
    GET_WAGE_GROUP_ERROR,
    GET_WAGE_GROUP_SUCCESS,
    CREATE_WAGE_GROUP_SUCCESS,
    DELETE_WAGE_GROUP_SUCCESS,
    UPDATE_WAGE_GROUP_SUCCESS,
    GET_WAGE_STORY_SUCCESS
} from "../actions/constants"

const initialState = fromJS({
    wageGroupsList: {
        loading: false,
        error: false,
        wageGroupsData: []
    }
})

// const wageGroups = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_WAGE_GROUP:
//             return state.setIn(['wageGroupsList', 'loading'], true);
//         case GET_WAGE_GROUP_SUCCESS:
//             return state.setIn(['wageGroupsList', 'loading'], false)
//                     .setIn(['wageGroupsList', 'error'], false)
//                     .setIn(['wageGroupsList', 'wageGroupsData'], List(action.wageGroups));
//         case GET_WAGE_GROUP_ERROR:
//             return state.setIn(['wageGroupsList', 'loading'], false)
//                     .setIn(['wageGroupsList', 'error'], action.error);
//         default:
//             return state;
//     }
// }

const wageGroups = (state = [], action) => {
    switch (action.type) {
        case GET_WAGE_GROUP_SUCCESS:
           return action.wageGroups;
        case CREATE_WAGE_GROUP_SUCCESS:
            return state.concat([action.wageGroup]);
        case DELETE_WAGE_GROUP_SUCCESS:
            return state.filter(wageGroup => wageGroup.id !== action.id);
        case UPDATE_WAGE_GROUP_SUCCESS: {
            const {id, ...rest} = action.wageGroup

            return state.map(wageGroup => {
                if(wageGroup.id === id) {
                    return {...wageGroup, ...rest}
                }
                
                return wageGroup;
            })
        }
        default:
           return state;
   }
}

export default wageGroups;