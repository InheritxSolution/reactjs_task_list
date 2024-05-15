
import {ADD_TASK, DELETE_TASK, UPDATE_PAGINATION, UPDATE_TASK} from "./constants";
import {getTaskLocalStore, setTaskLocalStore} from "./local.store";


export const tasks = (state = {
    list: getTaskLocalStore(),
    page: 1,
    limit: 10,
}, action) => {

    switch (action.type) {

        case UPDATE_PAGINATION:
            if (action.page) {
                state.page = action.page
            }
            if (action.limit) {
                state.limit = action.limit

            }
            return {...state}

        case ADD_TASK:
            if (action.value !== "") {

                state.list.push({
                    id: new Date().getTime(),
                    complete: false,
                    value: action.value
                })
                state.list = Object.assign([], [...state.list]) // @unlink memory ref

                setTaskLocalStore(state.list)  // @sync local store

                return {...state}
            }

            return state

        case UPDATE_TASK:
            if (action.id) {
                const index = state.list.findIndex( c => c.id === action.id)
                if (index >= 0 && action.task) {
                    const prvTask = state.list[index]
                    state.list[index] = {
                        ...prvTask,
                        ...action.task,
                    }

                    state.list = Object.assign([], [...state.list]) // @unlink memory ref

                    setTaskLocalStore(state.list) // @sync local store
                    return {...state}
                }
            }
            return state

        case DELETE_TASK:
            if (typeof action.id !== "undefined" && action.id) {
                const index = state.list.findIndex( c => c.id === action.id)
                if (index >= 0) {
                    state.list.splice(index, 1)

                    state.list = Object.assign([], [...state.list]) // @unlink memory ref

                    setTaskLocalStore(state.list) // @sync local store
                    return {...state}
                }
            }
            return state
        default:
            return state
    }
}
