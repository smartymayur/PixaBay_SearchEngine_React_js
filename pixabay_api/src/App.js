import React, { Component } from 'react';
import Navbar from './components/Navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

