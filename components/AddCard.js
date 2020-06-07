import React, { Component } from 'react'
import { View, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
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
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={tailwind('flex-1')}
            >
                <View style={tailwind('items-center justify-center bg-blue-100')}>
                    <View style={tailwind('flex-auto justify-start items-center px-5 py-3')}>
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
                    </View>
                    <View  style={tailwind('pb-20')}></View>
                    <View style={tailwind('flex-auto justify-end pt-64 pb-10')}>
                        <CustomButton 
                            styleButton={tailwind('bg-black rounded justify-center self-end w-64 h-12')} 
                            styleText={tailwind('text-white font-semibold text-center')} 
                            onPress={this.handleSubmit}>
                            Submit
                        </CustomButton>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default connect(null, { handleAddCardToDeck })(AddCard)