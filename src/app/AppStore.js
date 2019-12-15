import React, { Component, createContext } from 'react'

export const AppContext = createContext()

// A component whose sole job is to manage
// the state of the App
class AppStore extends Component {
    state = {
        isGridView: false
    }

    changeView = e => {
        e.preventDefault()
        this.setState(state => ({ isGridView: !state.isGridView }))
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    isGridView: this.state.isGridView,
                    onChangeView: this.changeView
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export const withStore = Component => {
    return props => (
        <AppContext.Consumer>{store => <Component {...props} store={store} />}</AppContext.Consumer>
    )
}

export default AppStore
