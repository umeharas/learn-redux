import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addTodo, resetTodo} from '../actions/index';
import styled from 'styled-components';

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
    resetTodo: todo => dispatch(resetTodo(todo))
  };
}

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.title.length) {
      alert ('please enter your text!');
      return;
    }
    const { title } = this.state;
    const id = uuidv1();
    this.props.addTodo({ title, id });
    this.setState({ title: "" });
  }
  handleReset(event) {
    event.preventDefault();
    const confirm = window.confirm('Are you sure you want to delete everything?');
    if (confirm) {
      this.props.resetTodo();
    }
    return;
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <FormContainer>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="enter your todo"
            value={title}
            onChange={this.handleChange}
          />
        </FormContainer>
        <ButtonContainer>
          <button type="submit" theme="positive">
            Add
          </button>
          <button type="reset" theme="negative">
            Reset All
          </button>
        </ButtonContainer>
      </form>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;

const FormContainer = styled.div`
  input {
    box-sizing: border-box;
    width: 100%;
    display: block;
    box-shadow: none;
    padding: 0.5em;
    &:focus {
      outline: none;
      background-color: #eee;
    }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 0.5em;
	button {
    outline: none;
    border-radius: 0;
    width: 50%;
    padding: 0.3em 0;
    background-color: ${ props => (props.theme === "positive") ? '#0C40D4' : '#fff' };
  }
`;