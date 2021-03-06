import React from 'react';

class TableH extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sortred: false
		};
	}

	sort() {
		this.setState({sortred: !this.state.sortred});
		this.props.callback();
	}

	render() {
		return (
		  <th onClick={() => this.sort()}>{this.props.children}</th>
		);
	}
}

 export default TableH;
