Import {taskCard} from ./Taskard ;


export function Board ({title,status, tasks, onDrop,onDragStart,onDelete}) {
    const handleDragOver = (e) => {
        e.preventDefault();
    }


    const handleDrop = (e) => {
            e.preventDefault();
        onDrop(status);
    }

    return(
        <div onDragOver={handleDragOver} onDrop={handleDragOver}>
            <h2> 
               {title} 
            <span> {tasks.length} </span>             
        </h2>
        </div>
            {tasks.length === 0   <p>Suelte una targeta aqui </p>}
        {tasks.map((task) =>   (<taskCard key={task.id}   task={task}   onDragStart={onDragStart}   onDelete={onDelete} />
        ))}
        </div>
    </div>

    )
}

const columna = {

    backgroundColor: #dde3ee'
    borderRadius: ''



}


