import { FILTERS } from "../../utils/constants";

export const getTodosState = store => store.todos;

export const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case FILTERS.ALL:
    default:
      return allTodos;
  }
};
