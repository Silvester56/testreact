import React from 'react';


class ProfilList extends React.Component {

	profilItem(profil, index){
			return (<tr key={index} id={profil.id} onClick={() => this.props.callback(profil)}>
				<td><img src={profil.picture} alt="avatar"/></td>
				<td>{profil.lastname}</td>
				<td>{profil.firstname}</td>
				<td>{profil.balance}</td></tr>);
		}

	profilList() {
		return this.props.profils.map((profil, index) => this.profilItem(profil, index));
	}

	render(){
		return(
			this.profilList()
		);
	}
}

export default ProfilList;