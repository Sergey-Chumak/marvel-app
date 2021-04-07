import React from 'react'
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import {HashRouter} from 'react-router-dom'

const composeEnhancers = typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
	: compose

const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(thunk)
	)
)

const app =
	<Provider store={store}>
		<HashRouter
			basename='/'>
			<App />
		</HashRouter>
	</Provider>

ReactDOM.render(
	app,
	document.getElementById('root')
)

reportWebVitals()
