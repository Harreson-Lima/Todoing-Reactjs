import React from "react";
import Card from "./Card";

function DoneImg(props) {
    let done = <img src="./assets/caixa-de-selecao.svg" alt="done" />;
    let undone = <img src="./assets/quadrado.svg" alt="undone" />;
    return props.done ? done : undone;
}

function ListItem(props) {
    
    return (
        <li>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div className="btns">
                    <button onClick={() => {props.onDone(props.item)}}>
                        <DoneImg done={props.item.done}></DoneImg>
                    </button>
                    <button onClick={() => props.onDeleteItem(props.item)}><img src="./assets/lixo.svg" alt="delete"/>
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default ListItem;
