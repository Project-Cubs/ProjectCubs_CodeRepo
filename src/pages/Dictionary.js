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
  const [word, setWord] = useState("");
  const [words, setWords] = useState([]);
  const [updateWordId, setupdateWordId] = useState("");

  useEffect(() => {
    const db_ref = ref(database, "/words");
    onValue(db_ref, (snapshot) => {
      // console.log("snapshot", snapshot);
      console.log("value", snapshot.val());
      //print all values
      for (let key in snapshot.val()) {
        console.log(snapshot.val());
        const data = snapshot.val();
        console.log("value", snapshot.val()[key]);
        const wordArray = [];
        for (let id in data) {
          wordArray.push({ id, ...data[id] });
        }
        console.log("wordArray", wordArray);
        setWords(wordArray);
      }
    });
  }, []);

  function addWord(event) {
    event.preventDefault();
    const db_ref = ref(database, "/words");
    push(db_ref, {
      title: word,
    });
  }

  function handleDelete(id,e) {
    const db_ref = ref(database, `/words/${id}`);
    remove(db_ref);
 }

  function handleUpdate(id) {
    setupdateWordId(id);
  }

  function handleChange(id, newTitle) {
    const db_ref = ref(database, `/words/${id}`);
    set(db_ref, {
      title: newTitle,
    });
    setupdateWordId("");
  }
  return (
    <div className="App">
      <Navbar />
      <h1>Bookmark</h1>
      <form>
        <input
          type="text"
          onChange={(event) => {
            setWord(event.target.value);
          }}
          defaultValue={word}
        />
        <button onClick={addWord} type="submit">
          Add Word
        </button>
        <ul>
          {words.map((word) => {
            return (
              <li key={word.id}>
                {word.title}
                {updateWordId === word.id ? (
                  <div>
                    <input
                      type={"text"}
                      defaultValue={"..."}
                      onChange={function (event) {
                        handleChange(word.id, event.target.value);
                      }}
                    />
                    <button
                      type={"submit"}
                      onClick={function (e) {
                        e.preventDefault(); 
                        setupdateWordId("");
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
                        handleUpdate(word.id);
                      }}
                    >
                      Edit
                    </button>

                    <button
                      onClick={function (e) {
                        handleDelete(word.id, e);
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
