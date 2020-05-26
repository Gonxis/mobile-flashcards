import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import tailwind from 'tailwind-rn'

export default function CustomButton ({children, onPress, styleText={}, styleButton={}}){
    return(
        <TouchableOpacity style={[tailwind(''), styleButton]} onPress={onPress}>
            <Text style={[tailwind('text-center'), styleText]}>{children}</Text>
        </TouchableOpacity>
    )
}