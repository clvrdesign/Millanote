import moment from 'moment';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Note from '../../components/Note/Note';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../apiEndpoint'

function Home() {
  const navigate = useNavigate(); // Use the navigate hook
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    axios.get(api.dev)
      .then(response => {
        setNotes(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching notes:', error);
        setLoading(false);
      });
  }, []);

  const handleDeleteNote = (id) => {
    setDeleting(true);
    axios.delete(`${api.dev}/${id}`)
      .then(() => {
        // Update the state after successful deletion
        setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
        setDeleting(false);
      })
      .catch(error => {
        console.error('Error deleting note:', error);
      });
  };

  const handleEditNote = (id) => {
    navigate(`/edit-note/${id}`); // Use the navigate function
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
                      key={note._id}
                      title={note.title}
                      content={note.content}
                      category={note.category}
                      date={moment(note.date).format('MMMM D, YYYY ・ HH:mm')}
                      deleteNote={() => handleDeleteNote(note._id)}
                      editNote={() => handleEditNote(note._id)}
                      deleteIcon={
                        deleting ? (
                          <i className="bi bi-trash-fill"></i>
                        ) : (
                          <i className="bi bi-trash"></i>
                        )
                      }
                    />
                  ))}



                </div>
              </>
            ) : (
              <p className='bg-sky-50 lg:py-10 py-5 lg:px-20 px-10 flex gap-5 flex-col justify-center items-center text-center rounded-xl border border-sky-100'>
                <i className="bi bi-info-circle text-3xl"></i>
                Your notes will be displayed here
              </p>
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
