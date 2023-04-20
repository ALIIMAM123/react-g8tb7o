import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [todos, setTodos] = useState([
    // { id: 1, name: 'Ali', active: false },
    // { id: 2, name: 'Chandra', active: false },
  ]);

  const [newTask, setNewTask] = useState('');
  const [updateTask, setUpdateTask] = useState('');

  // console.log(updateTask, 'updatedTask');

  // add task function
  const addTaskHandler = () => {
    if (newTask) {
      let newId = todos.length + 1;
      let addedNewObj = {
        id: newId,
        name: newTask,
        active: false,
      };
      setTodos([...todos, addedNewObj]);
    }
  };

  // delete task function
  const deleteTodos = (id) => {
    console.log(id, 'id');
    let filteredRemainTodos = todos.filter((each) => each.id != id);
    setTodos(filteredRemainTodos);
  };

  // read task function

  //  Mark task functiom
  const markedTask = (id) => {
    // console.log(id , "marked")
    const marked = todos?.map((each) => {
      if (each?.id === id) {
        return { ...each, active: !each.active };
      }
      return each;
    });
    setTodos(marked);
  };

  // console.log(todos, 'todos');

  // update task function
  const updateTaskFun = (EDIT) => {
    // console.log(id);
    // console.log(EDIT, 'edit');
    setUpdateTask(EDIT);
  };

  const editHandler = (e) => {
    let newObj = {
      id: updateTask.id,
      name: e.target.value,
      active: updateTask.active ? true : false,
    };

    setUpdateTask(newObj);
  };

  // console.log(updateTask, 'xxxx');
  const updateSelectTask = () => {
    const filteredArray = [...todos].filter(
      (each) => each.id !== updateTask.id
    );
    console.log(filteredArray, 'filteredAyyay');
    let singleEditObj = [...filteredArray, updateTask];
    setTodos(singleEditObj);
  };

  return (
    <>
      <div className="main-wrapper-container">
        {/* Update container */}
        <div className="add-container">
          <input type="text" value={updateTask?.name} onChange={editHandler} />
          <button className="btn btn-delete" onClick={updateSelectTask}>
            update
          </button>
          <button className="btn btn-delete">cancel</button>
        </div>

        {/* ADD CONTAINER */}
        <div className="add-container">
          <input type="text" onChange={(e) => setNewTask(e.target.value)} />
          <button className="btn btn-delete" onClick={addTaskHandler}>
            Add
          </button>
        </div>

        {/*  DISPLAY CONTAINER */}
        <div className="mainContainer">
          {todos.length <= 0 ? (
            <p> No Todos found</p>
          ) : (
            <div>
              {todos &&
                todos?.map((each, index) => {
                  return (
                    <div className="eachItemContainer">
                      <div className="item-container">
                        <p className={each?.active ? ' decoration' : 'text'}>
                          {each?.name}
                        </p>
                      </div>
                      <div className="buttonContainer">
                        <button
                          className="btn btn-mark"
                          onClick={() => markedTask(each?.id)}
                        >
                          Mark
                        </button>
                        <button
                          className="btn btn-edit"
                          onClick={() =>
                            updateTaskFun({
                              id: each?.id,
                              name: each?.name,
                              active: each?.active,
                            })
                          }
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-delete"
                          onClick={() => deleteTodos(each?.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
