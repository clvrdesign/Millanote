import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Note from '../../components/Note/Note';

function Home() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/notes')
      .then(response => {
        setNotes(response.data);
        setLoading(false); // Set loading to false after notes are fetched
      })
      .catch(error => {
        console.error('Error fetching notes:', error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  const handleDeleteNote = (id) => {
    // Filter out the note with the given id
    setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
    axios.delete(`http://localhost:3000/notes/${id}`)
  };

  return (
    <>
      <Navbar />
      <div className="container m-auto min-h-[80vh] flex items-center justify-center px-4 py-20">
        <div className="h-full w-full flex flex-col items-center justify-center">
          {loading ? (
            <div className="animate-spin inline-block w-10 h-10 border-t-2 border-sky-500 rounded-full"></div>
          ) : (
            notes.length > 0 ? (
              <>
                <h1 className="text-2xl text-slate-700 font-bold py-10">
                  All Notes
                </h1>
                <div className="w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
                  {notes.map(note => (
                    <Note
                      key={note._id} // Ensure each Note has a unique key
                      title={note.title}
                      content={note.content}
                      category={note.category}
                      date={note.date} // Assuming `date` exists; adjust if different
                      deleteNote={() => handleDeleteNote(note._id)}
                    />
                  ))}
                </div>
              </>
            ) : (
              <p>No notes available</p>
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
