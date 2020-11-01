import logo from './logo.svg';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import { useState } from 'react';
import TodoForm from './components/TodoForm';

function App() {
  const [todoList, setTodoList] = useState(
    [
      { id: 1, title: 'I love Easy Frontend! 😍' },
      { id: 2, title: 'We love Easy Frontend! 🥰' },
      { id: 3, title: 'They love Easy Frontend! 🚀' },
    ]
  )
  function hanldeTodoClick(todo){
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if(index <0 ) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index,1);
    setTodoList(newTodoList);
  }
  function hanleTodoFormSubit (formValues) {
    console.log('Form Values: ', formValues);
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  return (
    <div className="App">
      <ColorBox />
      <TodoForm onSubmit = {hanleTodoFormSubit}/>
      <TodoList todos={todoList} onTodoClick = {hanldeTodoClick}/>
    </div>
  );
}

export default App;
