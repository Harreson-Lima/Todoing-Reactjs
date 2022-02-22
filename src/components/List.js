import React from "react";
import ListItem from "./ListItem";


function List(props) {
    return (
        <ul className="list">
            {props.items.map((item) => {return <ListItem key={item.id} onDone={props.onDone} onDeleteItem={props.onDeleteItem} item={item}></ListItem>})}
        </ul>
    );
}

export default List;
