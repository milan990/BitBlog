import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Post from '../../../models/Post'

const PostCard = ({ post: { id, title, photo, intro } }) => (
    <Link to={`/posts/${id}`}>
        <div className="col s12 m4">
            <div className="card">
                <div className="card-image">
                    <img src={photo} alt={title} />
                    <span className="card-title">{title}</span>
                </div>
            </div>
        </div>
    </Link>
)

PostCard.propTypes = {
    post: PropTypes.instanceOf(Post).isRequired
}

export default PostCard
