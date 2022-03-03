import React from "react";
import { useDispatch } from "react-redux";
import Card from "./Card";
import {deleteItem, changeDone} from '../actions/listActions'

function DoneImg(props) {
    let done = <img src="./assets/caixa-de-selecao.svg" alt="done" />;
    let undone = <img src="./assets/quadrado.svg" alt="undone" />;
    return props.done ? done : undone;
}


function ListItem(props) {
    const dispatch = useDispatch()
    return (
        <li>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div className="btns">
                    <button onClick={() => dispatch(changeDone(props.item.id))}>
                        <DoneImg done={props.item.done}></DoneImg>
                    </button>
                    <button onClick={() => dispatch(deleteItem(props.item.id))}><img src="./assets/lixo.svg" alt="delete"/>
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default ListItem;
