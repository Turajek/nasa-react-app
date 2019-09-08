const nasaImagesReducer = (state = {
    images: [],
}, action) => {
    switch (action.type) {
        case "FETCH_IMAGES_COMPLETED": {
            return { ...state, images: action.payload }
        }
        default:
    }
    return state
}

export default nasaImagesReducer;