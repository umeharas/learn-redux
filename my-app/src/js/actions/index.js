// src/js/actions/index.js

import { ADD_TODO, REMOVE_TODO, RESET_TODO } from '../constants/action-types';

export const addTodo = todo => ({ type: ADD_TODO, payload: todo });
export const removeTodo = id => ({ type: REMOVE_TODO, payload: id });
export const resetTodo = todo => ({ type: RESET_TODO, payload: todo });
