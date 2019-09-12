import React from 'react';
import '../App.css';
class ExpenseCard extends React.Component {
	render = () => {
		return (
			<div class="expenseCard">
				<p class="userExpenseCard">{this.props.username}</p>
				<p class="descriptionExpenseCard">{this.props.description}</p>
				<p>{this.props.amount}</p>
			</div>
		);
	};
}

export default ExpenseCard;
