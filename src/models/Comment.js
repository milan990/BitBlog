class Comment {
    constructor({ id, name, email, body }) {
        this.id = id
        this.name = name
        this.email = email
        this.body = body
    }

    get formatedEmail() {
        return this.email.toLowerCase()
    }
}

export default Comment
