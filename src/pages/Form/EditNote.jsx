import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { api } from '../../../apiEndpoint';

function EditNote() {
  const { id } = useParams();  // Destructure to get the note ID
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Fetch the existing note data by ID and populate the form
    axios.get(`${api.dev}/${id}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching note:', error._errors);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};

    if (formData.title.trim() === '') {
      formErrors.title = 'Title is required';
    } else if (formData.title.length > 100) {
      formErrors.title = 'Title should not exceed 100 characters';
    }

    if (formData.content.trim() === '') {
      formErrors.content = 'Content is required';
    }

    if (formData.category.trim() === '') {
      formErrors.category = 'Tag is required';
    } else if (!/^[a-zA-Z0-9]+$/.test(formData.category)) {
      formErrors.category = 'Tag should be alphanumeric';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      axios.patch(`${api.dev}/${id}`, formData)
        .then((response) => {
          console.log('Response:', response);
          console.log('Note updated successfully!');
          navigate('/');
        })
        .catch((error) => {
          console.error('Error updating note:', error);
          setErrors({ submit: 'Error updating note. Please try again later.' });
        });
    }

    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center m-4">
        
        <form className="w-96 mx-auto mt-20" onSubmit={handleSubmit}>
          <h1 className="mb-10 text-4xl text-center text-slate-700 font-bold">Edit Note</h1>
          
          {errors.submit && (
            <div className="block bg-red-50 py-2 px-3 mb-4 border border-red-300">
              <small>{errors.submit}</small>
            </div>
          )}
          
          {errors.title && (
            <small className="text-red-500">{errors.title}</small>
          )}
          <input
            className={`bg-slate-100 border ${errors.title ? 'border-red-300' : 'border-slate-200'} text-slate-700 text-sm w-full p-2 focus:outline-none focus:border-sky-500 rounded-md mb-4`}
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
          />
          
          {errors.content && (
            <small className="text-red-500">{errors.content}</small>
          )}
          <textarea
            className={`bg-slate-100 border ${errors.content ? 'border-red-300' : 'border-slate-200'} text-slate-700 text-sm w-full min-h-20 p-2 focus:outline-none focus:border-sky-500 rounded-md mb-4`}
            name="content"
            id="content"
            placeholder="Note"
            value={formData.content}
            onChange={handleChange}
          ></textarea>

          {errors.category && (
            <small className="text-red-500">{errors.category}</small>
          )}
          <input
            className={`bg-slate-100 border ${errors.category ? 'border-red-300' : 'border-slate-200'} text-slate-700 text-sm w-full p-2 focus:outline-none focus:border-sky-500 rounded-md mb-4`}
            type="text"
            name="category"
            id="category"
            placeholder="Tag"
            value={formData.category}
            onChange={handleChange}
          />
          
          <button className="bg-sky-500 text-slate-100 w-full p-2 focus:outline-none focus:border-sky-500 rounded-md mb-4 text-sm" type="submit">
            Update
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default EditNote;
