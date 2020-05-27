import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Deck from './Deck'

export class DeckList extends Component {
  render() {
    return (
        <View>
            <Text>Deck List</Text>
            <Deck />
        </View>
    );
  }
}

export default DeckList
