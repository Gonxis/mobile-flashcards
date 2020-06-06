import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import * as RN from 'react-native'
import * as RNGH from 'react-native-gesture-handler'
import tailwind from 'tailwind-rn'

import { handleInitialData } from './../actions'

import DeckInfo from './DeckInfo'

const Platform = RN.Platform
const TouchableOpacity = Platform.OS === 'ios' ? RN.TouchableOpacity : RNGH.TouchableOpacity

export class DeckList extends Component {

  componentDidMount() {
		this.props.handleInitialData()
  }
  
  render() {

    const { deckList } = this.props

    if (!deckList || deckList.length === 0) {
			return (
				<View style={tailwind('flex-1 items-center justify-center bg-blue-100 mx-2')}>
					<Text style={tailwind('text-2xl')}>There are no decks available</Text>
				</View>
      )
    }
    
		return (
			<View style={tailwind('flex-1 content-center')}>
			  <FlatList
						data={deckList}
						keyExtractor={(item) => item.deckId}
						renderItem={({ item }) => (
							<TouchableOpacity
								onPress={() =>
									this.props.navigation.navigate('Deck', {
                    title: item.title,
                    questionsNum: item.questionsNum
									})}>
								<DeckInfo title={item.title} questionsNum={item.questionsNum} />
							</TouchableOpacity>
						)}
					/>
			</View>
		)
  }
}

const mapStateToProps = ({ decks }) => {
  const deckList = Object.keys(decks).map((deckId) => ({
		deckId,
		questionsNum: decks[deckId].questions.length,
		title: decks[deckId].title
  }))
  
	return {
		deckList
	}
}

export default connect(mapStateToProps, { handleInitialData })(DeckList)