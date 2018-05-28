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
		let target = event.target.value.toUpperCase();

		for (let i = 0; i < this.state.tab.length; i++) {
			if (this.state.tab[i].lastname.toUpperCase().includes(target) || this.state.tab[i].firstname.toUpperCase().includes(target)) {
				newTab.push(this.state.tab[i]);
			}
		}
		this.setState({filteredTab: newTab});
	}

	sortNum(name) {
		let oldTab = this.state.filteredTab.slice();

		if (this.state.sortedCol === name) {
			oldTab.sort((a, b) => { return b[name] - a[name] });
		} else {
			oldTab.sort((a, b) => { return a[name] - b[name] });
		}
		this.setState({filteredTab: oldTab});
	}

	sortAlpha(name) {
		let oldTab = this.state.filteredTab.slice();

		if (this.state.sortedCol === name) {
			oldTab.sort((a, b) => { return b[name].localeCompare(a[name]) });
		} else {
			oldTab.sort((a, b) => { return a[name].localeCompare(b[name]) });
		}
		this.setState({filteredTab: oldTab});
	}

	sort(name) {
		if (this.state.sortedCol === "balance") {
			this.sortNum(name);
		} else {
			this.sortAlpha(name);
		}
		this.setState({sortedCol: this.state.sortedCol === name ? "" : name});
	}

	displayModal(obj) {
		this.setState({toDisplay: obj});
	}

	renderRows() {
		let str = [];

		for (let i = 0; i < this.state.filteredTab.length; i++) {
		  	str.push(<tr class="rows" onClick={() => this.displayModal(this.state.filteredTab[i])}><td><img src={this.state.filteredTab[i].picture}/></td>
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
						<tr class="rows">
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
