
import Login from './scenes/login/login';
import './App.css';

import AddTodo from './scenes/Todo/addTodo'
import TodoList from './scenes/Todo/todoList';
import Filters from './scenes/Todo/filters';



function App() {
  return (
    <div className="App">
      <Login />
      <AddTodo />
      <TodoList />
      <Filters />
    </div>
  );
}

export default App;
