import axios from 'axios';
import { SUBMIT_SEARCH, FETCH_MOVIES } from './types';


export const submitSearch = (values) =>
    async (dispatch) => {
        var bodyFormData = new FormData();
        bodyFormData.set('movieTitle', values.movieTitle);
        
        const response = await axios({
            url: '/movie/list',
            method: 'post',
            data: bodyFormData,
            config: {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        });
        console.log('submitSearch:', response.data);
        console.log('submitSearch.dispatch:', dispatch);
        
        dispatch({
            type: SUBMIT_SEARCH,
            payload: values,
        });
        
        dispatch({
            type: FETCH_MOVIES,
            payload: response.data,
        });
    };
