import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongsList extends Component {
    renderList() {
        return (
            this.props.songs.map((song) => {
                return (
                    <li
                        onClick={() => this.props.selectSong(song)}
                        key={song.title}
                    >
                        {song.title}
                    </li>
                )
            })
        )
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
}

export default connect(mapStateToProps, { selectSong })(SongsList)

