import React  , {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

//used computed property name
//learnt about leveling up to the closest ancestor!
//state lift up pattern

function App() {
  const [note , setNote] = useState({
    title: "",
    content: ""
  });

  const [newNote , setNewNote] = useState([]);

  function noteData(event){
    const {value , name} = event.target;
    setNote(prev => {
      return {...prev, [name]: value}
    })
  }

  function addNote(event){
    event.preventDefault();
    setNewNote(prev => {
      return [...prev , note]
    });
    setNote({
      title: "",
      content: ""
    });
  }

  function deleteNote(id){
    setNewNote((prev) => {
      return prev.filter((currentNote, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea title={note.title} content={note.content} addText={noteData} addNoteHandler={addNote}  />
      {newNote.map((thisNote , index) => {
        return <Note key={index} id={index} title={thisNote.title} content={thisNote.content} noteDeletion={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;
