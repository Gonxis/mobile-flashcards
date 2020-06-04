import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import DeckList from './DeckList'
import AddCard from './AddCard'
import AddDeck from './AddDeck'
import Quiz from './Quiz'

const Stack = createStackNavigator()

export default function NavStack() {
    return (
       <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'rgb(29, 40, 64)',
            },
            headerTintColor: '#fff',
            headerTitleStyle :{
              fontWeight: 'bold',
            },
          }}
        >
        <Stack.Screen 
          name="DeckList" 
          component={DeckList} 
          options={{ title: 'Deck List' }}
        />
        <Stack.Screen 
          name="AddCard" 
          component={AddDeck} 
          options={{ title: 'Add Card' }}
        />
        <Stack.Screen 
          name="Quiz" 
          component={Quiz} 
          options={{ title: 'Quiz' }}
        />
        <Stack.Screen 
          name="AddDeck" 
          component={AddDeck} 
          options={{ title: 'Add Deck' }}
        />
      </Stack.Navigator>
    );
  }