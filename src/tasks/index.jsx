import {useDispatch, useSelector} from "react-redux";
import {getTasks} from "../store/task/selectors";
import {actionDeleteTask, actionPagination, updateTask} from "../store/task/actions";
import {DeleteIcon} from "../components/svg.icon";
import Pagination from "./pagination";

const Tasks = () => {
    const perPageItems = [10, 20, 50, 100]
    const dispatch = useDispatch()
    const tasks = useSelector(getTasks)

    const taskItems = tasks.items
    const currentPage = tasks.currentPage
    const totalPages = tasks.totalPages
    const totalRecords = tasks.totalRecords
    const limit = tasks.limit

    const handlePageChange = (page) => {
        dispatch(actionPagination({page}))
    };


    return (<div className={"tasks--wrapper"}>
        {taskItems.length > 0 && <>
            <ul>
                {taskItems.map((item, index) => {
                    return <li key={item.id}>
                        <span className={"serial-num"}>{(currentPage - 1) * limit + index + 1}.</span>
                        <input type={"checkbox"} checked={item.complete} onChange={() => {
                            dispatch(updateTask(item.id, {
                                complete: !item.complete
                            }))
                        }}/>
                        <span className={"primary-text"} style={{
                            textDecoration: `${item.complete ? 'line-through' : 'none'}`,
                        }}>{item.value}</span>
                        <button className={"delete-btn"} onClick={() => {
                            dispatch(actionDeleteTask(item.id))
                            if (currentPage > 1 && taskItems.length === 1) {
                                dispatch(actionPagination({
                                    page: currentPage - 1,
                                }))
                            }
                        }}><DeleteIcon color={"#f20"} size={18}/></button>
                    </li>
                })}
            </ul>

            <div className={"pagination-container"}>
                <div className={"limit-controls--group"}>
               <span
                   className={"page-label"}>Showing ({(currentPage - 1) * limit + 1} - {(currentPage - 1) * limit + taskItems.length}) of {totalRecords}</span>

                    <select
                        className={"limit-controls"}
                        value={tasks.limit}
                        onChange={(e) => {
                            dispatch(actionPagination({
                                page: 1,
                                limit: parseInt(e.target.value)
                            }))
                        }}>
                        {perPageItems.map(val => {
                            return <option key={val} value={val}>{val}</option>
                        })}
                    </select>
                </div>

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onChangePages={handlePageChange}
                />
            </div>
        </>}

        {taskItems.length === 0 && <p className={"no-record-label"}>no records available</p>}

    </div>)
}

export default Tasks