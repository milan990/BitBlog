import { API } from '../shared/api'
import Comment from '../models/Comment'

class CommentsService {
    async fetchComments(postId) {
        const options = {
            params: {
                postId
            }
        }

        const { data } = await API.get(`/comments`, options)
        return data.map(commentData => new Comment(commentData))
    }
}

export const commentsService = new CommentsService()
