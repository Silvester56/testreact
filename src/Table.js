import React from 'react';
import TableH from './TableH';
import Modal from './Modal';
import {getData} from './getData';

class Table extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			tab: [],
			filteredTab: [],
			toDisplay: {},
			url: "https://demo0050088.mockable.io/simple/profils"
		};
		getData().then(profils => {
			this.setState({tab: profils, filteredTab: profils});
		});
	}

	changeURL(event) {
		this.setState({url: event.target.value});
		getData(event.target.value).then(profils => {
			this.setState({tab: profils, filteredTab: profils});
		});
	}

	filter(event) {
		let newTab = [];

		for (let i = 0; i < this.state.tab.length; i++) {
			if (this.state.tab[i].lastname.toUpperCase().includes(event.target.value.toUpperCase()) || this.state.tab[i].firstname.toUpperCase().includes(event.target.value.toUpperCase())) {
				newTab.push(this.state.tab[i]);
			}
		}
		this.setState({filteredTab: newTab});
	}

	sort(name, up) {
		let oldTab = this.state.filteredTab.slice();
		let newTab = [];
		let maxmin = oldTab[0][name];
		let index = 0;

		console.log(name, up);

		while(oldTab.length > 0) {
			maxmin = oldTab[0][name];
			for (let i = 0; i < oldTab.length; i++) {
				if (name.localeCompare("balance") == 0) {
					if (up) {
						if (parseFloat(oldTab[i][name]) >= parseFloat(maxmin)) {
							maxmin = oldTab[i][name];
							index = i;
						}
					} else {
						if (parseFloat(oldTab[i][name]) <= parseFloat(maxmin)) {
							maxmin = oldTab[i][name];
							index = i;
						}
					}
				} else {
					if (up) {
						if (maxmin.localeCompare(oldTab[i][name]) >= 0) {
							maxmin = oldTab[i][name]; 
							index = i;
						}
					} else {
						if (maxmin.localeCompare(oldTab[i][name]) <= 0) {
							maxmin = oldTab[i][name];
							index = i;
						}
					}
				}
			}
			newTab.push(oldTab[index]);
			oldTab.splice(index, 1);
		}
		this.setState({filteredTab: newTab});
	}

	displayModal(obj) {
		this.setState({toDisplay: obj});
	}

	renderRows() {
		let str = [];

		for (let i = 0; i < this.state.filteredTab.length; i++) {
		  	str.push(<tr onClick={() => this.displayModal(this.state.filteredTab[i])}><td><img src={this.state.filteredTab[i].picture}/></td>
			<td>{this.state.filteredTab[i].lastname}</td>
			<td>{this.state.filteredTab[i].firstname}</td>
			<td>{this.state.filteredTab[i].balance}</td></tr>);
  		}

  		return str;
	}

	render() {
		return (
			<div>
				URL : <input onChange={event => this.changeURL(event)} type="text" value={this.state.url}/><br/>
				Filter : <input onChange={event => this.filter(event)} type="text"/>
				<table>
					<thead>
						<tr>
							<th>Picture</th>
							<TableH name="Lastname" callback={(up) => this.sort("lastname", up)}/>
							<TableH name="Firstname" callback={(up) => this.sort("firstname", up)}/>
							<TableH name="Balance" callback={(up) => this.sort("balance", up)}/>
						</tr>
					</thead>
					<tbody>
						{this.renderRows()}
					</tbody>
				</table>
				<Modal profil={this.state.toDisplay} callback={() => this.displayModal({})}/>
			</div>
		);
	}
}

 export default Table;