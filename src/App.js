import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import {DefaultPage} from './Main.js'
import {Bio} from './Bio.js'
import {ContactUs} from './ContactUs.js'
import {OtherProjects} from './OtherProjects.js'
import styled, {keyframes} from 'styled-components'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <Container>
    <Header>
      <AvatarHeader>
        <SpinningLogo1 src='andrew_snack.png'/>
        <SpinningLogo2 src='ricky_snack.png'/>
      </AvatarHeader>
      <HeaderLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/bio">Bio</StyledLink>
        <StyledLink to="/contact-us">Contact Us</StyledLink>
        <StyledLink to="/other-projects">Other Projects</StyledLink>
      </HeaderLinks>
    </Header>
    
    <Switch>
      <Route exact path="/" component={DefaultPage}/>
      <Route path="/bio" component={Bio}/>
      <Route path="/contact-us" component={ContactUs}/>
      <Route path="/other-projects" component={OtherProjects}/>
    </Switch>
    
    <Footer>
      <p>Meow footer</p>
    </Footer>
    </Container>
  </Router>
)
export default BasicExample

const Header = styled.div`
  background-color:#9BCEFF;
  grid-area: header;
  display: grid;
  grid-template-columns: 50% auto;
  grid-template-rows: auto;
  box-shadow: 0px 4px 4px #949494;
  z-index:2;
`

const Footer = styled.div`
  background-color: #7095B8;
  grid-area: footer;
`

const AvatarHeader = styled.div`
  grid-column:1;
  display: grid;
  grid-template-columns: 10% 10%;
`
const HeaderLinks = styled.div`
  grid-column: 2 / 8;
  display: grid;
  grid-template-columns: auto auto auto auto;
`
const SpinningLogo1 = styled.img`
  height: 50px;
  align-self: center;
  justify-self: center;
`

const SpinningLogo2 = styled.img`
  height: 50px;
  align-self: center;
  justify-self: center;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
  font-size: 2em;
  font-weight: 500; 
  align-self: center;
  justify-self: center;
  &:hover {
    color:#FFFFFF;
    font-weight: 600; 
  }
`
const Container = styled.div`
  background-color: gray;
  display: grid;
  height: 100vh;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: 10% auto 10%;
  grid-template-areas: 
    "header header header header"
    "main main main sidebar"
    "footer footer footer sidebar";
  }
`;