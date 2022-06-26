import React from 'react'
import Todo from './Todo'


function TodoList({todos,setTodos,filteredTodos,setInputText}) {
 
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo  
          todos={todos} 
          setTodos={setTodos} 
          text = {todo.text} 
          todo={todo}
          key={todo.id}
          setInputText={setInputText}
          />
        ))}
      </ul>
    </div>
     
  )
}

export default TodoList