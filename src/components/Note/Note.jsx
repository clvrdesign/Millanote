import PropTypes from 'prop-types';

const Note = ({ title, content,category, date, deleteNote, setNoteId }) => {
  return (
    <div className="bg-slate-100 py-8 px-5 rounded-lg hover:bg-slate-200 ease-out duration-75 cursor-default">
      <h3 className='text-xl font-bold leading-6 text-slate-700'>{title}</h3>
      <small className='block text-slate-500 my-1'><i className='bi bi-clock'></i> {date}</small>
      <p className='text-[15px] text-slate-700 py-3'>{content}</p>
      <small className='block text-slate-500 my-3'>{category}</small>
      <div className="flex flex-col lg:flex-row gap-2">
         <button className='bg-sky-500 hover:bg-slate-500 ease-out duration-150 text-slate-50 w-full p-2 rounded-md' onClick={setNoteId}>Edit</button>
         <button className='bg-slate-300 hover:bg-red-500 hover:text-slate-100 ease-out duration-150 text-slate-700 w-full p-2 rounded-md' onClick={deleteNote}>Delete</button>
      </div>
     </div>
  );
};

Note.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  deleteNote: PropTypes.func.isRequired,
  setNoteId: PropTypes.func.isRequired
};

export default Note;
