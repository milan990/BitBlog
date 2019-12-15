export const ui = {
    loadOffset: 400,

    isPageBottom() {
        return (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        )
    },

    onPageEnd(loadMore) {
        window.onscroll = event => {
            if (this.isPageBottom()) {
                loadMore(event)
            }
        }
    },

    isHomePage() {
        return window.location.hash.endsWith('#/')
    }
}
