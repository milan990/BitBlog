/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'

import { ui } from '../../../shared/ui'
import { AppContext } from './../../AppStore'

const ViewMenuItem = () => {
    const { onChangeView, isGridView } = useContext(AppContext)
    const isVisible = ui.isHomePage()

    const iconName = isGridView ? 'view_stream' : 'view_module'

    return (
        isVisible && (
            <li>
                <a href="#" onClick={onChangeView}>
                    <i className="material-icons">{iconName}</i>
                </a>
            </li>
        )
    )
}

export default ViewMenuItem
