import React from 'react';

class ListApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.displayName = "ListApp";
		this.filterList = this.filterList.bind(this);
	}

	filterList(list) {
		let filtered = list.filter((item) => {
			return this.props.regexpat.test(item);
		});
		console.log(filtered);
		return filtered;
	}

	render() {
		return (
			<div>
				{this.filterList(this.props.list).map(
					(item, idx) => {
						return <li key={idx}><button onClick={() => this.deleteItem(item)}>x</button> {item}</li>;
				})}
			</div>
		);
	}
}
ListApp.propTypes = {
	list: React.PropTypes.array.isRequired,
	regexpat: React.PropTypes.object.isRequired
};
export default ListApp;