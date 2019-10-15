import React from 'react'
import { connect } from 'react-redux'

const SongDetails = (props)=> {    
    if(props.song == null) {
        return (
            <h1>Please select any song</h1>
        )
    }
    else {
        return (
            <h1>{props.song.title}</h1>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
}
export default  connect(mapStateToProps) (SongDetails)