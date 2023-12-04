import { GET_ALL_DOGS } from "./actions.type"

const initialState = {
allDogs: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
       case GET_ALL_DOGS:
        return  {
            ...state,
            allDogs: action.payload
        }
        default:
            return {
                ...state
            }
    }
}

export default reducer;