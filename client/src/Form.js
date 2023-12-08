import React, { useState } from 'react';
import "./CSS/Lading.css"

const ContactForm = () => {
 const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    importance: '',
    question: '',
 });

 const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Aquí puedes agregar la lógica para enviar el formulario, como por ejemplo llamar a una API
 };

 return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contactanos</h2>
      <input
        type="text"
        name="name"
        placeholder="Nombre y Apellido"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Correo Electrónico"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Número de Teléfono"
        value={form.phone}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />
      <select
        name="importance"
        value={form.importance}
        onChange={handleChange}
      >
        <option value="">Importancia de tu Pregunta</option>
        <option value="baja">Baja</option>
        <option value="media">Media</option>
        <option value="alta">Alta</option>
      </select>
      <textarea
        name="question"
        placeholder="Haz tu Pregunta"
        value={form.question}
        onChange={handleChange}
      />
      <button type="submit">¡ENVIAR!</button>
    </form>
 );
};

export default ContactForm;
