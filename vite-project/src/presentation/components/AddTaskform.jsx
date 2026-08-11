import { useState } from 'react';

const formulario = {
  display: 'flex',
  gap: '8px',
};

const input = {
  padding: '8px 10px',
  borderRadius: '6px',
  border: 'none',
  minWidth: '220px',
};

const boton = {
  padding: '8px 14px',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: '#4d9de0',
  color: 'white',
  fontWeight: 600,
  cursor: 'pointer',
};

export function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle('');
  };

  return (
    <form style={formulario} onSubmit={handleSubmit}>
      <input
        style={input}
        type="text"
        placeholder="Nueva tarea..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button style={boton} type="submit">
        Agregar
      </button>
    </form>
  );
}