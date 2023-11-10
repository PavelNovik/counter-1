import {setLocalStorage} from "./localStorage";

export type StateType = {
    counter: number
    maxVal: number
    startVal: number
    isSettings: boolean
    error: boolean
    userMessage: null | string
}

export type StoreType = {
    _state: StateType
    _subscriber: () => void
    getState: () => StateType
    dispatch: (action: ActionDispatchType) => void
    subscriber: (observer: () => void) => void
}

export const store: StoreType = {
    _state: {
        counter: 0,
        maxVal: 5,
        startVal: 0,
        isSettings: true,
        error: false,
        userMessage: 'enter values and press \'set\''
    },
    _subscriber() {
        console.log(this)
    },
    getState() {
        return this._state
    },
    dispatch(action: ActionDispatchType) {
        switch (action.type) {
            case 'INCREASE_COUNT': {
                this._state.counter += 1
                setLocalStorage('countVal', this._state.counter)
                this._subscriber()
                return
            }
            case 'RESET_COUNT': {
                this._state.counter = this._state.startVal
                setLocalStorage('countVal', this._state.counter)
                this._subscriber()
                return
            }
            case 'SET_COUNTER': {
                this._state.counter = action.payload.value
                this._state.isSettings = false
                this._state.userMessage = null
                this._subscriber()
                return
            }
            case 'CHANGE_MAX_VAL': {
                const maxVal = action.payload.value
                this._state.isSettings = true
                maxVal <= this._state.startVal || maxVal < 0 || this._state.startVal < 0 ? this._state.error = true : this._state.error = false
                this._state.userMessage = this._state.error ? 'incorrect value!' : 'enter values and press \'set\''
                this._state.maxVal = maxVal
                setLocalStorage('maxVal', this._state.maxVal)
                this._subscriber()
                return
            }
            case 'CHANGE_START_VAL': {
                const startVal = action.payload.value
                this._state.isSettings = true
                startVal < 0 || startVal >= this._state.maxVal || this._state.maxVal < 0 ? this._state.error = true : this._state.error = false
                this._state.userMessage = this._state.error ? 'incorrect value!' : 'enter values and press \'set\''
                this._state.startVal = startVal
                setLocalStorage('startVal', this._state.startVal)
                this._subscriber()
                return
            }
            default: {
                throw new Error('There are no this action.')
            }
        }
    },

    subscriber(observer) {
        this._subscriber = observer
    }

}

type ActionDispatchType =
    IncreaseCountACType
    | ResetCountACType
    | ChangeMaxValACType
    | ChangeStartValACType
    | SetCounterType

type IncreaseCountACType = ReturnType<typeof increaseCountAC>
export const increaseCountAC = () => {
    return {
        type: 'INCREASE_COUNT',
        payload: {}
    } as const
}
type SetCounterType = ReturnType<typeof setCounterAC>
export const setCounterAC = (value: number) => {
    return {
        type: 'SET_COUNTER',
        payload: {
            value
        }
    } as const
}

type ResetCountACType = ReturnType<typeof resetCountAC>
export const resetCountAC = () => {
    return {
        type: 'RESET_COUNT',
        payload: {}
    } as const
}
type ChangeMaxValACType = ReturnType<typeof changeMaxValAC>
export const changeMaxValAC = (value: number) => {
    return {
        type: 'CHANGE_MAX_VAL',
        payload: {
            value
        }
    } as const
}
type ChangeStartValACType = ReturnType<typeof changeStartValAC>
export const changeStartValAC = (value: number) => {
    return {
        type: 'CHANGE_START_VAL',
        payload: {
            value
        }
    } as const
}
