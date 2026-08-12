import { useRef } from 'react';
import { Column } from './Column.jsx';
import { AddTaskForm } from './AddTaskForm.jsx';
import { TASK_STATUS } from '../../domain/entities/task.js';
import { useBoard } from '../hooks/useBoard.js';

const COLUMNS = [
  { status: TASK_STATUS.TODO, title: 'Por hacer' },
  { status: TASK_STATUS.IN_PROGRESS, title: 'En progreso' },
  { status: TASK_STATUS.DONE, title: 'Hecho' },
];

const pagina = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: "'Segoe UI', system-ui, sans-serif",
  backgroundColor: '#eef1f7',
  color: '#1c2333',
};

const encabezado = {
  backgroundColor: '#1c3d5a',
  color: 'white',
  padding: '16px 24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '12px',
};

const titulo = {
  margin: 0,
  fontSize: '1.4rem',
  letterSpacing: '0.02em',
};

const tablero = {
  flex: 1,
  display: 'flex',
  gap: '16px',
  padding: '20px',
  overflowX: 'auto',
  alignItems: 'flex-start',
};

export function Board() {
  const { tasks, addTask, moveTaskTo, deleteTask } = useBoard();
  const draggedTaskId = useRef(null);

  const handleDragStart = (_e, task) => {
    draggedTaskId.current = task.id;
  };

  const handleDrop = (newStatus) => {
    if (draggedTaskId.current) {
      moveTaskTo(draggedTaskId.current, newStatus);
    }
    draggedTaskId.current = null;
  };

  return (
    <div style={pagina}>
      <header style={encabezado}>
        <h1 style={titulo}>Mini Trello</h1>
        <AddTaskForm onAdd={addTask} />
      </header>
      <div style={tablero}>
        {COLUMNS.map((col) => (
          <Column
            key={col.status}
            title={col.title}
            status={col.status}
            tasks={tasks.filter((t) => t.status === col.status)}
            onDrop={handleDrop}
            onDragStart={handleDragStart}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}
