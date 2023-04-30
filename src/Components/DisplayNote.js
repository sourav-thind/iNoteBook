import React, {useContext} from 'react'
import NoteContext from '../Context/notes/NoteContext'
import NoteItem from './NoteItem';
const DisplayNote = ({key, showAlert, updateNote }) => {
    const context = useContext(NoteContext);
    const {notes} = context;
  return (
    <div>
      { notes.map((note) => {
                    return <NoteItem key={key} showAlert={showAlert} updateNote={updateNote} note={note} />
                })}
    </div>
  )
}

export default DisplayNote
