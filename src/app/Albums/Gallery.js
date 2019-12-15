import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Lightbox from 'react-images'

class Gallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lightBoxIsOpen: false,
            currentImage: 0
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.props.currentImage !== nextProps.currentImage) {
            this.setState({
                currentImage: nextProps.currentImage,
                lightBoxIsOpen: nextProps.isOpen
            })
        }
    }

    closeLightBox = () => {
        this.setState({
            currentImage: 0,
            lightBoxIsOpen: false
        })
    }

    gotoPrevious = () => {
        const currentImage = this.state.currentImage - 1
        this.setState({ currentImage })
    }

    gotoNext = () => {
        const currentImage = this.state.currentImage + 1
        this.setState({ currentImage })
    }

    gotoImage = index => {
        this.setState({
            currentImage: index
        })
    }

    handleClickImage = () => {
        if (this.state.currentImage === this.props.images.length - 1) return

        this.gotoNext()
    }

    render() {
        const { images, showThumbnails, preventScroll } = this.props
        const { lightBoxIsOpen, currentImage } = this.state

        const lbImages = images.map(({ url, title }) => ({ src: url, caption: title }))

        return (
            <Lightbox
                images={lbImages}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                onClickThumbnail={this.gotoImage}
                onClose={this.closeLightBox}
                onClickImage={this.handleClickImage}
                currentImage={currentImage}
                isOpen={lightBoxIsOpen}
                showThumbnails={showThumbnails}
                preventScroll={preventScroll}
            />
        )
    }
}

Gallery.propTypes = {
    images: PropTypes.array.isRequired,
    showThumbnails: PropTypes.bool,
    preventScroll: PropTypes.bool
}

export default Gallery
