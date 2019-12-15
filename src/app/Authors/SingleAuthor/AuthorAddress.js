import React from 'react'
import PropTypes from 'prop-types'

import Address from '../../../models/Address'

const AuthorAddress = ({ address: { street, city } }) => (
    <div className="card-panel">
        <h3>Address</h3>
        <p>street: {street}</p>
        <p>city: {city}</p>
    </div>
)

AuthorAddress.propTypes = {
    address: PropTypes.instanceOf(Address).isRequired
}

export default AuthorAddress
