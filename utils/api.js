import { AsyncStorage } from 'react-native'
import { decks } from './_DATA'

const DECKS_STORAGE_KEY = 'MOBILE_FLASHCARDS:deck'

export function getDecks() {
    return AsyncStorage
        .getItem(DECKS_STORAGE_KEY)
        .then((data) => {
            return data === null ?
                AsyncStorage
                .setItem(DECKS_STORAGE_KEY, JSON.stringify(decks)) :
                JSON.parse(data)
        })
}