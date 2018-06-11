import {
    GET_NOTIFICATION_SUCCESS
} from "../actions/constants"

const notification = (state = [], action) => {
    switch (action.type) {
        case GET_NOTIFICATION_SUCCESS:
            return action.notification;
        default:
           return state;
   }
}

export default notification;