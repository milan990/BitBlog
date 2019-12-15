/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

import ViewMenuItem from './ViewMenuItem'

const MainMenu = props => (
    <>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/authors">Authors</Link>
        </li>
        <li>
            <Link to="/albums">Albums</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <ViewMenuItem />
    </>
)

export default MainMenu
