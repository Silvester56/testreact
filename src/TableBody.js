import React from 'react';
import {getData} from './getData';

class TableBody extends React.Component {

	constructor(props) {
		super(props);
		getData().then(profils => {
			this.state = {
				tab: profils
			};
		});
	}

	renderRows() {
		let str = [];
		for (let i = 0; i < this.state.tab.length; i++) {
		  	str.push(<tr id={this.state.tab[i].id}><td><img src={this.state.tab[i]}/></td>
			<td>{this.state.tab[i]}</td>
			<td>{this.state.tab[i]}</td>
			<td>{this.state.tab[i]}</td></tr>);
  		}

  		return str;
	}

	render() {
		return (
		  //URL : <input id="url" type="text" value="https://demo0050088.mockable.io/simple/profils"><br>
		  //Filter : <input id="filter" type="text">
		  <tbody>
		  		{this.renderRows()}
		  </tbody>
		  //<div id="modal"></div>
		);
	}
}

 export default TableBody;