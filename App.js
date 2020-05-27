import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import tailwind from 'tailwind-rn'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  getDecks,
  getDeck,
  saveDeckTitle,
  saveCardToDeck,
  removeDeck
} from './utils/api'

import DeckList from './components/DeckList'
import AddCard from './components/AddCard'
import AddDeck from './components/AddDeck'
import Quiz from './components/Quiz'

const Stack = createStackNavigator()

class App extends Component {

  render() {

    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DeckList" component={DeckList} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

export default App