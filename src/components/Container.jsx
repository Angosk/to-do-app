import React, { useState } from "react";
import FormToDo from './FormToDo';
import TaskLis from './TaskList';

const Container = () => {
    const [list, setList] = useState([]);
    const addItem = addItem => {
        setList([...list, addItem])
    };
    return (
        <div>
           Task for to do!
           <FormToDo addItem = {addItem}/>
           <TaskLis list = {list} setList = {setList}/>
        </div>
    );
}

export default Container;