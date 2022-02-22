import React, { useState } from "react";

function TodoForm(props) {
    const [text, setText] = useState("");

    function handleText(e) {
        setText(e.target.value);
    }

    function addItem(e) {
        e.preventDefault();
        if (text) {
            props.onAddItem(text);
            setText("");
        }
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
            <button onClick={addItem}>Add</button>
        </form>
    );
}

export default TodoForm;
