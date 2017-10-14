const {h, app} = require('../lib/hyperapp');

// this is lifted straight from the hyperapp counter demo
module.exports = el => app({
    state: {
        count: 100
    },
    view: (state, actions) => (
        h("div", {}, [
            h("h1", {}, state.count),
            h("button", {
                onclick: actions.down,
                disabled: state.count <= 0
            }, "–"),
            h("button", {
                onclick: actions.up
            }, "+")
        ])
    ),
    actions: {
        down: state => ({ count: state.count - 1 }),
        up: state => ({ count: state.count + 1 })
    }
}, el);