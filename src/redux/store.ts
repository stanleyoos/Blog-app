import { createStore, combineReducers, compose } from 'redux'
import initialState from './initialState'
import postsReducer from './subreducers/postReducer'

const subreducers = {
  posts: postsReducer,
}

const reducer = combineReducers(subreducers)

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, initialState, composeEnhancers())

export default store
