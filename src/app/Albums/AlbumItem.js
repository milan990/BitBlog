import React from 'react'

import AlbumImageSlider from './AlbumImageSlider'

const AlbumItem = ({ album, ...props }) => (
    <div className="row">
        <h5>{album.title}</h5>
        <AlbumImageSlider albumId={album.id} />
    </div>
)

export default AlbumItem
