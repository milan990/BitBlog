import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { postService } from '../../../services/PostService'

class RelatedPosts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.loadPosts()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.postId !== prevProps.postId) {
            this.loadPosts()
        }
    }

    async loadPosts() {
        const { authorId, postId } = this.props
        const posts = await postService.fetchAuthorPosts(authorId)

        this.setState({
            posts: posts.filter(post => post.id !== postId)
        })
    }

    renderPosts() {
        const { posts } = this.state
        return posts.map(({ id, title, photo }) => (
            <div className="col s4 m4" key={id}>
                <div className="card">
                    <div className="card-image">
                        <img src={photo} alt="" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p className="truncate">{title}</p>
                        </div>
                        <div className="card-action">
                            <Link to={`/posts/${id}`} key={id}>
                                Read more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        ))
    }

    render() {
        return (
            <>
                <h5>Posts from same author</h5>
                <div className="row">{this.renderPosts()}</div>
            </>
        )
    }
}

RelatedPosts.propTypes = {
    authorId: PropTypes.number.isRequired,
    postId: PropTypes.number.isRequired
}

export default RelatedPosts
