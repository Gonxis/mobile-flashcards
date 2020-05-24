import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { getDecks } from './utils/api'

export default class App extends Component {

  state = {
    data: ''
  }

  componentDidMount() {
    getDecks()
      .then(data => {
        console.log(JSON.stringify(data))
        this.setState(() => ({
          data
        }))
      })
  }

  render() {

    const { data } = this.state

    return (
      <SafeAreaView style={tailwind('flex-1 items-center justify-center')}>
        <View style={tailwind('bg-blue-500 px-5 py-3 rounded-full')}>
          <Text style={tailwind('text-white font-semibold text-lg')}>
            {JSON.stringify(data)}
          </Text>
        </View>
      </SafeAreaView>
    )
  }
}
