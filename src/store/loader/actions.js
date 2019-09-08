export default function toggleLoader(boolean) {
    return function (dispatch) {
        dispatch({ type: "TOGGLE_LOADER", payload: boolean })
    }
}