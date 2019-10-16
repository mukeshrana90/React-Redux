import React from 'react'
import { connect } from 'react-redux'

const SongDetails = (props)=> {    
    if(props.song == null) {
        return (
            <h6>Please select any song</h6>
        )
    }
    else {
        return (
            <h6>{props.song.title}</h6>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
}
export default  connect(mapStateToProps) (SongDetails)