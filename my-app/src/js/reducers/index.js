// src/js/reducers/index.js
import {ADD_TODO, REMOVE_TODO, RESET_TODO} from '../constants/action-types'

const initialState = {
  todos: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload]};
    case REMOVE_TODO:
      const todos = state.todos;
      const currentItem = todos.find((todo) => {return todo.id === action.payload;})
      const currentIndex = todos.indexOf(currentItem);
      return { ...state, todos: [...state.todos.slice(0, currentIndex), ...state.todos.slice(currentIndex + 1)]};
    case RESET_TODO:
      return initialState;
    default:
      return state;
  }
};

export default rootReducer;