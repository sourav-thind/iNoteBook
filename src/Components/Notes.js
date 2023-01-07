import React, { useEffect,useContext, useState, useRef } from 'react'
import NoteContext from '../Context/notes/NoteContext'
import AddNote from './AddNote';
import NoteItem from './NoteItem';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
    let navigate = useNavigate();
    const context = useContext(NoteContext);
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        if(localStorage.getItem('token')){
        getNotes();
    }
    else{
      navigate('/login')
    }
 //getNotes();
    // eslint-disable-next-line
    }, [])

    //modal functioning
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    /////////////////////////////////

    const ref = useRef(null);
    const [note, setnote] = useState({id:"", etitle: "", edescription: "", etags: "" })
    const updateNote = (currentNote) => {
        ref.current.click();
        setnote({id:currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etags: currentNote.tags });
     
    }

    const handleClick = (e) => {
        editNote(note.id , note.etitle, note.edescription, note.etags);
        handleClose();
        props.showAlert("Note Updated Succesfully", "success");
    }

    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AddNote showAlert={props.showAlert}/>
            <Button ref={ref} variant="primary" className="d-none" onClick={handleShow}>Launch demo modal</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="mx-5">
                <div className="mb-3 ">
                    <input type="hidden" className="form-control" name="id" id="id" value={note.id} aria-describedby="emailHelp"/>
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" name="etitle" id="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength="5" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="edescription" value={note.edescription} name="edescription" onChange={onChange} minLength="5" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tags</label>
                    <input type="text" className="form-control" id="etags" name="etags" value={note.etags} onChange={onChange} minLength="5" required/>
                </div>
                
            </form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Close</Button>
          <Button disabled={note.etitle.length<5 || note.edescription.length<5} variant="primary" onClick={handleClick}> Save Changes</Button>
        </Modal.Footer>
      </Modal>

            <div className="row my-3">
                <h1>Your Notes</h1>
                {notes.map((note) => {
                    return <NoteItem key={note._id} showAlert={props.showAlert} updateNote={updateNote} note={note} />;
                })}
            </div>
        </>

    )
}

export default Notes
