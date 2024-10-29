import React, {  useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Walidacja dla pola 'name'
    if (name === 'name') {
      setName(value);
    }

    // Walidacja dla pola 'number'
    if (name === 'number') {
     setNumber(value);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  if (/\d/.test(name)) {
    alert('Please enter letters only in the Name field.');
    return;
  }

  if (/[a-zA-Z]/.test(number)) {
    alert('Please enter numbers only in the Number field.');
    return;
  }

  // Zgłoszenie nowego kontaktu
  onSubmit({ name, number });

  // Resetowanie pól formularza
  setName('');
  setNumber('');
};


    return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[A-Za-z\s]+$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="^\d+(-\d+){0,2}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={styles.button}>
            Add Contact
        </button>
      </form>
    );
  }


ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
