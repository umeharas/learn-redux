// src/js/components/App.js
import React from "react";
import styled from "styled-components";
import List from "./List";
import Form from "./Form";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <MainBg>
          <Container>
            <Title>React Redux To-Do List</Title>
            <FlexContainer>
              <FlexInner>
                <h2>List of tasks</h2>
                <List />
              </FlexInner>
              <FlexInner>
                <h2>Add a new task</h2>
                <Form />
              </FlexInner>
            </FlexContainer>
          </Container>
        </MainBg>
      </div>
    );
  }
}

const Title = styled.h1`
  font-size: 50px;
  color: #000;
  text-align: center;
`;

const MainBg = styled.div`
  background: linear-gradient(to bottom, #2ce0d1 0%, #7db9e8 100%);
  padding: 50px 0;
  min-height: 100vh;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 800px;
  height: 50px;
`;

const FlexContainer = styled.div`
  display: flex;
`;
const FlexInner = styled.div`
  width: 49%;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 12px 20px 80px;
  position: relative;
  &:first-of-type {
    margin-right: 2%;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: -12px;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 10px solid rgba(255, 255, 255, 0.7);
    }
  }
`;
