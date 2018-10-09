import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addTodo, resetTodo} from '../actions/index';

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
    const { title } = this.state;
    const id = uuidv1();
    this.props.addTodo({ title, id });
    this.setState({ title: "" });
  }
  handleReset(event) {
    event.preventDefault();
    this.props.resetTodo();
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <div className="form-group">
          <label htmlFor="title">Content</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">
          Add
        </button>
        <button type="reset">
          Reset All
        </button>
      </form>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;