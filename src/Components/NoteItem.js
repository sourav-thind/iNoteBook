import React , {useContext} from 'react';
import NoteContext from '../Context/notes/NoteContext';

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
      const  {note, updateNote } = props;
  return (
    <>
    <div className="col md-3  ">
    <div className="card my-3" style={{width:'18em'}}>
  <div className="card-body  " >
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {note.tags}</span>
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <button onClick={()=>{updateNote(note)}} type="button" className="btn btn-primary btn-sm mx-3" >Edit</button>
    <button type="button" className="btn btn-danger btn-sm mx-3 " onClick={()=>{deleteNote(note._id); props.showAlert("Note Deleted Succesfully", "danger");}}>Delete</button>
    </div>
  </div>
  </div>

    </>
    
  )
}

export default NoteItem
