import React from 'react';
import logo from './logo.svg';
import Layout from './layout';
import './App.css';
//import MuiThemeProvider from '@material-ui/core/style';
//import Button from '@material-ui/core/Button';
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
        <Layout/>
      </div>
    );
  }
}

export default App;
