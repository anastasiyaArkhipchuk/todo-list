import React from "react";
import {TaskType} from "./App";
import {Button} from "./Button";

type TodolistPropsType = {
    title: string
    task: Array<TaskType>
}

export const Todolist = ({title, task}: TodolistPropsType) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title={"+"}/>
            </div>
            {task.length === 0 ?
                (<p>Тасок нет</p>) :
                (<ul>
                    {task.map(t => {
                        return (
                            <li>
                                <input type="checkbox" checked={t.isDone}/>
                                <span>{t.title}</span>
                            </li>
                        )
                    })}
                </ul>)}
            <div>
                <Button title={"All"}/>
                <Button title={"Active"}/>
                <Button title={"Completed"}/>
            </div>
        </div>
    )
}

