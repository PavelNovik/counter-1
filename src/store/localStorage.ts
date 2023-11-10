export const setLocalStorage = (key: string, value: number): void => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getFromLocalStorage = (key: string): number | undefined => {
    const item = localStorage.getItem(key)
    return item? +item : undefined
}