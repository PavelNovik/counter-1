type StateType = {
    counter: number
    maxVal: number
    startVal: number
    isSettings: boolean
    isError: boolean
    userMessage: null | string
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    increaseCount: () => void
    resetCount: () => void
    changeMaxVal: (value: string) => void
    changeStartVal: (value: string) => void
    setChanges: ()=> void
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
    getState() {
        return this._state
    },
    increaseCount() {
        this._state.counter += 1
    },
    resetCount() {
        this._state.counter = this._state.startVal
    },
    changeMaxVal(value: string) {
        const maxVal = +value
        this._state.isSettings = true
        maxVal <= this._state.startVal ? this._state.isError = true : this._state.isError = false
        this._state.maxVal = maxVal
    },
    changeStartVal(value: string) {
        const startVal = +value
        this._state.isSettings = true
        startVal < 0 ? this._state.isError = true : this._state.isError = false
        this._state.maxVal = startVal
    },
    setChanges() {
        this._state.counter = this._state.startVal
        this._state.isSettings = false
    }

}