import {getFromLocalStorage, setLocalStorage} from "./localStorage";

export type StateType = {
    counter: number
    maxVal: number
    startVal: number
    isSettings: boolean
    error: boolean
    userMessage: null | string
}
const currVal = getFromLocalStorage('countVal')
const currStartVal = getFromLocalStorage('startVal')
const currMaxVal = getFromLocalStorage('maxVal')


const initialState: StateType = {
    counter: currVal ? currVal : 0,
    maxVal: currMaxVal ? currMaxVal : 5,
    startVal: currStartVal ? currStartVal : 0,
    isSettings: !currVal,
    error: false,
    userMessage: currVal ? null : 'enter values and press \'set\''
}


export const counterReducer = (state: StateType = initialState, action: ActionDispatchType): StateType => {
    switch (action.type) {
        case 'INCREASE_COUNT': {
            state.counter += 1
            setLocalStorage('countVal', state.counter)
            return {...state}
        }
        case 'RESET_COUNT': {
            state.counter = state.startVal
            setLocalStorage('countVal', state.counter)
            return {...state}
        }
        case 'SET_COUNTER': {
            state.counter = action.value
            state.isSettings = false
            state.userMessage = null
            setLocalStorage('countVal', state.startVal)
            return {...state}
        }
        case 'CHANGE_MAX_VAL': {
            const maxVal = action.value
            state.isSettings = true
            maxVal <= state.startVal || maxVal < 0 || state.startVal < 0 ? state.error = true : state.error = false
            state.userMessage = state.error ? 'incorrect value!' : 'enter values and press \'set\''
            state.maxVal = maxVal
            setLocalStorage('maxVal', state.maxVal)
            return {...state}
        }
        case 'CHANGE_START_VAL': {
            const startVal = action.value
            state.isSettings = true
            startVal < 0 || startVal >= state.maxVal || state.maxVal < 0 ? state.error = true : state.error = false
            state.userMessage = state.error ? 'incorrect value!' : 'enter values and press \'set\''
            state.startVal = startVal
            setLocalStorage('startVal', state.startVal)
            return {...state}
        }
        default: {
            return state
        }
    }
}

export type ActionDispatchType =
    IncreaseCountACType
    | ResetCountACType
    | ChangeMaxValACType
    | ChangeStartValACType
    | SetCounterType

type IncreaseCountACType = ReturnType<typeof increaseCountAC>
export const increaseCountAC = () => {
    return {
        type: 'INCREASE_COUNT',
    } as const
}
type SetCounterType = ReturnType<typeof setCounterAC>
export const setCounterAC = (value: number) => {
    return {
        type: 'SET_COUNTER',
        value
    } as const
}

type ResetCountACType = ReturnType<typeof resetCountAC>
export const resetCountAC = () => {
    return {
        type: 'RESET_COUNT',
    } as const
}
type ChangeMaxValACType = ReturnType<typeof changeMaxValAC>
export const changeMaxValAC = (value: number) => {
    return {
        type: 'CHANGE_MAX_VAL',
        value
    } as const
}
type ChangeStartValACType = ReturnType<typeof changeStartValAC>
export const changeStartValAC = (value: number) => {
    return {
        type: 'CHANGE_START_VAL',
        value
    } as const
}
