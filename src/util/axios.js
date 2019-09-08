import axios from 'axios';
import store from '../store';
import handleError from '../store/error/actions'
import toggleLoader from '../store/loader/actions';
axios.interceptors.request.use(config => {
    store.dispatch(toggleLoader(true))
    return config;
});

axios.interceptors.response.use(response => {
    store.dispatch(toggleLoader(false))
    return Promise.resolve(response);
}, error => {
    store.dispatch(handleError(error))
    store.dispatch(toggleLoader(false))
    return Promise.reject(error);
});