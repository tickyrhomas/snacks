import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components'
import logo from './logo.svg';
import './App.css';

const Title = styled.h1`
  font-size: 6.5em;
  text-align: center;
  color: white;
`;


const keyFramesYa = keyframes`
  from { transform: rotate(-20deg); }
  to { transform: rotate(20deg); }
`;


const Container = styled.div`
  background-color: gray;
  display: grid;
  height: 100vh;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto 1fr;
`;

const SpinningLogo = styled.img`
  animation: ${keyFramesYa} infinite 1s linear alternate;
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
