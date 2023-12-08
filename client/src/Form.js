import React, { useState } from 'react';
import "./CSS/Lading.css"

const ContactForm = () => {
 const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    importancia: '',
    pregunta: '',
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
        name="nombre"
        placeholder="Nombre y Apellido"
        value={form.nombre}
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
        type="tel"
        name="telefono"
        placeholder="Número de Teléfono"
        value={form.telefono}
        onChange={handleChange}
      />
      <input
        type="date"
        name="fecha"
        value={form.fecha}
        onChange={handleChange}
      />
      <select
        name="importancia"
        value={form.importancia}
        onChange={handleChange}
      >
        <option value="">Importancia de tu Pregunta</option>
        <option value="Baja">Baja</option>
        <option value="Media">Media</option>
        <option value="Alta">Alta</option>
      </select>
      <textarea
        name="pregunta"
        placeholder="Haz tu Pregunta"
        value={form.pregunta}
        onChange={handleChange}
      />
      <button type="submit">¡ENVIAR!</button>
    </form>
 );
};

export default ContactForm;
