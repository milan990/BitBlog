import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Post from '../../../models/Post'

import PostItem from './PostItem'
import PostCard from './PostCard'
import { AppContext } from '../../AppStore'

const PostsList = ({ posts = [] }) => {
    const { isGridView } = useContext(AppContext)

    const PostElement = isGridView ? PostCard : PostItem

    const postsJSX = posts.map((post, index) => <PostElement post={post} key={index} />)

    const PostsGrid = posts => <div className="row">{postsJSX}</div>

    return isGridView ? <PostsGrid /> : postsJSX
}

PostsList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.instanceOf(Post))
}

export default PostsList
