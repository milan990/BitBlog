class Album {
    constructor({ id, title, userId }) {
        this.id = id
        this.title = title
        this.userId = userId
        this.photos = []
    }

    addPhotos(photos) {
        this.photos = photos
    }
}

export default Album
