import { useState } from 'react'
import PropTypes from 'prop-types';

const Note = ({ title, content,category, date, deleteIcon, deleteNote, editNote }) => {
  const [option, setOption] = useState(false)

  const showOption = () =>{
    setOption(!option)
  }
  return (
    <div className="relative bg-slate-100 py-8 px-5 rounded-lg hover:bg-slate-200 ease-out duration-75 cursor-default overflow-hidden">
      <i onMouseDown={showOption} className="absolute top-3 right-2 bi bi-three-dots-vertical bg-slate-300 text-slate-600 rounded-full py-1 cursor-pointer"></i>
      <h3 className='text-xl font-bold leading-6 text-slate-700'>{title}</h3>
      <small className='block text-slate-500 my-1'><i className='bi bi-clock'></i> {date}</small>
      <p className='text-[15px] text-slate-700 py-3'>{content}</p>
      <small className='block text-sky-500 my-3'>#{category}</small>
      {option &&
      <div className="absolute bottom-2 right-2 flex flex-col lg:flex-row gap-2">
         <button className='bg-sky-500 hover:bg-slate-500 ease-out duration-150 text-slate-50 w-10 p-2 rounded-md' onClick={editNote}>
         <i className='bi bi-pencil-square'></i>
         </button>
         <button className='bg-slate-300 hover:bg-red-500 hover:text-slate-100 ease-out duration-150 text-slate-700 w-10 p-2 rounded-md' onClick={deleteNote}>
          {deleteIcon}
         </button>
      </div>
      }
     </div>
  );
};

Note.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  deleteIcon: PropTypes.node.isRequired,
  deleteNote: PropTypes.func.isRequired,
  editNote: PropTypes.func.isRequired
};

export default Note;
