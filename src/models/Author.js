import Address from './Address'
import Company from './Company'

export default class Author {
    constructor(user) {
        this.id = user.id
        this.fullName = user.name
        this.username = user.username
        this.email = user.email
        this.phone = user.phone
        this.address = new Address(user.address)
        this.company = new Company(user.company)
    }
}
