import React from 'react'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-rn'

const DeckInfo = ({ title, questionsNum }) => {
	return (
		<View style={tailwind('p-4 m-3 mt-4 justify-center items-center')}>
			<Text style={tailwind('text-2xl')}>{title}</Text>
			<Text style={tailwind('text-gray-500 text-base')}>
				{questionsNum} {questionsNum === 1 ? 'card' : 'cards'}
			</Text>
		</View>
	)
}

export default DeckInfo