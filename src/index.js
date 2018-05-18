import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
import './index.css';

class App extends React.Component {
  render() {
    return (
        <Table/>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);