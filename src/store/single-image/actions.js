import axios from 'axios';

export default function fetchSingleImage(id) {
    return function (dispatch) {
        axios.get("https://images-api.nasa.gov/search?media_type=image&nasa_id=" + id).then(response => {
            dispatch({ type: "FETCH_SINGLE_IMAGE_COMPLETED", payload: response.data.collection.items[0] })
        })
    }
}