import React, {useState} from "react";
import TodoForm from "./components/TodoForm";
import Modal from "./components/Modal";
import List from "./components/List";
import "./Todo.css";

// Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import listReducer from "./reducers/listReducer";
import {loadState, persistitState } from "./components/persistitDatas";


const store = createStore(listReducer, loadState());

store.subscribe(() => {
    persistitState(store.getState());
})

function Todo() {
    document.title = "ToDoing App";
    const [showModal, setShowModal] = useState(false);

    function onHideModal() {
        setShowModal(false)
    }
    
    return (
        <Provider store={store}>
            <div className="container">

                <header><h1>ToDoing</h1> <button className="addButton" onClick={()=>{setShowModal(true)}}>+</button></header>

                <List></List>

                <Modal show={showModal} onHideModal={onHideModal}>
                    <TodoForm onHideModal={onHideModal}></TodoForm> 
                </Modal>
            </div>
        </Provider>
    );
}

export default Todo;
