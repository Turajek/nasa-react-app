import axios from 'axios';

export default function fetchNasaImages(value) {
    return function (dispatch) {
        axios.get("https://images-api.nasa.gov/search?q=" + value).then(response => {
            dispatch({ type: "FETCH_IMAGES_COMPLETED", payload: response.data.collection.items })
        })
            .catch(err => {
                dispatch({ type: "FETCH_IMAGES_COMPLETED", payload: err })
            })
    }
}