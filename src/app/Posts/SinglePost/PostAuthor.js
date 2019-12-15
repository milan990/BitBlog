import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { authorService } from '../../../services/AuthorService'

class PostAuthor extends Component {
    state = {
        author: null
    }

    componentDidMount() {
        this.loadAuthor()
    }

    async loadAuthor() {
        try {
            const { authorId } = this.props
            const author = await authorService.fetchAuthor(authorId)

            this.setState({ author })
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        const { author } = this.state

        if (!author) {
            return <p className="center-align">...</p>
        }

        const { id, fullName } = author

        return (
            <Link to={`/authors/${id}`}>
                <div className="center-align">{fullName}</div>
            </Link>
        )
    }
}

PostAuthor.propTypes = {
    authorId: PropTypes.number.isRequired
}

export default PostAuthor
