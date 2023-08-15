
import React from 'react'

//Context...Component
import { useTodoContext } from "./Todo"
//Utils..
import { generateId } from '../../../utils/generateId';

    

export function FormTask() {

    let { task, onChange, handleAddTask } = useTodoContext();

    return (
        <section className='task-box-2' key={ generateId }>
            <form className='task-form ' onSubmit={() => { } }>
                <input
                    className="task-form-input"
                    type='text'
                    placeholder=' Terea...'
                    value={task}
                    onChange={(e) => { onChange(e); } } />
                <button
                    className='task-form-btn-add  task-btns '
                    onClick={(e) => { handleAddTask(e); } }>Add
                </button>
            </form>

        </section>
    );
}
