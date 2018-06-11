import { CREATE_USER_SUCCESS, GET_USER_SUCCESS, UPDATE_USER_SUCCESS, DELETE_USER_SUCCESS } from "../actions/constants";

const users = (state = [], action) => {
    switch (action.type) {
        case GET_USER_SUCCESS: 
            return action.users;
        case CREATE_USER_SUCCESS:
            return state.concat([action.user]);
        case UPDATE_USER_SUCCESS: {
            const {id, ...rest} = action.user

            return state.map(user => {
                if(user.id === id) {
                    return {...user, ...rest}
                }
                
                return user;
            })
        }
        case DELETE_USER_SUCCESS:
            return state.filter(user => user.id !== action.id);
        default:
            return state;
    }
}

export default users;