import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'
import UserHeader from '../components/UserHeader'

class PostsList extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    postListRender() {
        if (this.props.posts !== undefined) {
            return this.props.posts.map(post => {
                return (
                    <li key={post.id}>{post.title}
                        <UserHeader userId={post.userId} />
                    </li>
                )
            })
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.postListRender()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostsList);