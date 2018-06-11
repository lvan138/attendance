import{
    GET_WAGE_STORY,
    GET_WAGE_STORY_SUCCESS,
    GET_WAGE_STORY_ERROR,
} from './constants'

export const getWageStory=()=>({
    type:GET_WAGE_STORY
})
export const getWageStorySuccess = (wageStory) => ({
    type: GET_WAGE_STORY_SUCCESS,
    wageStory
})

export const getWageStoryError = (error) => ({
    type: GET_WAGE_STORY_ERROR,
    error
})