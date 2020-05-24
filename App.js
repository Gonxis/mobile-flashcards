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

export default class App extends Component {

  state = {
    data: ''
  }

  componentDidMount() {
    this.handleGetDecks()
  }

  handleGetDecks = () => {
    getDecks()
      .then(data => {
        console.log(JSON.stringify(data))
        this.setState(() => ({
          data
        }))
      })
  }

  handleGetDeck = () => {
    getDeck('Redux')
      .then(data => {
        console.log(JSON.stringify(data))
        this.setState({
          data
        })
      })
  }

  handleSaveDeck = () => {
    saveDeckTitle('New Deck from local')
  }

  handleSaveCardToDeck = () => {
    saveCardToDeck('New Deck from local', {
      question: 'Just a question for tesing purpose...',
      answer: 'It is all right!'
    })
  }

  handleRemoveDeck = () => {
    removeDeck('New Deck from local')
  }

  render() {

    const { data } = this.state

    return (
      <SafeAreaView style={tailwind('flex-1 items-center justify-center')}>
        <View style={tailwind('bg-blue-500 px-5 py-3 rounded-full')}>
          <View >
            <TouchableOpacity onPress={this.handleGetDecks}>
              <Text >Get Decks</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleRemoveDeck}>
              <Text >Delete Deck</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.handleGetDeck}>
              <Text >Get Deck</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleSaveDeck}>
              <Text >Add Deck</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleSaveCardToDeck}>
              <Text >Add Card</Text>
            </TouchableOpacity>
          </View>
          <Text style={tailwind('text-white font-semibold text-lg')}>
            {JSON.stringify(data)}
          </Text>
        </View>
      </SafeAreaView>
    )
  }
}
