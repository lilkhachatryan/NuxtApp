export default ({ store }, inject) => {
    store.dispatch('WINDOW_SIZE_CHANGED', window.innerWidth)
    window.onresize = (e) => {
        store.dispatch('WINDOW_SIZE_CHANGED', e.target.innerWidth)
    }
}