import React from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'

import Card from '../components/CardView'
import Input from '../components/Input'

const HomeScreen = props => {
    return (
        // main view
        <View style={styles.appContainer}>
            <Text style={styles.headerTitle}>Start a New Game!</Text>

            {/* card view */}

            <Card style={styles.cardContainer}>
                <Text>Select a new Game</Text>
                <Input style={styles.input} />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttons}>
                        <Button title="RESET" />
                    </View>
                    <View style={styles.buttons}>
                        <Button title="CONFIRM" />
                    </View>
                </View>
            </Card>

        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        // alignItems: 'center'
    },

    headerTitle: {
        fontSize: 20,
        marginVertical: 20,
        alignSelf: 'center'
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },

    cardContainer: {
        alignItems: 'center',
        marginHorizontal: 40,
        padding: 20,
    },

    input: {
        width: '80%'
    },

    buttons: {
        width: '50%'
    }
})


export default HomeScreen