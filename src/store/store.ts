export type StateType = {
    counter: number
    maxVal: number
    startVal: number
    isSettings: boolean
    isError: boolean
    userMessage: null | string
}

export type StoreType = {
    _state: StateType
    _subscriber: () => void
    getState: () => StateType
    dispatch: (action: ActionDispatchType) => StateType
    // increaseCount: () => void
    // resetCount: () => void
    // changeMaxVal: (value: string) => void
    // changeStartVal: (value: string) => void
    // setChanges: () => void
    subscriber: (observer: () => void) => void
}

export const store: StoreType = {
    _state: {
        counter: 0,
        maxVal: 5,
        startVal: 0,
        isSettings: false,
        isError: false,
        userMessage: null
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
                return this._state
            }
            case 'RESET_COUNT': {
                this._state.counter = this._state.startVal
                return this._state
            }
            case 'CHANGE_MAX_VAL': {
                const maxVal = +action.payload.value
                this._state.isSettings = true
                maxVal <= this._state.startVal ? this._state.isError = true : this._state.isError = false
                this._state.maxVal = maxVal
                return this._state
            }
            case 'CHANGE_START_VAL': {
                const startVal = +action.payload.value
                this._state.isSettings = true
                startVal < 0 ? this._state.isError = true : this._state.isError = false
                this._state.maxVal = startVal
                return this._state
            }
            case 'SET_CHANGES': {
                this._state.counter = this._state.startVal
                this._state.isSettings = false
                return this._state
            }
            default: {
                return this._state
            }
        }
    },
    // increaseCount() {
    //     this._state.counter += 1
    // },
    // resetCount() {
    //     this._state.counter = this._state.startVal
    // },
    // changeMaxVal(value: string) {
    //     const maxVal = +value
    //     this._state.isSettings = true
    //     maxVal <= this._state.startVal ? this._state.isError = true : this._state.isError = false
    //     this._state.maxVal = maxVal
    // },
    // changeStartVal(value: string) {
    //     const startVal = +value
    //     this._state.isSettings = true
    //     startVal < 0 ? this._state.isError = true : this._state.isError = false
    //     this._state.maxVal = startVal
    // },
    // setChanges() {
    //     this._state.counter = this._state.startVal
    //     this._state.isSettings = false
    // },
    subscriber(observer) {
        this._subscriber = observer
    }

}

type ActionDispatchType =
    IncreaseCountACType
    | ResetCountACType
    | ChangeMaxValACType
    | ChangeStartValACType
    | SetChangesType

type IncreaseCountACType = ReturnType<typeof increaseCountAC>
export const increaseCountAC = () => {
    return {
        type: 'INCREASE_COUNT',
        payload: {}
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
export const changeMaxValAC = (value: string) => {
    return {
        type: 'CHANGE_MAX_VAL',
        payload: {
            value
        }
    } as const
}
type ChangeStartValACType = ReturnType<typeof changeStartValAC>
export const changeStartValAC = (value: string) => {
    return {
        type: 'CHANGE_START_VAL',
        payload: {
            value
        }
    } as const
}
type SetChangesType = ReturnType<typeof setChangesAC>
export const setChangesAC = () => {
    return {
        type: 'SET_CHANGES',
        payload: {}
    } as const
}