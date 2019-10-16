import jsonPlaceholder from '../apis/jsonplaceholder'
import { async } from 'q'

export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        })
    }
}

export const fetchUser = (id) => {
    return async(dispatch) => {
        const response = await jsonPlaceholder.get(`/users/${id}`);
        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        })
    }
}