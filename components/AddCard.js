import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import CustomButton from './CustomButton'
import tailwind from 'tailwind-rn'

class AddCard extends Component{

    state = {
        question: '',
        answer: ''
    }

    handleQuestion = question => {    
        this.setState(() => ({
            question
        }))
    }

    handleAnswer = answer => {    
        this.setState(() => ({
            answer
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault()
    
        const { question, answer } = this.state

        const card = {
            question,
            answer
        }

        console.log(card)
    
        this.setState(() => ({
            question: '',
            answer: ''
        }))

    }

    render() {
        return (
            <View style={tailwind('flex-1 items-center justify-center bg-blue-100')}>
                <View style={tailwind('px-5 py-3 items-center')}>
                        <TextInput
                            style={tailwind('h-10 m-2 w-64 border border-blue-700 rounded bg-white')}
                            placeholder="Question"
                            onChangeText={this.handleQuestion}
                        />
                        <TextInput
                            style={tailwind('h-10 mb-16 w-64 border border-blue-700 rounded bg-white')}
                            placeholder="Answer"
                            onChangeText={this.handleAnswer}
                        />
                    <CustomButton 
                        styleButton={tailwind('bg-black px-5 py-5 rounded justify-center self-end w-48 h-12')} 
                        styleText={tailwind('text-white font-semibold text-center')} 
                        onPress={this.handleSubmit}>
                        Submit
                    </CustomButton>
                </View>
            </View>
        )
    }
}

export default AddCard