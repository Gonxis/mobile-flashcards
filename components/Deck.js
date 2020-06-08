import React, { Component } from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'
import CustomButton from './CustomButton'

import { connect } from 'react-redux'
import { handleRemoveDeck } from './../actions'

class Deck extends Component {

    delete = () => {

        const { handleRemoveDeck, navigation, route } = this.props

        handleRemoveDeck(route.params.title)
        navigation.navigate('DeckList')
    }

    render() {

        const { route } = this.props

        return (
            <View style={tailwind('flex-1 items-center justify-center bg-blue-100')}>
                <View style={tailwind('flex-1 px-5 py-3 items-center')}>
                    <Text style={tailwind('pt-5 text-4xl')}>{route.params.title}</Text>
                    <Text style={tailwind('text-sm text-gray-600 pb-40')}>
                        {
                            route.params.sumQuestion 
                                ? route.params.questionsNum + route.params.sumQuestion
                                : route.params.questionsNum || 0
                        } 
                        {
                            route.params.sumQuestion 
                                ? route.params.questionsNum + route.params.sumQuestion === 1 ? ' card' : ' cards'
                                : route.params.questionsNum === 1 ? ' card' : ' cards'
                        }
                    </Text>
                    <View style={tailwind('h-40 justify-between')}>
                        <CustomButton 
                            styleButton={tailwind('bg-white border border-black rounded justify-center w-64 h-12')} 
                            styleText={tailwind('text-black font-semibold text-center')} 
                            onPress={() => this.props.navigation.navigate('AddCard', {
                                title: route.params.title
                            })}
                        >
                            Add Card
                        </CustomButton>
                        <CustomButton 
                            styleButton={tailwind('bg-black rounded justify-center w-64 h-12')} 
                            styleText={tailwind('text-white font-semibold text-center')} 
                            onPress={() => this.props.navigation.navigate('Quiz', {
                                title: route.params.title,
                                questionsNum: route.params.questionsNum
                            })}
                        >
                            Start Quiz
                        </CustomButton>
                        <CustomButton 
                            styleButton={tailwind('relative')}
                            styleText={tailwind('text-red-700')} 
                            onPress={this.delete}>
                            Delete Deck
                        </CustomButton>
                    </View>
              </View>
          </View>
        )
    }
}

export default connect(null, { handleRemoveDeck })(Deck)