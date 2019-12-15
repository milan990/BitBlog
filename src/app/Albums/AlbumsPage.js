import React, { Component } from 'react'
import { ui } from '../../shared/ui'

import { albumsService } from './../../services/AlbumsService'

import AlbumItem from './AlbumItem'

class AlbumsPage extends Component {
    state = {
        error: false,
        hasMore: true,
        isLoading: true,
        page: 1,
        albums: []
    }

    componentDidMount() {
        this.loadAlbums()
        this.initInfiniteScroll()
    }

    initInfiniteScroll() {
        ui.onPageEnd(() => {
            const { page, error, isLoading, hasMore } = this.state
            console.log('page', page)
            // Bails early if:
            // * there's an error
            // * it's already loading
            // * there's nothing left to load
            if (error || isLoading || !hasMore) return

            const nextPage = page + 1
            this.loadAlbums(nextPage)
        })
    }

    async loadAlbums(nextPage = 1) {
        const currentAlbums = this.state.albums
        console.log('loadAlbums', currentAlbums)
        try {
            const nextAlbums = await albumsService.fetchAlbums(nextPage)
            const albums = [...currentAlbums, ...nextAlbums]

            this.setState({
                albums,
                hasMore: nextPage < 10,
                page: nextPage,
                isLoading: false
            })
        } catch (error) {
            this.setState({
                isLoading: false,
                error: error.message
            })
        }
    }

    render() {
        // const { albums } = this.state
        const { albums, error, hasMore, isLoading } = this.state
        return (
            <>
                <h4 className="center-align">ALBUMS</h4>
                {albums.map(album => (
                    <AlbumItem album={album} key={album.id} />
                ))}
                <div className="center-align">
                    {error && <p className="red-text">{error}</p>}
                    {isLoading && <p className="grey-text">Loading...</p>}
                    {!hasMore && <p className="grey-text">You did it! No more albums!</p>}
                </div>
            </>
        )
    }
}

export default AlbumsPage
