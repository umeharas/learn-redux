// src/js/components/List.js
import React from "react";
import { connect } from "react-redux";
import Remover from './Remover';
import styled from 'styled-components';

const mapStateToProps = state => {
  return { todos: state.todos };
};
const ConnectedList = ({ todos }) => (
  <ul>
    {todos.map(el => (
      <ListItem key={el.id}>
        <ListText>{el.title}</ListText>
        <Remover id={el.id}/>
      </ListItem>
    ))}
  </ul>
);

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2em 0;
  border-bottom: 1px solid #fff;
  button {
    width: 77px;
  }
`;

const ListText = styled.div`
  width: 245px;
`;

const List = connect(mapStateToProps)(ConnectedList);
export default List;