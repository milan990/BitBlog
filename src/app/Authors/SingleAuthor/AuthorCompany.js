import React from 'react'
import PropTypes from 'prop-types'

import Company from '../../../models/Company'

const AuthorCompany = ({ company: { name, slogan } }) => (
    <div className="card-panel">
        <h3>Company</h3>
        <p>Name: {name}</p>
        <p>Slogan: {slogan}</p>
    </div>
)

AuthorCompany.propTypes = {
    company: PropTypes.instanceOf(Company).isRequired
}

export default AuthorCompany
