import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Input = props => {
    return (
        <TextInput style={{...style.input, ...props.style}}></TextInput>
    )
}

const style = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: 'black',
        marginVertical: 10,
    }
})

export default Input
