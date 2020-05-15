const {axios} = require('../index')
const {ngrokUrl} = require('../index')

const SET_CARDS = 'SET_CARDS'

const setCards = (cards) => {
    return {
        type: SET_CARDS,
        cards
    }
}

export const fetchCards = (numberOfPlayers) => {
    return async dispatch => {
        try {
            if (numberOfPlayers === 4) {
                console.log('got here')
                let {data} = await axios.get('/api/cards')
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