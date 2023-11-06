type StateType = {
    counter: number
    maxVal: number
    startVal: number
    isError: boolean
    userMessage: null | string
}

export type StoreType = {
    _state: StateType
    getState: ()=> StateType
    increaseCount: ()=> void
    changeMaxVal: ()=> void
}

export const store: StoreType = {
    _state: {
        counter: 0,
        maxVal: 5,
        startVal: 0,
        isError: false,
        userMessage: null
    },
    getState() {
        return this._state
    },
    increaseCount() {
        this._state.counter +=1
    },
    changeMaxVal() {},

}