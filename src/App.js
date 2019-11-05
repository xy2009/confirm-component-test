import React from 'react';
import logo from './logo.svg';
import './App.css';
import Confirm from './Confirm';

class App extends React.Component {

  async componentDidMount() {
    let res = await Confirm('确定删除吗');
    console.log(res);
    if (res) {
      console.log("是");
    } else {
      console.log("否");
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
