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
		questionCount: this.props.deck.questions.length
    }
    
    handleAnswer = (response) => {

        if (response === 'correct') {
			this.setState((prevState) => ({ correct: prevState.correct + 1 }));
		}
		else {
			this.setState((prevState) => ({ incorrect: prevState.incorrect + 1 }));
		}
    }

    handleSeeAnswer = () => {

        console.log("See the answer")
    }

    handleRestart = () => {
        this.setState({
			questionCount: this.props.deck.questions.length,
			correct: 0,
			incorrect: 0
		});

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
        const { question, answer } = questions

        const { correct, incorrect, questionCount } = this.state

        if (questions.length === correct + incorrect) {
			return (
				<QuizResults
					totalQuestions={questionCount}
					correctAnswers={correct}
					incorrectAnswers={incorrect}
					navigation={this.props.navigation}
					restart={this.handleRestart}
				/>
			);
		}

        return (
            <View style={tailwind('flex-1 items-center justify-center bg-blue-100')}>
                <View style={tailwind('px-5 py-3 items-center')}>
                    {questions.map((question, idx) => (
                        <View key={idx}>
                            {/*
                            <Text style={tailwind('text-2xl')}>Question of the Quiz</Text>
                            <CustomButton 
                                styleText={tailwind('text-red-700')} 
                                onPress={this.handleSeeAnswer(idx)}
                            >
                                See the answer of the question
                            </CustomButton>
                            <CustomButton 
                                styleButton={tailwind('bg-green-100 rounded justify-center w-64 h-12')} 
                                styleText={tailwind('text-green-600 font-semibold text-center')} 
                                onPress={() => this.handleAnswer(answer.CORRECT, idx)}
                            >
                                Correct
                            </CustomButton>
                            <CustomButton 
                                styleButton={tailwind('bg-red-100 rounded justify-center w-64 h-12')} 
                                styleText={tailwind('text-red-600 font-semibold text-center')} 
                                onPress={() => this.handleAnswer(answer.INCORRECT, idx)}
                            >
                                Incorrect
                            </CustomButton>
                            */}
                            <Text>Abc</Text>
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
	};
};

export default connect(mapStateToProps)(Quiz)