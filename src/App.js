import React, { Component } from 'react';
import './App.css';

// import component
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import TripList from './components/TripList';
// Component: 
// stateful component: class
// stareless component: arrow function
class App extends Component {
  render() {
    return (
      // cau truc JSX = javascript + html
      // class -> className
      // <img> <img/> ---> <img alt="abc" />
      // <a> --> <a href="/" ></a>
      <div className="App">
        <Navbar />
        <Carousel />
        <TripList />
      </div>
    );
  }
}

export default App;
