const errorReducer = (state = {
    error: null
}, action) => {
    switch (action.type) {
        case "HANDLE_ERROR": {
            console.log("handling error.. ");
            console.table(action.payload);
            return { ...state, error: action.payload }
        }
        default:
    }
    return state
}

export default errorReducer;