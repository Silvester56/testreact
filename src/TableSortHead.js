import React from 'react';

class TableSortHead extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			sortStatus: false
		};
	}

	checkSortStatus(){
		this.setState({sortStatus: !this.state.sortStatus});
		this.props.callback(this.state.sortStatus);
	}

	render(){
		return (
			<th id="lastname" onClick={() => this.checkSortStatus()}>{this.props.name}</th>
		);
	}
}

export default TableSortHead;