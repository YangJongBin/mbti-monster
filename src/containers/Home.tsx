import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    
}

const Home = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text>Hellow </Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor:'white'
    }
})
