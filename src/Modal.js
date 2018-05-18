import React from 'react';

class Modal extends React.Component {

	render() {
		if (this.props.profil.id) {
			return (
				<div>
				<span onClick={() => this.props.callback()}>Fermer [X]</span><br/>
				Nom: {this.props.profil.lastname}<br/>
				Prenom: {this.props.profil.firstname}<br/>
				Balance	{this.props.profil.balance}<br/>
				Age: {this.props.profil.age}<br/>
				Email: {this.props.profil.email}<br/>
				Adresse: {this.props.profil.address}<br/>
				Societé: {this.props.profil.company}
				</div>
				);
		} else {
			return ('');
		}
	}
}

 export default Modal;