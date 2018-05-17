import React from 'react';
import ReactDOM from 'react-dom';
import TableBody from './TableBody';
import './index.css';

// 1 component pour récupérer les données
// 1 pour la table

class App extends React.Component {
  render() {
    return (
      //URL : <input id="url" type="text" value="https://demo0050088.mockable.io/simple/profils"><br>
      //Filter : <input id="filter" type="text">
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th id="lastname">Lastname</th>
            <th id="firstname">Firstname</th>
            <th id="balance">Balance</th>
          </tr>
        </thead>
        <TableBody/>
      </table>
      //<div id="modal"></div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);