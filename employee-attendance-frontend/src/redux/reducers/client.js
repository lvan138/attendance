import { CLIENT_SET, CLIENT_UNSET } from '../actions/constants'

const initialSate = {
    token: null,
    user: null
}

const client = (state = initialSate, action) => {
    switch (action.type) {
        case CLIENT_SET:
            return {
                token: action.token,
                user: action.user
            }
        case CLIENT_UNSET:
            return {
                token: null,
                user: null
            }
        default: 
            return state
    }
}

export default client