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
        // Set loading to false whether notes are found or not
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching notes:', error);
        // Ensure loading is stopped even if there's an error
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container m-auto min-h-[80vh] flex items-center justify-center px-4 py-20">
        <div className="h-full flex items-center justify-center">
          {loading ? (
            <div className="animate-spin inline-block w-10 h-10 border-t-2 border-sky-500 rounded-full"></div>
          ) : (
            notes.length > 0 ? (
              <>
              
                <h1 className="text-2xl text-slate-700 font-bold py-10">
                  All Notes
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
                  {notes.map(note => (
                    <Note
                      key={note._id} // Ensure each Note has a unique key
                      title={note.title}
                      content={note.content}
                      category={note.category}
                      date={note.date} // Assuming `date` exists; adjust if different
                    />
                  ))}
                </div></>
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
