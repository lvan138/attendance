import {
    GET_WAGE_STORY_SUCCESS
} from "../actions/constants"

const wageStory = (state = [], action) => {
    switch (action.type) {
        case GET_WAGE_STORY_SUCCESS:
            return action.wageStory;
        default:
           return state;
   }
}

export default wageStory;