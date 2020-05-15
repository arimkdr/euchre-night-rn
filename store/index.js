import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import cards from './cards'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({
    cards
})

const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
  )
  const store = createStore(reducer, middleware)
  
  export default store
  export * from './cards'