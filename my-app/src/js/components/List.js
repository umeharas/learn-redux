// src/js/components/List.js
import React from "react";
import { connect } from "react-redux";
import Remover from './Remover';

const mapStateToProps = state => {
  return { todos: state.todos };
};
const ConnectedList = ({ todos }) => (
  <ul>
    {todos.map(el => (
      <li key={el.id}>
        {el.title}
        <Remover id={el.id}/>
      </li>
    ))}
  </ul>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;