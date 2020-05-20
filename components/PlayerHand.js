import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {fetchCards} from '../store/cards'
import {View, Text, Button} from 'react-native'
import {Link} from 'react-router-native'
import Card from './Card'

const DisconnectedHand = (props) => {
    const [hand, setHand] = useState([])
    const [cardToSelect, setCardToSelect] = useState([])
    const [cardToSelectJSX, setCardToSelectJSX] = useState(<></>)
    useEffect(() => {
        console.log('useEffect happening')
        props.fetchCards(4)
        console.log('props.fetchCards ran')
    }, [])
    useEffect(() => {
        console.log('useEffect2 happening')
        if (props.cards && props.cards[0]) {
            let tempHand = []
            while (!tempHand || tempHand.length + cardToSelect.length < 5) {
                const testCard = props.cards[Math.floor(Math.random() * 24)]
                if (!tempHand.includes(testCard) && testCard.id !== cardToSelect.id) {
                    tempHand.push(testCard)
                }
            }
            setHand(tempHand)
        }
    }, [props.cards])

    if (!props.cards || !props.cards[0] || !hand) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    const shuffle = () => {
        let tempHand = []
        while (tempHand.length + cardToSelect.length < 5) {
            const index = Math.floor(Math.random() * 24)
            const testCard = props.cards[index]
            if (!tempHand.includes(testCard)) {
                console.log(`test card: ${testCard}; index: ${index}`)
                tempHand.push(testCard)
            }
        }
        setHand(tempHand)
    }

    const preselect = (cardId) => {
        console.log('preselecting with', cardId)
        deselect(cardId)
        const tempCardToSelect = hand.filter(card => card.id === cardId)
        console.log('tempCardToSelect', tempCardToSelect)
        setCardToSelect(tempCardToSelect)
    }

    const deselect = (cardId) => {
        console.log('deselecting')
        setCardToSelect([])
    }

    let tempHands = hand.map(card => {
        if (card && (cardToSelect[0] ? card.id !== cardToSelect[0].id : true)) {
            return (
                <Card value={card.value} id={card.id} suit={card.suit} key={card.value + card.id} onClick={(id) => preselect(id)} />
            )
        } else {
            return (
                <Card value='blank' key={card.value + card.id} />
            )
        }
    })

    if (cardToSelect[0]) {
        console.log(`CTS: ${cardToSelect[0].value} of ${cardToSelect[0].suit}`)
    }

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <View>
                {cardToSelect[0] ? <Card id={cardToSelect[0].id} value={cardToSelect[0].value} suit={cardToSelect[0].suit} onClick={(id) => deselect(id)} /> : <></>}
            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                {tempHands}
            </View>
            <Button title="Shuffle" onPress={shuffle} />
            <Link to='/'>
                <Text>Back to Home</Text>
            </Link>
        </View>
    )

}

const mapStateToProps = state => {
    return {
        cards: state.cards
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCards: (numberOfPlayers) => {
            console.log('mapping fetchCards')
            return dispatch(fetchCards(numberOfPlayers))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisconnectedHand)