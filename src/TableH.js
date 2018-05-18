import React from 'react';

class TableH extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sortred: false
		};
	}

	sort() {
		this.state.sortred = !this.state.sortred;
		this.props.callback(this.state.sortred);
	}

	render() {
		return (
		  <th onClick={() => this.sort()}>{this.props.name}</th>
		);
	}
}

 export default TableH;