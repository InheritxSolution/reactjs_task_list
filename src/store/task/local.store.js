

const STORE_KEY = "TASK___LIST"

export const setTaskLocalStore = (items = []) => {
    localStorage.setItem(STORE_KEY, JSON.stringify(items))
}

export const getTaskLocalStore = () => {
    let items = []
    const data = localStorage.getItem(STORE_KEY)
    if (data) {
        try {
            const list = JSON.parse(data)
            if (list && Array.isArray(list)) {
                items = Object.assign([], list)
            }
        } catch (e) {
            items = []
        }
    }
    return items
}