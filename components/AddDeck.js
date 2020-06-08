import React, { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import CustomButton from './CustomButton'
import tailwind from 'tailwind-rn'

import { connect } from 'react-redux'
import { handleAddDeckTitle } from '../actions'

class AddDeck extends Component{

    state = {
        title: ''
    }

    handleTitle = title => {    
        this.setState(() => ({
            title
        }))
    }

    handleSubmit = () => {
        
        const { navigation } = this.props
        const { title } = this.state

        this.props.handleAddDeckTitle(title)
    
        this.setState({
            title: ''
        })

        navigation.navigate('Deck', { title })

    }

    render() {

        const { title } = this.state

        return (
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={tailwind('flex-1')}
            >
                <View style={tailwind('flex-auto items-center bg-blue-100')}>
                    <View style={tailwind('px-5 py-3 flex-1 justify-start items-center')}>
                            <Text style={tailwind('text-center text-2xl pb-4')}>What is the title of your new deck?</Text>
                            <TextInput
                                style={tailwind('h-10 mb-16 w-64 border border-blue-700 rounded bg-white')}
                                placeholder="Deck Title"
                                onChangeText={this.handleTitle}
                            />
                    </View>
                    <View style={tailwind('justify-end pb-10')}>
                        <CustomButton 
                            styleButton={tailwind('bg-black rounded justify-center w-64 h-12')} 
                            styleText={tailwind('text-white font-semibold text-center')} 
                            onPress={this.handleSubmit}
                            disabled={title === ''}
                        >
                            Create Deck
                        </CustomButton>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default connect(null, { handleAddDeckTitle })(AddDeck)