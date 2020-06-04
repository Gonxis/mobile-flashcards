import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducers"
import middleware from "./middleware"

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

    const store = createStore(reducer, middleware)
    
    return (
      <Provider store={store}>
        <NavigationContainer>
          <NavStack />
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App