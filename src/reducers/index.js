import { combineReducers } from 'redux';
import postsReducers from './postsReducers'
import usersReducer from './usersReducer' 

// Songs Reducers
const songsReducer = () => {
    return [
        { title: 'First Song', duration: '4:5' },
        { title: 'Second Song', duration: '4:5' },
        { title: 'Third Song', duration: '4:5' }
    ]
}
const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return (
            action.payload
        )
    }
    else {
        return selectedSong
    }
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
    posts: postsReducers,
    users: usersReducer
})