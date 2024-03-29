import React ,{useContext ,useState} from 'react'
import NoteContext from '../Context/notes/NoteContext';

const AddNote = (props) => {
    const context = useContext(NoteContext);
    const { addNote } = context;
    const [note, setnote] = useState({title:"" , description: "" , tags: ""})
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tags);
        setnote({title:"" , description: "" , tags: ""});
        props.showAlert("Note Addded Succesfully", "success");
    }
    const onChange =(e) => {
        setnote({ ...note, [e.target.name] : e.target.value})
    }

  return (

    
    <div>
      <h1 className='mt-2'>Add a Note</h1>
    <form className="mx-5">
  <div className="mb-3 ">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className={`form-control ${note.title.length > 0 && note.title.length < 5 ? 'is-invalid' : ''}`} name="title" id="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength="5" required/>
    {note.title.length > 0 && note.title.length < 5 && <div className="invalid-feedback">Title must be at least 5 characters long.</div>}
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className={`form-control ${note.description.length > 0 && note.description.length < 5 ? 'is-invalid' : ''}`} id="description" name="description" value={note.description} onChange={onChange} minLength="5" required/>
    {note.description.length > 0 && note.description.length < 5 && <div className="invalid-feedback">Description must be at least 5 characters long.</div>}
    
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Tags</label>
    <input type="text" className="form-control" id="tags" name="tags" value={note.tags} onChange={onChange} minLength="5" required/>
  </div>
  
  <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
    </div>
  )
}

export default AddNote
