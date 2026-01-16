import DelButton from "./DelButton"

const TodoInfo = (props) => {
    const {
        total,
        done,
    } = props

    return (
        <div className="todo__info">
            <div className="todo__total-tasks">Total tasks: <span>0</span></div>
            <DelButton />
        </div>
    )
}

export default TodoInfo