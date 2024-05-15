import {ADD_TASK, DELETE_TASK, UPDATE_PAGINATION, UPDATE_TASK} from "./constants";

export const actionAddTask = (value) => {
    return {type: ADD_TASK, value}
}

export const updateTask = (id, task) => {
    return {type: UPDATE_TASK, id, task}
}

export const actionDeleteTask = (id) => {
    return {type: DELETE_TASK, id}
}

export const actionPagination = (opts) => {
    return {type: UPDATE_PAGINATION, ...opts}
}