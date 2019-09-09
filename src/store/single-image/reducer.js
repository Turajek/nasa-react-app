const SingleImageReducer = (state = {
    image: {
    },
}, action) => {
    switch (action.type) {
        case "FETCH_SINGLE_IMAGE_COMPLETED": {
            console.log('action ');
            return { ...state, image: action.payload }
        }
        default:
    }
    return state
}

export default SingleImageReducer;