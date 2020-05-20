// import React from 'react'
// import ReactDOM from 'react-dom'
// import {Provider} from 'react-redux'
// import {Router} from 'react-router-dom'
// import history from './history'
// import store from './store'
// import App from './app'
// import {AsyncStorage} from 'react-native'
// import {Buffer} from 'buffer';
// window.localStorage = AsyncStorage;
// global.Buffer = Buffer;

// // establishes socket connection
// import './socket'

// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={history}>
//       <App />
//     </Router>
//   </Provider>,
//   document.getElementById('app')
// )

const axios = require('axios')

const ngrokUrl = 'http://fa278102.ngrok.io'

const customAxios = axios.create({
    baseURL: ngrokUrl
})

module.exports = {ngrokUrl, axios: customAxios}