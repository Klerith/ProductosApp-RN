import React from 'react'
import { View } from 'react-native'

export const Background = () => {
    return (
        <View 
            style={{
                position: 'absolute',
                backgroundColor: '#5856D6',
                top: -250,
                width: 1000,
                height: 1200,
                transform: [
                    { rotate: '-70deg' }
                ]
            }}
        />
    )
}
