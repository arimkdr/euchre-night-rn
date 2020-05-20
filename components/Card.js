import React, {useState, useEffect} from 'react'
import {Image, View, Text, TouchableWithoutFeedback} from 'react-native'
import {ngrokUrl} from '../index'

export default Card = (props) => {
    const [sourceImg, setSourceImg] = useState('')
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const values = ['9', '10', 'J', 'Q', 'K', 'A']
    const valueIndex = props.value - 9
    const suitObj = {
        'clubs': 'C',
        'spades': 'S',
        'hearts': 'H',
        'diamonds': 'D'
    }
    const sourceImgName = `${values[valueIndex] + suitObj[props.suit]}.png`
    useEffect(() => {
        console.log('Card useEffect happening')
        fetch(`${ngrokUrl}/${sourceImgName}`)
        .then(res => res.url)
        .then(
            (result) => {
                setIsLoaded(true)
                setSourceImg(result)
            },
            (err) => {
                setIsLoaded(true)
                setError(err)
            }
        )
    }, [])

    if (!isLoaded || !sourceImg) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    const styles = {
        container: {
            height: 100,
            width: 65,
        }
    }

    if (props.value === 'blank') {
        return (
            <View style={styles.container}></View>
        )
    }


    return (
        <TouchableWithoutFeedback onPress={() => props.onClick(props.id)}>
            <Image 
                style={styles.container}
                source={{
                    uri: sourceImg
                }
            } />
        </TouchableWithoutFeedback>
    )
}