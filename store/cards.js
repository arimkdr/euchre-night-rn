const {axios, ngrokUrl} = require('../index')

const SET_CARDS = 'SET_CARDS'

const setCards = (cards) => {
    return {
        type: SET_CARDS,
        cards
    }
}

export const fetchCards = (numberOfPlayers) => {
    console.log('thunk creator before return')
    return async dispatch => {
        console.log('async thunk before try')
        try {
            if (numberOfPlayers === 4) {
                console.log('got to fetchCards')
                let {data} = await axios.get('/api/cards')
                console.log('fetchCards dispatching data')
                dispatch(setCards(data))
            } else if (numberOfPlayers === 3) {
                let {data} = await axios.get('/api/cards/three-players')
                dispatch(setCards(data))
            }
        } catch (error) {
            console.error('problem with fetchCards thunk', error)
        }
    }
}

export default function cardsReducer (state = [], action) {
    switch (action.type) {
        case SET_CARDS:
            return [...action.cards]
        default:
            return state
    }
}