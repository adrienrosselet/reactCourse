import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <button onClick={changeText}>Нормально</button>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//
//         </a>
//         <p>{this.state.text}</p>
//       </header>
//     </div>
//   );
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Learn'
    };
  }

  changeText = () => {
    this.setState(prevState => ({
      text: this.state.text+'Нормально',
    }));
  };

  render (){
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.changeText}>Нормально</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React

          </a>
          <p>{this.state.text}</p>
        </header>
      </div>
    );
  }
}

export default App;
