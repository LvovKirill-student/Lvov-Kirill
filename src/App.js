//import logo from './logo.svg';
import './App.css';
import React from 'react';
import LoginForm from "./components/LoginForm"
import Dashboard from "./components/Dashboard"
import Navigator from "./components/Navigator"

class App extends React.Component {
  state = {
    isLoggedIn: true,
    index: 0
  };

  handleLoginClick = (stateLog) => {
    this.setState({ isLoggedIn: stateLog });
  }
  updateData = (value) => {
    this.setState({ index: value })
  }

  render() {
    return <div className="App">
      {this.state.isLoggedIn ? <LoginForm handleLoginClick={this.handleLoginClick} /> :
        <div className="MainScreen">
          <Navigator updateData={this.updateData} />
          <Dashboard handleLoginClick={this.handleLoginClick} numb={this.state.index} />
        </div>}
    </div>
  };
}

export default App;