import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Post from '../../../models/Post'

const PostItem = ({ post: { id, title, intro } }) => (
    <Link to={`/posts/${id}`}>
        <div className="col s12 hoverable">
            <div className="card blue darken-1">
                <div className="card-content white-text">
                    <span className="card-title truncate">{title}</span>
                    <p>{intro}</p>
                </div>
            </div>
        </div>
    </Link>
)

PostItem.propTypes = {
    post: PropTypes.instanceOf(Post).isRequired
}

export default PostItem
