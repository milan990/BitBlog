import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Author from '../../../models/Author'

const AuthorItem = ({ author: { id, fullName } }) => (
    <Link to={`/authors/${id}`}>
        <div className="card blue darken-1 hoverable">
            <div className="card-content white-text">
                <span className="card-title">{fullName}</span>
            </div>
        </div>
    </Link>
)

AuthorItem.propTypes = {
    author: PropTypes.instanceOf(Author).isRequired
}

export default AuthorItem
