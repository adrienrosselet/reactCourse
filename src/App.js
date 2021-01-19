import React from 'react';
import logo from './logo.svg';
import MessageField from './components';
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


  render (){
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <MessageField />

        </header>
      </div>
    );
  }
}

export default App;
