import React, { Component } from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'
import CustomButton from './CustomButton'

class Deck extends Component {

    delete = () => {
        //const key = timeToString()

        // Update redux
        //this.props.dispatch(addEntry({
        //    [key]: getDailyReminderValue()
        //}))

        // Navigate to home
        //this.props.goBack()
        //this.toHome()
        // Save to DB
        //removeEntry(key)
        console.log("Delete button pressed")
    }

    startQuiz = () => {
        console.log("Start quiz pressed")
    }

    addCard = () => {
        console.log("Add Quiz pressed")
    }

    render() {

        return (
            <View style={tailwind('flex-1 items-center justify-center bg-blue-100')}>
                <View style={tailwind('flex-1 px-5 py-3 items-center')}>
                    <Text style={tailwind('pt-5 text-4xl')}>Deck Title</Text>
                    <Text style={tailwind('text-sm text-gray-600 pb-40')}># of cards</Text>
                    <View style={tailwind('h-40 justify-between')}>
                        <CustomButton 
                            styleButton={tailwind('px-5 py-5 bg-white border border-black rounded justify-center w-48 h-12')} 
                            styleText={tailwind('text-black font-semibold text-center')} 
                            onPress={this.addCard}
                        >
                            Add Card
                        </CustomButton>
                        <CustomButton 
                            styleButton={tailwind('bg-black px-5 py-5 rounded justify-center w-48 h-12')} 
                            styleText={tailwind('text-white font-semibold text-center')} 
                            onPress={this.startQuiz}
                        >
                            Start Quiz
                        </CustomButton>
                        <CustomButton styleText={tailwind('text-red-700')} onPress={this.delete}>
                            Delete Deck
                        </CustomButton>
                    </View>
              </View>
          </View>
        )
    }
}

export default Deck