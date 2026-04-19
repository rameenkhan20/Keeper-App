import React from "react";

function CreateArea(Props) {

  return (
    <div>
      <form>
        <input onChange={Props.addText} name="title" placeholder="Title" value={Props.title} />
        <textarea onChange={Props.addText} name="content" placeholder="Take a note..." rows="3" value={Props.content} />
        <button onClick={Props.addNoteHandler} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
