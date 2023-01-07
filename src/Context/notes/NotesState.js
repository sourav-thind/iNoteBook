import React , {useState} from "react";
import NoteContext from "./NoteContext";

const NoteState=(props)=>{
    const host = "http://localhost:5000"

    const notesInitial =[]

    const [notes, setNotes] = useState(notesInitial)

    //get all notes
    const getNotes = async ()=>{

 
           const response = await fetch(`${host}/api/notes/fetchallnotes`, {
             method: 'GET', 
             headers: {
               'Content-Type': 'application/json',
               'auth-token' : localStorage.getItem('token')
             },
             
           });
           
           const json = await response.json();
           setNotes(json);
           return json;
     }
  
    //add a note 
    const addNote = async (title, description , tags)=>{
          const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              "auth-token" : localStorage.getItem('token')
            },
            
            body: JSON.stringify({title,description,tags})
          });
          
          const json = await response.json();
          const  note= json;
          setNotes(notes.concat(note));
           return json;

    }

    //delete a note
    const deleteNote = async (id) => {
        console.log("deleting the note with id" + id);
            const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
              method: 'DELETE', 
              headers: {
                'Content-Type': 'application/json',
                'auth-token' : localStorage.getItem('token')
              },
              
            });
            const json = await response.json();
            const newNotes = notes.filter((note)=>{return note._id !== id});
             setNotes(newNotes);
             props.showAlert("Note Updated Succesfully", "success");
             return json;

     
        }

    //edit a note 
    let editedNotes =JSON.parse(JSON.stringify(notes));
    const editNote = async (id, title, description , tags) =>{
        for (let index = 0; index < editedNotes.length; index++) {
            const element = editedNotes[index];
            if(element._id === id){
              editedNotes[index].title = title;
              editedNotes[index].description = description;
              editedNotes[index].tags = tags;
              break;
            }
            setNotes(editedNotes);
        }
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT', 
            headers: {
              'Content-Type': 'application/json',
              "auth-token" : localStorage.getItem('token')
            },
            
            body: JSON.stringify({title,description,tags})
          });
          const json = await response.json();
           return json;
        

    }
   
    return(

        <NoteContext.Provider value ={{notes , addNote, deleteNote, editNote,getNotes}}>
            {props.children}
              </NoteContext.Provider>
    )
}
export default NoteState;