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
			sortedCol: "",
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

	sortNum(name) {
		let oldTab = this.state.filteredTab.slice();
		let newTab = [];
		let maxmin = oldTab[0][name];
		let index = 0;
		let sign = 1;

		if (this.state.sortedCol === name) {
			sign = -1;
		} else {
			this.setState({sortedCol: name});
		}
		while(oldTab.length > 0) {
			maxmin = oldTab[0][name];
			for (let i = 0; i < oldTab.length; i++) {
				if ((parseFloat(oldTab[i][name]) - parseFloat(maxmin)) * sign >= 0) {
					maxmin = oldTab[i][name];
					index = i;
				}
			}
			newTab.push(oldTab[index]);
			oldTab.splice(index, 1);
		}
		this.setState({filteredTab: newTab});
	}

	sortAlpha(name) {
		let oldTab = this.state.filteredTab.slice();
		let newTab = [];
		let maxmin = oldTab[0][name];
		let index = 0;
		let sign = 1;

		if (this.state.sortedCol === name) {
			sign = -1;
		} else {
			this.setState({sortedCol: name});
		}
		while(oldTab.length > 0) {
			maxmin = oldTab[0][name];
			for (let i = 0; i < oldTab.length; i++) {
				if (maxmin.localeCompare(oldTab[i][name]) * sign >= 0) {
					maxmin = oldTab[i][name]; 
					index = i;
				}
			}
			newTab.push(oldTab[index]);
			oldTab.splice(index, 1);
		}
		this.setState({filteredTab: newTab});
	}

	sort(name) {
		if (this.state.sortedCol === "balance") {
			this.sortNum(name);
		} else {
			this.sortAlpha(name);
		}
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
							<TableH name="Lastname" callback={() => this.sort("lastname")}/>
							<TableH name="Firstname" callback={() => this.sort("firstname")}/>
							<TableH name="Balance" callback={() => this.sort("balance")}/>
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