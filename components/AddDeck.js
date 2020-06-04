import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import CustomButton from './CustomButton'
import tailwind from 'tailwind-rn'

class AddDeck extends Component{

    state = {
        title: ''
    }

    handleTitle = title => {    
        this.setState(() => ({
            title
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault()
    
        const { title } = this.state

        console.log(title)
    
        this.setState(() => ({
            title: ''
        }))

    }

    render() {
        return (
            <View style={tailwind('flex-1 items-center justify-center bg-blue-100')}>
                <View style={tailwind('px-5 py-3 items-center')}>
                        <Text style={tailwind('text-2xl')}>What is the title of your new deck?</Text>
                        <TextInput
                            style={tailwind('h-10 mb-16 w-64 border border-blue-700 rounded bg-white')}
                            placeholder="Deck Title"
                            onChangeText={this.handleTitle}
                        />
                    <CustomButton 
                        styleButton={tailwind('bg-black px-5 py-5 rounded justify-center w-4/5 h-12')} 
                        styleText={tailwind('text-white font-semibold text-center')} 
                        onPress={this.handleSubmit}
                    >
                        Create Deck
                    </CustomButton>
                </View>
            </View>
        )
    }
}

export default AddDeck