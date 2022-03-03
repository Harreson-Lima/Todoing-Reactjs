import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addItem} from '../actions/listActions';

function TodoForm(props) {
    const [text, setText] = useState("");
    const dispatch = useDispatch()
    function handleText(e) {
        setText(e.target.value);
    }

    function addItemEvent(e) {
        e.preventDefault();
        if (text) {
            dispatch(addItem(text))
            setText("");
        }
        props.onHideModal()
    }

    return (
        <form>
            <input
                id="todoText"
                onChange={handleText}
                type="text"
                value={text}
                placeholder="Nova Tarefa"
            />
            <button onClick={addItemEvent}>Add</button>
        </form>
    );
}

export default TodoForm;
