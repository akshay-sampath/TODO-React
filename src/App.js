import React,{useState,useEffect} from 'react'
import "./App.css"
import Form from "./components/Form"
import TodoList from "./components/TodoList"

export const App = () => {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  },[]);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos,status]);

  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todos) => todos.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todos) => todos.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
     localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  };


  return (
    <div className="App">
      <header>
      <h1>Todo List</h1>
    </header>
    <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText}
        setStatus={setStatus}
        />
    <TodoList 
    todos={todos} 
    setTodos={setTodos}
    filteredTodos={filteredTodos}
    setInputText={setInputText}
    />
    </div>
  )
}

export default App;