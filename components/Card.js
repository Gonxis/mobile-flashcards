import React, { Component } from 'react'
import { View, Text } from 'react-native'
import CustomButton from './CustomButton'
import tailwind from 'tailwind-rn'

class Card extends Component {
	render() {

        const { question, currentQuestion, questions, title, seeAnswer } = this.props
        
		return (
			<View style={tailwind('flex-1 p-4 justify-around')}>
                { !seeAnswer ? (
                    <View >
                        <View>
                            <Text style={tailwind('text-xl text-center pb-32')}>
                                Question {currentQuestion + 1} out of {questions.length} of {title} Deck
                            </Text>
                        </View>
                        <View style={tailwind('p-2')}>
                            <View style={tailwind('justify-center')}>
                                 <Text style={tailwind('text-center text-black text-2xl pb-4')}>
                                    {question.question}
                                </Text>
                            </View>
                            <CustomButton 
                                styleText={tailwind('text-red-700')} 
                                onPress={this.props.handleSeeAnswer}
                            >
                                See the answer of the question
                            </CustomButton>
                        </View>
                    </View>
                ) : (
                    <View >
                        <View>
                            <Text style={tailwind('text-xl text-center pb-32')}>
                                Answer of question {currentQuestion + 1}
                            </Text>
                        </View>
                        <View style={tailwind('p-2')}>
                            <View style={tailwind('justify-center')}>
                                <Text style={tailwind('text-center text-black text-2xl pb-4')}>
                                    {question.answer}
                                </Text>
                            </View>
                            <CustomButton 
                                styleText={tailwind('text-green-700')} 
                                onPress={this.props.handleSeeAnswer}
                            >
                                See the question
                            </CustomButton>
                        </View>
                    </View>
                )
                }
                <View style={tailwind('p-2 justify-end items-center')}>
                    <CustomButton 
                        styleButton={tailwind('bg-green-100 rounded justify-center w-64 h-12')} 
                        styleText={tailwind('text-green-600 font-semibold text-center')} 
                        onPress={() => this.props.handleAnswer}
                    >
                        Correct
                    </CustomButton>
                    <CustomButton 
                        styleButton={tailwind('bg-red-100 rounded justify-center w-64 h-12 mt-1')} 
                        styleText={tailwind('text-red-600 font-semibold text-center')} 
                        onPress={() => this.props.handleAnswer}
                    >
                        Incorrect
                    </CustomButton>
                </View>
            </View>
		)
	}
}

export default Card