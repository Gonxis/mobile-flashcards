import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import CustomButton from './CustomButton'
import tailwind from 'tailwind-rn'

import { connect } from 'react-redux'
import { handleAddCardToDeck } from './../actions'

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

    handleSubmit = () => {
    
        const { question, answer } = this.state
        const { handleAddCardToDeck, route, navigation } = this.props

        const card = {
            question,
            answer
        }

        handleAddCardToDeck(route.params.title, card)

        this.setState(() => ({
            question: '',
            answer: ''
        }))

        navigation.goBack()
    }

    render() {
        return (
            <View style={tailwind('flex-1 items-center justify-center bg-blue-100')}>
                <View style={tailwind('px-5 py-3 items-center')}>
                        <TextInput
                            style={tailwind('h-10 m-2 w-64 border border-blue-700 rounded bg-white')}
                            placeholder='Question'
                            onChangeText={this.handleQuestion}
                        />
                        <TextInput
                            style={tailwind('h-10 mb-16 w-64 border border-blue-700 rounded bg-white')}
                            placeholder='Answer'
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

export default connect(null, { handleAddCardToDeck })(AddCard)