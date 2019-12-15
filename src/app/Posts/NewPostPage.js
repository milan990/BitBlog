import React, { Component } from 'react'

import { postService } from '../../services/PostService'

class NewPostPage extends Component {
    state = {
        title: '',
        body: ''
    }

    onInputChange = event => {
        const { name, value } = event.target

        this.setState({ [name]: value.trim() })
    }

    submitPost = event => {
        event.preventDefault()
        const { ...data } = this.state
        // For a time being we are hard coding
        // user id since we don't have option to select
        // author now
        data.userId = 1
        postService.createPost(data).then(post => {
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div className="row">
                <h4>CREATE NEW POST</h4>
                <div className="input-field col s12">
                    <input
                        placeholder="Post title"
                        name="title"
                        type="text"
                        onChange={this.onInputChange}
                    />
                </div>
                <div className="input-field col s12">
                    <input
                        placeholder="Post text"
                        name="body"
                        type="text"
                        onChange={this.onInputChange}
                    />
                </div>
                <button
                    className="btn waves-effect waves-light"
                    onClick={this.submitPost}
                    type="submit"
                    name="action"
                >
                    Send
                    <i className="material-icons right">send</i>
                </button>
            </div>
        )
    }
}

export default NewPostPage
