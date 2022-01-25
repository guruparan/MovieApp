import axios from 'axios';

export const get = (url, success, failure) => {
    axios.get(url).then((response) => success(response.data)).catch(failure);
};