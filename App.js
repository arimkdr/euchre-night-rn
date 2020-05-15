import React, {useEffect} from 'react';
import {connect, Provider} from 'react-redux'
import {fetchCards} from './store/cards'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import {Buffer} from 'buffer';
window.localStorage = AsyncStorage;
global.Buffer = Buffer;
import store from './store'

function DisconnectedApp(props) {
  useEffect(() => {
    props.fetchCards(4)
  }, [])

  if (!props.cards && !props.cards[0]) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  const cardDivs = props.cards.map(card => {
    return (
      <View key={card.id}>
        <Text>Suit: {card.suit}</Text>
        <Text>Value: {card.value}</Text>
      </View>
    )
  })

  const cardsToRender = cardDivs.slice(0, 5)

  return (
    <View style={styles.container}>
      {cardsToRender}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
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
      <App />
    </Provider>
  )
}


