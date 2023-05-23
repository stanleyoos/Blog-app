import { createStore, combineReducers, compose } from 'redux'
import initialState from './initialState'
import postsReducer from './subreducers/postReducer'
import categoriesReducer from './subreducers/categoryReducer'

const subreducers = {
  posts: postsReducer,
  categories: categoriesReducer
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
