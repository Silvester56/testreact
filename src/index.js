import React from 'react';
import ReactDOM from 'react-dom';
import TableBody from './TableBody';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <TableBody/>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);