import React from 'react'
import {Link} from 'react-router-native'
import {StyleSheet, Text, View, Button} from 'react-native'

const styles = StyleSheet.create({
    homeButtonScreen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#52f',
        height: 100
    }
})

export default Home = (props) => {
    return (
        <View>
            <Link to='/hand'>
                <Text>Join Game</Text>
            </Link>
        </View>
    )
}