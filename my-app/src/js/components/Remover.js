import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/index';
import styled from 'styled-components';

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: id => dispatch(removeTodo(id))
  };
}

class ConnectedRemover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id
    };
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(event) {
    event.preventDefault();
    const id = this.state.id;
    this.props.removeTodo(id);
  }
  render() {
    return (
      <RemoveButton onClick={this.handleRemove}>remove</RemoveButton>
    );
  }
}

const RemoveButton = styled.button`

`;

const Remover = connect(null, mapDispatchToProps)(ConnectedRemover);
export default Remover;