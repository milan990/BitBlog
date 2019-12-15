import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PostsPage from './Posts/PostsPage'
import NewPostPage from './Posts/NewPostPage'
import SinglePostPage from './Posts/SinglePostPage'
import AuthorsPage from './Authors/AuthorsPage'
import SingleAuthorPage from './Authors/SingleAuthorPage'
import AboutPage from './About/AboutPage'
import AlbumsPage from './Albums/AlbumsPage'

const Main = () => (
    <main className="container">
        <Switch>
            <Route exact path="/" component={PostsPage} />
            <Route exact path="/posts/new" component={NewPostPage} />
            <Route path="/posts/:postId" component={SinglePostPage} />
            <Route exact path="/albums" component={AlbumsPage} />
            <Route exact path="/authors" component={AuthorsPage} />
            <Route path="/authors/:id" component={SingleAuthorPage} />
            <Route exact path="/about" component={AboutPage} />
        </Switch>
    </main>
)

export default Main
