import React, { Component } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import tailwind from 'tailwind-rn'
import {
  getDecks,
  getDeck,
  saveDeckTitle,
  saveCardToDeck,
  removeDeck
} from './utils/api'

import DeckList from './components/DeckList'
import AddCard from './components/AddCard'

class App extends Component {

  render() {

    return (
      <SafeAreaView>
        <View >
          {/* <DeckList /> */}
          <AddCard />
        </View>
      </SafeAreaView>
    )
  }
}

export default App