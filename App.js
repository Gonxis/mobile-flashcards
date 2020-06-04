import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import {
  getDecks,
  getDeck,
  saveDeckTitle,
  saveCardToDeck,
  removeDeck
} from './utils/api'

import NavStack from './components/NavStack'

class App extends Component {

  render() {

    return (
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    )
  }
}

export default App