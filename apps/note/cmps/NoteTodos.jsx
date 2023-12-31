import { eventBusService } from '../../../services/event-bus.service.js'

export function NoteTodos({ note, onChangeNote }) {
  function onTodoClick(todoId) {
    eventBusService.emit('show-loader')
    var newTodos = note.info.todos
    const todoIdx = newTodos.findIndex((todo) => todo.id === todoId)
    const todo = newTodos[todoIdx]
    todo.doneAt = todo.doneAt ? null : Date.now()
    const newNote = { ...note, info: { ...note.info, todos: newTodos } }
    onChangeNote(newNote)
  }

  return (
    <article className="note-todos">
      {note.info.title && <p className="note-title">{note.info.title}</p>}

      <ul
        onClick={(ev) => ev.stopPropagation()}
        className="note-todos-list note-content"
      >
        {note.info.todos.map((todo) => {
          return (
            <li key={todo.id} className={`todo ${todo.doneAt && 'checked'}`}>
              <label>
                <input
                  onChange={() => onTodoClick(todo.id)}
                  type="checkbox"
                  checked={todo.doneAt ? true : false}
                />
                {todo.txt}
              </label>
            </li>
          )
        })}
      </ul>
    </article>
  )
}
