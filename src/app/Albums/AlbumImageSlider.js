import React, { Component } from 'react'
import Slider from 'react-slick'

import { albumsService } from '../../services/AlbumsService'

import AlbumImage from './AlbumImage'
import Gallery from './Gallery'

import './AlbumImageSlider.css'

const defaultSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
}

class AlbumImageSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentImage: 0,
            isOpenGallery: false,
            images: []
        }
    }

    componentDidMount() {
        this.loadImages()
    }

    async loadImages(page = 1) {
        const { albumId } = this.props
        const { images } = this.state

        const nextImages = await albumsService.fetchPhotos(albumId, page)

        this.setState({
            images: [...images, ...nextImages]
        })
    }

    openGallery = (index, event) => {
        event.preventDefault()

        this.setState({
            currentImage: index,
            isOpenGallery: true
        })
    }

    render() {
        const settings = {
            ...defaultSettings
        }

        const { images, isOpenGallery, currentImage } = this.state

        return (
            <>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <AlbumImage
                            image={image}
                            key={image.id}
                            onClick={e => this.openGallery(index, e)}
                        />
                    ))}
                </Slider>
                <Gallery images={images} isOpen={isOpenGallery} currentImage={currentImage} />
            </>
        )
    }
}

export default AlbumImageSlider
