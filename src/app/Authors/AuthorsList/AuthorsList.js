import React from 'react'
import PropTypes from 'prop-types'

import _ from 'lodash'

import Author from '../../../models/Author'

import Loader from '../../components/Loader/Loader'
import AuthorItem from './AuthorItem'

const AuthorsList = ({ authors = [] }) => {
    const authorsListElements = authors.map(author => (
        <AuthorItem author={author} key={author.id} />
    ))

    return <Loader isLoading={_.isEmpty(authors)}>{authorsListElements}</Loader>
}

AuthorsList.propTypes = {
    authors: PropTypes.arrayOf(PropTypes.instanceOf(Author).isRequired)
}

export default AuthorsList
