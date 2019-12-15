import React from 'react'

import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Main from './Main'
import Footer from './components/Footer'
import AppStore from './AppStore'

const App = () => (
    <ScrollToTop>
        <AppStore>
            <Header />
            <Main />
            <Footer />
        </AppStore>
    </ScrollToTop>
)

export default App
