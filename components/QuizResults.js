import React, { Component } from 'react'
import { View, Text, Animated } from 'react-native'
import CustomButton from './CustomButton'
import tailwind from 'tailwind-rn'

class QuizResult extends Component {
	state = {
		bounceValue: new Animated.Value(0)
	};

	componentDidMount() {
		const { bounceValue } = this.state

		Animated.sequence([
			Animated.timing(bounceValue, { duration: 600, toValue: 1.04 }),
			Animated.spring(bounceValue, { toValue: 1, friction: 4 })
		]).start()
	}

	render() {
		const { totalQuestions, correctAnswers } = this.props
		const { bounceValue } = this.state

		const percent = (correctAnswers / totalQuestions * 100).toFixed(0)
		const totalPercentageStyle = percent > 50 ? 'green' : 'red'

		return (
			<View style={tailwind('flex-1 p-4 justify-around bg-blue-100 items-center')}>
				<View>
					<Text style={tailwind('text-center text-xl')}>Quiz Complete!</Text>
					<Text style={tailwind('text-center text-4xl mt-4')}>
						{correctAnswers} / {totalQuestions} correct
					</Text>
					<Animated.Text
						style={[
							tailwind('text-center text-6xl mt-4 text-6xl'),
							{
								color: totalPercentageStyle,
								marginTop: 40,
								transform: [
									{ scale: bounceValue }
								]
							}
						]}>
						{percent}%
					</Animated.Text>
				</View>
				<View>
                    <CustomButton
                        styleButton={tailwind('bg-black rounded justify-center w-64 h-12 mb-4')} 
                        styleText={tailwind('text-white font-semibold text-center')}
                        onPress={this.props.restart}
                    >
                        Restart Quiz
                    </CustomButton>
					<CustomButton
                        styleButton={tailwind('bg-white border border-black rounded justify-center w-64 h-12')} 
                        styleText={tailwind('text-black font-semibold text-center')}
						onPress={() => this.props.navigation.navigate('Deck')}
                    >
						Back to Deck
					</CustomButton>
				</View>
			</View>
		)
	}
}

export default QuizResult