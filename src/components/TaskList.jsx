import React from "react";
import Checkbox from "./Checkbox";

const TaskLis = props => {
    const {list, setList} = props;
    const onChangeStatus = e => {
        const {name, checked} = e.target;
        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(updateList)
    };
    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList)
    }
    const checkbox = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
    ));
    return (
        <div className="todo-list">
            {list.length ? checkbox: "Everything looks great here"}
            {list.length ?(
                <p>
                    <button className="button pink" onClick={onClickRemoveItem} >Done</button>
                </p> 
                ) : null}
        </div>
    )
}


export default TaskLis;