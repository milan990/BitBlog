import React from 'react'
import PropTypes from 'prop-types'

import Comment from '../../../models/Comment'

const CommentItem = ({ comment }) => {
    return (
        <li className="collection-item avatar">
            <img src="/images/img_user_placeholder.jpg" alt="" className="circle" />
            <span className="title grey-text">{comment.formatedEmail}</span>
            <p>{comment.body}</p>
        </li>
    )
}

CommentItem.propTypes = {
    comment: PropTypes.instanceOf(Comment).isRequired
}

export default CommentItem
