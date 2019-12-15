import { API } from '../shared/api'
import Author from './../models/Author'

class AuthorService {
    async fetchAuthors() {
        const { data } = await API.get('/users')
        const authors = data.map(user => new Author(user))

        return authors
    }

    async fetchAuthor(authorId) {
        const url = `/users/${authorId}`
        const { data } = await API.get(url)

        return new Author(data)
    }
}

export const authorService = new AuthorService()
