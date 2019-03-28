import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { AppContainer } from "react-hot-loader";
import Routes from './Routes'
import store from './store'

import '../styles/reset.scss'
import '../styles/style.scss'

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById('root')
    )
}

render(Routes)

export * from './App.js'