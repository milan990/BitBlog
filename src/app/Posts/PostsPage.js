import React, { Component } from 'react'

import { ui } from '../../shared/ui'
import { postService } from '../../services/PostService'

import Loader from '../components/Loader/Loader'
import PostsList from './PostsList/PostsList'

class PostsPage extends Component {
    state = {
        error: false,
        hasMore: true,
        isLoading: true,
        page: 1,
        posts: []
    }

    componentDidMount() {
        const { page } = this.state

        this.loadPosts(page)
        this.initInfiniteScroll()
    }

    initInfiniteScroll() {
        ui.onPageEnd(() => {
            const { page, error, isLoading, hasMore } = this.state

            // Bails early if:
            // * there's an error
            // * it's already loading
            // * there's nothing left to load
            if (error || isLoading || !hasMore) return

            const nextPage = page + 1
            this.loadPosts(nextPage)
        })
    }

    async loadPosts(nextPage) {
        const currentPosts = this.state.posts
        try {
            const nextPosts = await postService.fetchPosts(nextPage)
            const posts = [...currentPosts, ...nextPosts]

            this.setState({
                posts,
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
        const { posts, error, hasMore, isLoading } = this.state

        return (
            <Loader isLoading={isLoading}>
                <h4 className="center-align">POSTS</h4>
                <PostsList posts={posts} />
                <div className="center-align">
                    {error && <p className="red-text">{error}</p>}
                    {isLoading && <p className="grey-text">Loading...</p>}
                    {!hasMore && <p className="grey-text">You did it! No more posts!</p>}
                </div>
            </Loader>
        )
    }
}

export default PostsPage
