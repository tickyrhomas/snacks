import React, { Component } from 'react';
import styled from 'styled-components'
import logo from './logo.svg';
import './App.css';

const Title = styled.h1`
  font-size: 6.5em;
  text-align: center;
  color: white;
`;

const Container = styled.div`
  background-color: gray;
  display: grid;
  height: 100vh;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto 1fr;
`;

const SpinningLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 200px;
`


class App extends Component {
  render() {
    return (
      <Container>
        <Title>
          <SpinningLogo src='andrew_snack.png'/>
          Coming Soon!
          <SpinningLogo src='ricky_snack.png'/>
        </Title>
      </Container>
    );
  }
}

export default App;
