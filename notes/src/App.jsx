import { useState, useEffect } from "react";
import Note from './components/note';
import axios from 'axios';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  const hook = () => {
    console.log('effect');
    axios
      .get('http://localhost:3001/notes/')
      .then(response => {
        console.log('promise fulfilled');
        setNotes(response.data);
      })
  };

  useEffect(hook, []);

  console.log('render', notes.length, 'notes')

  const addNote = event => {
    event.preventDefault();

    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    setNotes(notes.concat(noteObject));
    setNewNote('');
  };

  const handleNoteChange = event => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const noteToShow = showAll
    ? notes
    : notes.filter(note => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {noteToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input type="text"
          value={newNote}
          onChange={handleNoteChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;