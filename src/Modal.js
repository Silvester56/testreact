import React from 'react';

class Modal extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			profil: this.props.profil
		};
	}

	render() {
		if (this.state.profil.id) {
			return (
				<div>
				<span onClick={() => this.setState({profil: {}})}>Fermer [X]</span><br/>
				Nom: {this.state.profil.lastname}<br/>
				Prenom: {this.state.profil.firstname}<br/>
				Balance	{this.state.profil.balance}<br/>
				Age: {this.state.profil.age}<br/>
				Email: {this.state.profil.email}<br/>
				Adresse: {this.state.profil.address}<br/>
				Societé: {this.state.profil.company}
				</div>
				);
		} else {
			return (<span>no modal</span>);
		}
	}
}

 export default Modal;