import React from 'react';
import {getData} from './getData';
import TableSortHead from './TableSortHead';
import Modal from './Modal';
import ProfilList from './ProfilList';

class TableBody extends React.Component {

constructor(props) {
		super(props);
		this.state = {
			tab: [],
			oldTab: [],
			mdDisplay:{}
		};
		getData().then(profils => {
			this.setState({tab: profils, oldTab: profils});
		});
	}

	sort(name, sortStatus) {
		let oldTab = this.state.oldTab;
		let sortedTab = [];
		let maxmin = oldTab[0][name];
		let index = 0;
		while(oldTab.length > 0) {
			maxmin = oldTab[0][name];
			for (let i = 0; i < oldTab.length; i++) {
				if (name.localeCompare("balance") === 0) {
					if (parseFloat(oldTab[i][name]) >= parseFloat(maxmin) && sortStatus === true) {
							maxmin = oldTab[i][name];
							index = i;
						}
					else if (parseFloat(oldTab[i][name]) <= parseFloat(maxmin) && sortStatus === false) {
							maxmin = oldTab[i][name];
							index = i;
						}
				} else {
					if (maxmin.localeCompare(oldTab[i][name]) >= 0 && sortStatus === true) {
							maxmin = oldTab[i][name]; 
							index = i;
						}
					else if (maxmin.localeCompare(oldTab[i][name]) <= 0 && sortStatus === false) {
							maxmin = oldTab[i][name];
							index = i;
						}
				}
			}
			sortedTab.push(oldTab[index]);
			oldTab.splice(index, 1);
		}
		this.setState({oldTab: sortedTab});
	}

	filter(str){
		const filteredTab = [];

		for (let i = 0; i < this.state.tab.length; i++) {
			if (this.state.tab[i].lastname.toUpperCase().includes(str.target.value.toUpperCase()) || this.state.tab[i].firstname.toUpperCase().includes(str.target.value.toUpperCase())) {
				filteredTab.push(this.state.tab[i]);
			}
		}
		this.setState({oldTab : filteredTab});
	}

	displayModal(profil){
		console.log(profil);
		this.setState({mdDisplay: profil});
	}

	closeModal(){
		this.setState({mdDisplay: ''});
	}


	render() {
		return (
		  //URL : <input id="url" type="text" value="https://demo0050088.mockable.io/simple/profils"><br>
		  	<div>
		  		Filter : <input onChange={event => this.filter(event)} type="text"/>
			  <table>
		        <thead>
		          <tr>
		            <th>Picture</th>
		            <TableSortHead name="lastname" callback={(sortStatus) => this.sort("lastname", sortStatus)}/>
		            <TableSortHead name="firstname" callback={(sortStatus) => this.sort("firstname", sortStatus)}/>
		            <TableSortHead name="balance" callback={(sortStatus) => this.sort("balance", sortStatus)} />
		          </tr>
		        </thead>
				<tbody>
					
					<ProfilList profils={this.state.oldTab} callback={(profil) => this.displayModal(profil)}/>
				</tbody>
		      </table>
		      <aside>
		      	<Modal profil={this.state.mdDisplay} closeModal={()=> this.closeModal()}/>
		      </aside>
			</div>
		);
	}
}

 export default TableBody;