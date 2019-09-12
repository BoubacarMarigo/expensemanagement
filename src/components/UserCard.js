import React from 'react';
import '../App.css';
class UserCard extends React.Component {
	render = () => {
		return (
			<div class="userCard">
				<p>{this.props.username}</p>
				<p>{this.props.price}</p>
			</div>
		);
	};
}

export default UserCard;
