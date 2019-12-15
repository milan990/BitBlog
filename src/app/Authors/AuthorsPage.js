import React, { Component } from 'react'

import { authorService } from '../../services/AuthorService'

import AuthorsList from './AuthorsList/AuthorsList'

class AuthorsPage extends Component {
    state = {
        error: null,
        authors: []
    }

    componentDidMount() {
        this.loadAuthors()
    }

    async loadAuthors() {
        try {
            const authors = await authorService.fetchAuthors()

            this.setState({ authors })
        } catch (error) {
            this.setState({
                error: error.message
            })
        }
    }

    render() {
        const { authors, error } = this.state
        return (
            <>
                <h4 className="center-align">AUTHORS</h4>
                <AuthorsList authors={authors} />
                <div className="center-align">{error && <p className="red-text">{error}</p>}</div>
            </>
        )
    }
}

export default AuthorsPage
