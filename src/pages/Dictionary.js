import { Navbar } from "../components/Navbar";
import { database } from "../services/Firebase";
import {
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import React, { useEffect, useState } from "react";

export const Dictionary = function () {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateTaskId, setupdateTaskId] = useState("");

  useEffect(() => {
    const db_ref = ref(database, "/tasks");
    onValue(db_ref, (snapshot) => {
      // console.log("snapshot", snapshot);
      console.log("value", snapshot.val());
      //print all values
      for (let key in snapshot.val()) {
        console.log(snapshot.val());
        const data = snapshot.val();
        console.log("value", snapshot.val()[key]);
        const taskArray = [];
        for (let id in data) {
          taskArray.push({ id, ...data[id] });
        }
        console.log("taskArray", taskArray);
        setTasks(taskArray);
      }
    });
  }, []);

  function addTask(event) {
    event.preventDefault();
    const db_ref = ref(database, "/tasks");
    push(db_ref, {
      title: task,
    });
  }

  function handleDelete(id,e) {
    const db_ref = ref(database, `/tasks/${id}`);
    remove(db_ref);
 }

  function handleUpdate(id) {
    setupdateTaskId(id);
  }

  function handleChange(id, newTitle) {
    const db_ref = ref(database, `/tasks/${id}`);
    set(db_ref, {
      title: newTitle,
    });
    setupdateTaskId("");
  }
  return (
    <div className="App">
      <Navbar />
      <h1>Todo List</h1>
      <form>
        <input
          type="text"
          onChange={(event) => {
            setTask(event.target.value);
          }}
          defaultValue={task}
        />
        <button onClick={addTask} type="submit">
          Add Todo
        </button>
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                {task.title}
                {updateTaskId === task.id ? (
                  <div>
                    <input
                      type={"text"}
                      defaultValue={"..."}
                      onChange={function (event) {
                        handleChange(task.id, event.target.value);
                      }}
                    />
                    <button
                      type={"submit"}
                      onClick={function (e) {
                        e.preventDefault(); 
                        setupdateTaskId("");
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      type={"submit"}
                      onClick={function (e) {
                        e.preventDefault();
                        handleUpdate(task.id);
                      }}
                    >
                      Edit
                    </button>

                    <button
                      onClick={function (e) {
                        handleDelete(task.id, e);
                      }}
                      type="submit"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
};
