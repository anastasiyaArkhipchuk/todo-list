import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}

function App() {

    const [task, setState] = React.useState<TaskType[]>(
        [{id: 1, title: 'Wash dishes', isDone: true},
        {id: 2, title: 'Wash clothes', isDone: true},
        {id: 3, title: 'Iron clothes', isDone: true}]
    );

    return (
        <div>
            <Todolist
                title={"Home"}
                task={task}
            />
        </div>
    );
}

export default App;
