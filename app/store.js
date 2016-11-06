import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

if (!process.env.BROWSER) {
    global.window = {}
}

export default function getStore() {
    let composeEnhancers = compose

    if (window !== undefined) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    }

    const middleware = process.env.PRODUCTION ? applyMiddleware(thunk) : composeEnhancers(
        applyMiddleware(thunk)
    )

    return createStore(
        reducer, {},
        middleware
    )
}
