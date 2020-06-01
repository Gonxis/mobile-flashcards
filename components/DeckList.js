import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Deck from './Deck'

export class DeckList extends Component {
  render() {
    return (
        <View>
            <Deck navigation={this.props.navigation} />
        </View>
    );
  }
}

export default DeckList
