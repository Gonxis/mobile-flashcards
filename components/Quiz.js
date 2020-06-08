import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import CustomButton from './CustomButton'
import tailwind from 'tailwind-rn'
import QuizResults from './QuizResults'
import Card from './Card'

import { connect } from 'react-redux'

class Quiz extends Component {

    state = {
		correct: 0,
		incorrect: 0,
        questionCount: this.props.deck.questions.length,
        seeAnswer: false,
        currentQuestion: 0
    }
    
    handleAnswer = (response) => {

        response === 'correct' 
            ? this.setState((prevState) => (
                { 
                    correct: prevState.correct + 1,
                    currentQuestion: prevState.currentQuestion + 1
                }
            ))
		    : this.setState((prevState) => (
                { 
                    incorrect: prevState.incorrect + 1,
                    currentQuestion: prevState.currentQuestion + 1
                }
            ))
		
    }

    handleSeeAnswer = () => {
        if (this.state.seeAnswer === false) {
            this.setState({
                seeAnswer: true
            })
        } else {
            this.setState({
                seeAnswer: false
            })
        }
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

        const { correct, incorrect, questionCount, currentQuestion, seeAnswer } = this.state

        const bool = true

        if (questionCount === currentQuestion) {
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
                    <Card 
                        question={questions[currentQuestion]}
                        currentQuestion={currentQuestion}
                        questions={questions}
                        handleSeeAnswer={this.handleSeeAnswer}
                        handleAnswer={this.handleAnswer}
                        title={title}
                        seeAnswer={seeAnswer}
                    />
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