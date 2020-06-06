import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import DeckList from './DeckList'
import AddDeck from './AddDeck'

const Tab = createBottomTabNavigator()

export default function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='DeckList' component={DeckList} />
            <Tab.Screen name='AddDeck' component={AddDeck} />
        </Tab.Navigator>
    )
}