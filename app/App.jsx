import React from 'react'
import { Provider } from 'react-redux'
import getStore from './store'

class App extends React.Component {

    render () {
        return (
            <Provider store={getStore()}>
                <h1>Hello World!</h1>
            </Provider>
        )
    }
}

export default App;
