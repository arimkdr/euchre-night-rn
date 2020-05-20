import React, {useEffect} from 'react';
import {connect, Provider} from 'react-redux'
import {fetchCards} from './store/cards'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import {Buffer} from 'buffer';
window.localStorage = AsyncStorage;
global.Buffer = Buffer;
import store from './store'
import {NativeRouter as Router, Route, Switch} from 'react-router-native'
import Home from './components/Home'
import Hand from './components/PlayerHand'

function DisconnectedApp(props) {

  return (
    <View style={styles.container}>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/hand'>
          <Hand />
        </Route>
      </Switch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cf8',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCards: (numberOfPlayers) => dispatch(fetchCards(numberOfPlayers))
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(DisconnectedApp)

export default Container = () => {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
}


