import React from 'react';
import ReactDOM from 'react-dom';

import ListApp from './listApp';

class GroceryApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {value: ''};
		this.regsearch = new RegExp("", 'g');
		this.newItem = "";
		this.displayName = "GroceryApp";
		this.handleChange = this.handleChange.bind(this);
		this.createItem = this.createItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
		this.regsearch = new RegExp(event.target.value, 'g');
	}

	createItem() {
		this.setState({});
		this.props.list.push(this.state.value);
	}

	deleteItem(item) {
		this.setState({});
		this.props.list.splice(this.props.list.indexOf(item), 1);
	}

	render() {
		return (
			<div>
				<input 
					type="text" 
					value={this.state.value} 
					onChange={this.handleChange}
				/>
				<button onClick={this.createItem}>Add Item</button>
				<ul>
					<ListApp
						list={this.props.list}
						regexpat={this.regsearch}
					/>
				</ul>
			</div>
		);
	}
}
GroceryApp.propTypes = {
	list: React.PropTypes.array.isRequired
};
export default GroceryApp;