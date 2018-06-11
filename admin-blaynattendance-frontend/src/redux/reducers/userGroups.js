import { CREATE_USER_GROUP_SUCCESS, GET_USER_GROUP_SUCCESS, UPDATE_USER_GROUP_SUCCESS, DELETE_USER_GROUP_SUCCESS } from "../actions/constants";

const userGroups = (state = [], action) => {
    switch (action.type) {
        case GET_USER_GROUP_SUCCESS: 
            return action.userGroups;
        case CREATE_USER_GROUP_SUCCESS:
            return state.concat([action.userGroup]);
        case UPDATE_USER_GROUP_SUCCESS: {
            const {id, ...rest} = action.userGroup

            return state.map(userGroup => {
                if(userGroup.id === id) {
                    return {...userGroup, ...rest}
                }
                
                return userGroup;
            })
        }
        case DELETE_USER_GROUP_SUCCESS:
            return state.filter(userGroup => userGroup.id !== action.id);
        default:
            return state;
    }
}

export default userGroups;