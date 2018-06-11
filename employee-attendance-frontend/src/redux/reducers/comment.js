import {
    GET_COMMENT_SUCCESS
} from "../actions/constants"

const comment = (state = [], action) => {
    switch (action.type) {
        case GET_COMMENT_SUCCESS:
            return action.comment;
        default:
           return state;
   }
}

export default comment;