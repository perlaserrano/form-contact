import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Validation from '../helpers/Validation';
import { Error } from './Errors';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from './Button';
import { Footer } from './Footer';
// import '../css/styles.css';

const initialFormData = {
  firstname: '',
  lastname: '',
  email: '',
  message: '',
  consent: false,
  query_type: '',
};

export const FormContact = () => {
  const [form, setForm] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = Validation(form);
    setErrors(validationErrors);
    if (Object.values(validationErrors).every((error) => error === "")) {
      console.log(form);
      setForm(initialFormData);
      toast.success("Form submitted successfully!");
      setTimeout(() => {
        navigate('/welcome');
      }, 2000); // delay to show toast message
    } else {
      toast.error("Please fill out all fields correctly.");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <>
      <ToastContainer />
      <div className='container'>
        <form onSubmit={handleSubmit} className="form-group">
          <h1>Contact Us</h1>
          <div className="form-subgroup">
            <div className="form-wrapper">
              <label htmlFor="firstname">
                First Name <span>*</span>
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={form.firstname}
                onChange={handleChange}
                className={`input-field ${errors.firstname ? 'error-input' : ''}`}
              />
              <Error message={errors.firstname} />
            </div>
            <div className="form-wrapper">
              <label htmlFor="lastname">
                Last Name <span>*</span>
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={form.lastname}
                onChange={handleChange}
                className={`input-field ${errors.lastname ? 'error-input' : ''}`}
              />
              <Error message={errors.lastname} />
            </div>
          </div>
          <div className="form-wrapper">
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              className={`input-field ${errors.email ? 'error-input' : ''}`}
            />
            <Error message={errors.email} />
          </div>
          <div>
            <br />
            <label>
              Query Type <span>*</span>
            </label>
          </div>
          <div className="form-subgroup">
            <div className="flex-class custom-border">
              <input
                type="radio"
                name="query_type"
                value="general_enquiry"
                id="general_enquiry"
                onChange={handleChange}
                checked={form.query_type === 'general_enquiry'}
              />
              <h4 className="custom-text">General Enquiry</h4>
            </div>
            <div className="flex-class custom-border">
              <div className="flex-col">
                <input
                  type="radio"
                  name="query_type"
                  value="support_request"
                  onChange={handleChange}
                  checked={form.query_type === 'support_request'}
                />
              </div>
              <h4 className="custom-text">Support Request</h4>
            </div>
          </div>
          <Error message={errors.query_type} />
          <div className="form-wrapper">
            <label htmlFor="message">
              Message <span>*</span>
            </label>
            <textarea
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              className={`input-field ${errors.message ? 'error-input' : ''}`}
            />
            <Error message={errors.message} />
          </div>
          <div className="flex-class">
            <div className="flex-col">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                checked={form.consent}
                onChange={handleChange}
                className={errors.consent ? 'error-input' : ''}
              />
            </div>
            <div>
              <p>
                I consent to being contacted by the team <span>*</span>
              </p>
              <Error message={errors.consent} />
            </div>
          </div>
          <Button/>
        </form>
      </div>
        <div>
      <Footer/>

        </div>

    </>
  );
};

export default FormContact;
