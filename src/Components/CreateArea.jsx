import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [isDone , setIsDone] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function eventHandler(){
    setIsDone(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isDone ? (
          <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        ) : null}
        <textarea
          name="content"
          onClick={eventHandler}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={!isDone ? "1" : "4"}
        />
        <Zoom in={!isDone ? false : true}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
