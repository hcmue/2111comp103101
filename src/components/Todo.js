import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';


// Arrow Function components
export const ToDoList = () => {
    const { data } = useContext(TodoContext);

    return (
        <div>
            <h2>TODO LIST</h2>
            {data.map((item) => {
                //process js

                return (
                    <div>
                        {item.name} - {item.deadline} : { item.isCompleted ? 'DONE' : 'IN-PROGRESS'}
                    </div>
                )
            })}
        </div>
    )
};
