import React from 'react'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-rn'

const DeckInfo = ({ title, questionsNum }) => {
	return (
		<View style={tailwind('bg-white rounded p-8 m-3 mt-4 justify-center items-center shadow-2xl')}>
			<Text style={{ fontSize: 22 }}>{title}</Text>
			<Text style={{ fontSize: 18, color: 'gray' }}>
				{questionsNum} {questionsNum === 1 ? 'card' : 'cards'}
			</Text>
		</View>
	)
}

export default DeckInfo