import React from 'react'

const AlbumImage = ({ image, ...props }) => {
    return (
        <div className="col s12 m4" {...props}>
            <div className="card">
                <div className="card-image">
                    <img src={image.thumbnailUrl} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AlbumImage
