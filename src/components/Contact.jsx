import React, { useState } from 'react';

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({ email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form submitted:', formData);
    setShowSuccess(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setFormData({ email: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <h3 className="group-title">KONTAKT</h3>
      <p className="contact-text">Napisz do nas w sprawie wyceny indywidualnych projektów lub współpracy przy sesjach zdjęciowych.</p>
      
      {!showSuccess ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="email">E-mail nadawcy</label>
            <input 
              type="email" 
              id="email" 
              required 
              placeholder="twoj@adres.pl" 
              autoComplete="off"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="form-row">
            <label htmlFor="message">Treść wiadomości</label>
            <textarea 
              id="message" 
              required 
              placeholder="Napisz szczegóły swojego zapytania..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-black">Wyślij zapytanie</button>
        </form>
      ) : (
        <div className="success-screen active">
          <div className="success-box">
            <span className="success-tick">&check;</span>
            <h3>Wiadomość wysłana</h3>
            <p>Dziękujemy. Twoje zapytanie zostało zarejestrowane w naszym systemie.</p>
            <button className="btn btn-outline" onClick={handleCloseSuccess}>Zamknij</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
