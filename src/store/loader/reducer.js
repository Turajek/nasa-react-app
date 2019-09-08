const loaderReducer = (state = {
    isLoading: false
}, action) => {
    switch (action.type) {
        case "TOGGLE_LOADER": {
            return { ...state, isLoading: action.payload }
        }
        default:
    }
    return state
}

export default loaderReducer;