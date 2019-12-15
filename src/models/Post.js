export default class Post {
    constructor({ id, title, photo, body, userId, intro }) {
        this.id = id
        this.title = title
        this.intro = intro
        this.body = body
        this.photo = photo
        this.authorId = userId
    }
}
