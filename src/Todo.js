import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import Modal from "./components/Modal";
import List from "./components/List";
import Item from "./components/Item";
import "./Todo.css";

const SAVED_ITEMS = "savedItems";

function Todo() {
    document.title = "ToDoing App";
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if(savedItems){
            setItems(savedItems);
        }
    },[])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    },[items])

    function onAddItem(text) {
        let newItem = new Item(text);
        setItems([...items, newItem]);
        onHideModal();
    }

    function onDeleteItem(item) {
        let filteredItems = items.filter((it) => it.id !== item.id);
        setItems(filteredItems);
    }

    function onDone(item) {
        let updatedItems = items.map((it) => {
            if (it.id === item.id) {
                it.done = !it.done;
            }
            return it;
        });
        setItems(updatedItems);
    }

    function onHideModal() {
        setShowModal(false)
    }
    
    return (
        <div className="container">

            <header><h1>ToDoing</h1> <button className="addButton" onClick={()=>{setShowModal(true)}}>+</button></header>

            

            <List onDone={onDone} onDeleteItem={onDeleteItem} items={items}></List>

            <Modal show={showModal} onHideModal={onHideModal}>
                <TodoForm onAddItem={onAddItem}></TodoForm> 
            </Modal>
        </div>
    );
}

export default Todo;
