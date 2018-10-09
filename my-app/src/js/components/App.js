// src/js/components/App.js
import React from "react";
import styled from 'styled-components';
import List from "./List";
import Form from './Form'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <MainBg>
          <Container>
            <Title>React Redux To-Do List</Title>
            <List />
            <div className="col-md-4 offset-md-1">
              <h2>Add a new task to do</h2>
              <Form />
            </div>
          </Container>
        </MainBg>
      </div>
    )
  }
}

const Title = styled.h1`
  font-size: 50px;
  color: #000;
  text-align: center;
`;

const MainBg = styled.div`
  background: linear-gradient(to bottom, #2ce0d1 0%,#7db9e8 100%);
  padding: 50px 0;
  min-height: 100vh;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 600px;
  height: 50px;
  background-color: #fff;
`;