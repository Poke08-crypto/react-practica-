const tarjeta = {
  backgroundColor: '#ffffff',
  borderRadius: '6px',
  padding: '10px 12px',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.15)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '8px',
  cursor: 'grab',
};

const texto = {
  margin: 0,
  fontSize: '0.9rem',
  wordBreak: 'break-word',
};

const botonEliminar = {
  border: 'none',
  backgroundColor: 'transparent',
  color: '#9aa5b8',
  cursor: 'pointer',
  fontSize: '0.9rem',
  lineHeight: 1,
};

export function TaskCard({ task, onDelete, onDragStart }) {
  return (
    <div style={tarjeta} draggable onDragStart={(e) => onDragStart(e, task)}>
      <p style={texto}>{task.title}</p>
      <button
        style={botonEliminar}
        onClick={() => onDelete(task.id)}
        aria-label="Eliminar tarea"
        title="Eliminar tarea"
      >
        ✕
      </button>
    </div>
  );
}