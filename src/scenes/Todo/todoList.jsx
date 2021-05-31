import React from "react";
import { connect } from "react-redux";
import Todo from "./todo";

import { getTodosByVisibilityFilter } from "../../redux/selectors/selectors";


const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
        return <Todo key={`todo-${todo.id}`} todo={todo} />;
      })
      : "No todos, yay!"}
  </ul>
);

const mapStateToProps = state => {
  const { filter } = state;
  const todos = getTodosByVisibilityFilter(state, filter);
  return { todos };

};
// export default TodoList;
export default connect(mapStateToProps)(TodoList);
