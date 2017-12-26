import React, {Component} from 'react';
import logo from './black-logo.png';
import {Button, Nav, NavItem} from 'react-bootstrap';
import Home from './Components/Home.js';
import Projects from './Components/Projects.js';
import Resume from './Components/Resume.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      home: true,
      projects: false,
      resume: false
    }
  }
  toggleHome = (e) => {
    e.preventDefault()
    this.setState({home: true, projects: false, resume: false})
  }
  toggleProjects = (e) => {
    e.preventDefault()
    this.setState({home: false, projects: true, resume: false})
  }
  toggleResume = (e) => {
    e.preventDefault()
    this.setState({home: false, projects: false, resume: true})
  }
  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" />
        <h1 className="App-title">Luke Romberg</h1>
      </header>
      <Nav bsStyle="pills" stacked="stacked" activeKey={1}>
        <NavItem className="nav-transition" eventKey={1} onClick={this.toggleHome}>Home</NavItem>
        {this.state.home ? <Home /> : null}
        <NavItem className="nav-transition" eventKey={1} onClick={this.toggleProjects}>Projects</NavItem>
        {this.state.projects ? <Projects /> : null}
        <NavItem className="nav-transition" eventKey={1} onClick={this.toggleResume}>Resume</NavItem>
        {this.state.resume ? <Resume /> : null}
      </Nav>
    </div>);
  }
}

export default App;
