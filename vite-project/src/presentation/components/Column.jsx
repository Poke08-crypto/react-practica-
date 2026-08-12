import { TaskCard } from './TaskCard.jsx';

const columna = {
  backgroundColor: '#dde3ee',
  borderRadius: '10px',
  padding: '12px',
  width: '280px',
  minWidth: '280px',
  minHeight: '200px',
};

const tituloColumna = {
  fontSize: '0.95rem',
  margin: '4px 6px 12px',
  display: 'flex',
  justifyContent: 'space-between',
  color: '#33415c',
};

const contador = {
  backgroundColor: '#c3cce0',
  borderRadius: '12px',
  padding: '1px 8px',
  fontSize: '0.8rem',
};

const listaTareas = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  minHeight: '60px',
};

const textoVacio = {
  fontSize: '0.8rem',
  color: '#7a869a',
  textAlign: 'center',
  margin: '12px 0',
};

export function Column({ title, status, tasks, onDrop, onDragStart, onDelete }) {
  const handleDragOver = (e) => e.preventDefault(); // necesario para permitir el drop
  const handleDrop = (e) => {
    e.preventDefault();
    onDrop(status);
  };

  return (
    <div style={columna} onDragOver={handleDragOver} onDrop={handleDrop}>
      <h2 style={tituloColumna}>
        {title} <span style={contador}>{tasks.length}</span>
      </h2>
      <div style={listaTareas}>
        {tasks.length === 0 && <p style={textoVacio}>Suelta una tarjeta aquí</p>}
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={onDelete} onDragStart={onDragStart} />
        ))}
      </div>
    </div>
  );
}
