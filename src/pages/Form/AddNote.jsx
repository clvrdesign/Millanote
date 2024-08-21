import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import {api} from '../../../apiEndpoint'


function AddNote() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};

    // Check if title is empty
    if (formData.title.trim() === '') {
      formErrors.title = 'Title is required';
    } else if (formData.title.length > 100) {
      formErrors.title = 'Title should not exceed 100 characters';
    }

    // Check if content is empty
    if (formData.content.trim() === '') {
      formErrors.content = 'Content is required';
    }

    // Check if category is empty
    if (formData.category.trim() === '') {
      formErrors.category = 'Tag is required';
    } else if (!/^[a-zA-Z0-9]+$/.test(formData.category)) {
      formErrors.category = 'Tag should be alphanumeric';
    }

    setErrors(formErrors);

    // If no errors, return true
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (validateForm()) {
      axios.post(api.dev, formData)
        .then((response) => {
          console.log('Response:', response);
          console.log('Note created successfully!');
          navigate('/');
        })
        .catch((error) => {
          console.error(error.message);
          setErrors({ submit: 'Error creating note. Please try again later.' });
        });
    }

    console.log(formData)
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center m-4">
        <form className="w-96 mx-auto mt-20" onSubmit={handleSubmit}>
          <h1 className="mb-10 text-4xl text-center text-slate-700 font-bold">Create</h1>
          
          {/* Display form submission error */}
          {errors.submit && (
            <div className="block bg-red-50 py-2 px-3 mb-4 border border-red-300">
              <small>{errors.submit}</small>
            </div>
          )}
          
          {/* Title Input */}
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
          

          {/* Content Input */}
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
          

          {/* Category Input */}
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
            Create
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default AddNote;
