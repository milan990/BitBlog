import React from 'react'
import PropTypes from 'prop-types'
import Author from '../../../models/Author'

const AuthorInfo = ({ author: { fullName, username, email, phone } }) => (
    <div className="card-panel">
        <h3>{fullName}</h3>
        <p>username: {username}</p>
        <p>email: {email}</p>
        <p>phone: {phone}</p>
    </div>
)

AuthorInfo.propTypes = {
    author: PropTypes.instanceOf(Author).isRequired
}

export default AuthorInfo
