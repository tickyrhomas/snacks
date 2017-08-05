import React, { Component } from 'react';
import styled from 'styled-components';

export class Bio extends Component {
  render () {
    return (
      <Container>
        <p>Bio Page</p>
      </Container>
    )
  }
}

const Container = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: 22% 22% 22% 22%;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 3%;
  background-color: #E6E6E6;
`