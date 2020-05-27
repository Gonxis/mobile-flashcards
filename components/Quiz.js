import React, { Component } from 'react'
import { View, Text, SafeAreaView, TextInput } from 'react-native'
import CustomButton from './CustomButton'
import tailwind from 'tailwind-rn'

class Quiz extends Component{

    handleCorrect = () => {
        console.log("Correct button pressed")
    }

    handleIncorrect = () => {
        console.log("Incorrect button pressed")
    }

    handleSeeAnswer = () => {
        console.log("See answer of the question pressed")
    }
    render() {
        return (
            <SafeAreaView style={tailwind('flex-1 items-center justify-center bg-blue-100')}>
                <View style={tailwind('px-5 py-3 items-center')}>
                    <View>

                    </View>
                    <Text style={tailwind('text-2xl')}>Question of the Quiz</Text>
                    <CustomButton 
                        styleText={tailwind('text-red-700')} 
                        onPress={this.handleSeeAnswer}
                    >
                        See the answer of the question
                    </CustomButton>
                    <CustomButton 
                        styleButton={tailwind('bg-green-100 px-5 py-5 rounded justify-center w-4/5 h-12')} 
                        styleText={tailwind('text-green-600 font-semibold text-center')} 
                        onPress={this.handleCorrect}
                    >
                        Correct
                    </CustomButton>
                    <CustomButton 
                        styleButton={tailwind('bg-red-100 px-5 py-5 rounded justify-center w-4/5 h-12')} 
                        styleText={tailwind('text-red-600 font-semibold text-center')} 
                        onPress={this.handleIncorrect}
                    >
                        Incorrect
                    </CustomButton>
                </View>
            </SafeAreaView>
        )
    }
}

export default Quiz