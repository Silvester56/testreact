import React from 'react';
import {getData} from './getData';

class TableBody extends React.Component {

constructor(props) {
		super(props);
		this.state = {
			tab: []
		};
		getData().then(profils => {
			this.setState({tab: profils});
		});
	}

	profilItem(profil, index){
		return (<tr key={index} id={profil.id}>
			<td><img src={profil.picture} alt="avatar"/></td>
			<td>{profil.lastname}</td>
			<td>{profil.firstname}</td>
			<td>{profil.tabbalance}</td></tr>);
	}

	profilList() {
		return this.state.tab.map((profil, index) => this.profilItem(profil, index));
	}

	renderRows() {
  		return this.profilList();
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