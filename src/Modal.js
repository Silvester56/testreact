import React from 'react';

class Modal extends React.Component {

	render() {
		if (this.props.profil.id) {
			return (
				<div class="modal">
					<div class="modal-content">
					<button class="modal-button" onClick={() => this.props.callback()}>Fermer</button><br/>
					<table class="modal-table">
						<tr><td>Nom</td><td>{this.props.profil.lastname}</td></tr>
						<tr><td>Prenom</td><td>{this.props.profil.firstname}</td></tr>
						<tr><td>Balance</td><td>{this.props.profil.balance}</td></tr>
						<tr><td>Age</td><td>{this.props.profil.age}</td></tr>
						<tr><td>Email</td><td>{this.props.profil.email}</td></tr>
						<tr><td>Adresse</td><td>{this.props.profil.address}</td></tr>
						<tr><td>Societé</td><td>{this.props.profil.company}</td></tr>
					</table>
					</div>
				</div>
				);
		} else {
			return ('');
		}
	}
}

 export default Modal;
