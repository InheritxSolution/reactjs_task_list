import {PlusIcon} from "../components/svg.icon";
import {useState} from "react";
import {actionAddTask} from "../store/task/actions";
import {useDispatch} from "react-redux";
import {classNames} from "../components/helper";


const InputControls = () => {
    const dispatch = useDispatch()

    const [state, setState] = useState({
        valid: true,
        submit: false,
        value: "",
    })

    const updateState = (arg = {}) => setState(preState => ({ ...preState, ...arg }))

    const addTask = () => {
        let value = (state.value || "").trim()
        if (value === "") {
            updateState({valid: false, submit: true})
            return
        }

        dispatch(actionAddTask(value))
        updateState({value: "", valid: true, submit: false})
    }

    return (<div className={"input-group"}>
        <input
            type={"text"}
            placeholder={"Type task name"}
            className={classNames("input-control", {
                "input-success": state.submit && state.valid,
                "input-error": state.submit && !state.valid
            })}
            value={state.value}
            onChange={(e) => {
                const _update = {
                    value: e.target.value
                }
                if (!state.valid)
                    _update.valid = true

                updateState(_update)

            }}
            onKeyUp={(e) => {
                const isEnter = (e.key === "Enter" || e.keyCode === 13)
                isEnter && addTask()
            }}
        />
        <button className={"submit-btn"} onClick={() => addTask()}>
            <PlusIcon size={15}/> Add
        </button>
    </div>)
}

export default InputControls