import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import CustomButton from './CustomButton'
import tailwind from 'tailwind-rn'
import QuizResults from './QuizResults'

import { connect } from 'react-redux'

class Quiz extends Component {

    state = {
		correct: 0,
		incorrect: 0,
        questionCount: this.props.deck.questions.length,
        seeAnswer: false
    }
    
    handleAnswer = (response) => {

        response === 'correct' 
            ? this.setState((prevState) => ({ correct: prevState.correct + 1 }))
		    : this.setState((prevState) => ({ incorrect: prevState.incorrect + 1 }))
		
    }

    handleSeeAnswer = () => {
        /*
        if (this.state.seeAnswer === false) {
            this.setState({
                seeAnswer: true
            })
        } else {
            this.setState({
                seeAnswer: false
            })
        }
        */
    }

    handleRestart = () => {
        this.setState({
			questionCount: this.props.deck.questions.length,
			correct: 0,
			incorrect: 0
		})

		this.props.navigation.navigate('Quiz')
    }

    render() {
        if (!this.props.deck || this.props.deck.questions.length === 0) {
			return (
                <View style={tailwind('flex-1 justify-center items-center bg-blue-100')}>
                    <View style={tailwind('mx-10')}>
                        <Text style={tailwind('text-center text-2xl')}>Sorry, you can't take a quiz because there are no cards in the deck.</Text>
                    </View>
                </View>
			)
        }
        const { deck } = this.props
        const { title, questions } = deck

        const { correct, incorrect, questionCount } = this.state

        const bool = true

        if (questions.length === correct + incorrect) {
			return (
				<QuizResults
					totalQuestions={questionCount}
					correctAnswers={correct}
					incorrectAnswers={incorrect}
					navigation={this.props.navigation}
					restart={this.handleRestart}
				/>
			)
		}

        return (
            <View style={tailwind('flex-1 items-center justify-center bg-blue-100')}>
                <View style={tailwind('px-5 py-3 items-center')}>
                    {questions.map((question, idx) => (
                        <View style={tailwind('flex-1 p-4 justify-around')} key={idx}>
                            { bool ? (
                                <View >
                                    <View>
                                        <Text style={tailwind('text-xl text-center')}>
                                            Question {idx + 1} out of {questions.length} of {title} Deck
                                        </Text>
                                    </View>
                                    <View style={tailwind('p-2')}>

                                        <View style={tailwind('justify-center')}>
                                            <Text style={tailwind('text-center text-black text-2xl')}>
                                                {question.question}
                                            </Text>
                                        </View>
                                        <CustomButton 
                                            styleText={tailwind('text-red-700')} 
                                            onPress={this.handleSeeAnswer()}
                                        >
                                            See the answer of the question
                                        </CustomButton>
                                    </View>
                                </View>
                            ) : (
                                <View >
                                    <View>
                                        <Text style={tailwind('text-xl text-center')}>
                                            Answer of question {idx + 1}
                                        </Text>
                                    </View>
                                    <View style={tailwind('p-2')}>

                                        <View style={tailwind('justify-center')}>
                                            <Text style={tailwind('text-center text-black text-2xl')}>
                                                {question.answer}
                                            </Text>
                                        </View>
                                        <CustomButton 
                                            styleText={tailwind('text-green-700')} 
                                            onPress={this.handleSeeAnswer()}
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
                                    onPress={() => this.handleAnswer('correct', idx)}
                                >
                                    Correct
                                </CustomButton>
                                <CustomButton 
                                    styleButton={tailwind('bg-red-100 rounded justify-center w-64 h-12 mt-1')} 
                                    styleText={tailwind('text-red-600 font-semibold text-center')} 
                                    onPress={() => this.handleAnswer('incorrect', idx)}
                                >
                                    Incorrect
                                </CustomButton>
                            </View>
                        </View>
				    ))}
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({ decks } , props) => {
    const { title } = props.route.params
    const deck = decks[title]

	return {
		deck
	}
}

export default connect(mapStateToProps)(Quiz)