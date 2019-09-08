export default function handleError(err) {
    return function (dispatch) {
        dispatch({ type: "HANDLE_ERROR", payload: err })
    }
}