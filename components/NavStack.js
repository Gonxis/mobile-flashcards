import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AddCard from './AddCard'
import Quiz from './Quiz'
import Deck from './Deck'
import Home from './Home'

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
        name='Home' 
        component={Home}
        options={{ title: 'Home' }}
      />
      <Stack.Screen 
        name='Deck' 
        component={Deck} 
        options={{ title: 'Deck' }}
      />
      <Stack.Screen 
        name='AddCard' 
        component={AddCard} 
        options={{ title: 'Add Card' }}
      />
      <Stack.Screen 
        name='Quiz' 
        component={Quiz} 
        options={{ title: 'Quiz' }}
      />
    </Stack.Navigator>
  )
}