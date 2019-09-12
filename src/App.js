import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import ExpenseCard from './components/ExpenseCard';
import axios from 'axios';

class App extends React.Component {
	state = {
		username: 'dcdcdcd',
		expenseDescription: '',
		expenseAmount: 0
	};

	userRegister = () => {
		axios.post('http://localhost:3000/user/create', {
			username: this.state.username,
			description: this.state.expenseDescription,
			amount: this.state.expenseAmount
		});
	};

	render = () => {
		return (
			<div className="App">
				<div class="container">
					<div class="userSection">
						<div class="userTitle">
							<p>Users</p>
						</div>
						<div class="userRowHeader">
							<p>User</p>
							<p>Expenses</p>
						</div>
						<UserCard username={this.state.username} price={this.state.expenseAmount} />
					</div>
					<div class="expenseSection">
						<p class="expenseTitle">Expenses</p>
						<div class="expenseRowHeader">
							<p class="userExpenseCard">User</p>
							<p class="descriptionExpenseCard">Description</p>
							<p class="amountExpenseCard">Amount</p>
						</div>
						<ExpenseCard
							username={this.state.username}
							description={this.state.expenseDescription}
							amount={this.state.expenseAmount}
						/>
					</div>
					<div class="expenseListSection">
						<div>
							<p>New Expense</p>
						</div>
						<div class="expenseListInput">
							<input
								style={{ height: 40 }}
								placeholder="Username"
								onChange={(event) => {
									this.setState({ username: event.target.value });
								}}
							/>
							<input
								style={{ height: 40 }}
								placeholder="Description"
								onChange={(event) => {
									this.setState({ expenseDescription: event.target.value });
								}}
							/>
							<input
								style={{ height: 40 }}
								placeholder="Amount"
								onChange={(event) => {
									this.setState({ expenseAmount: event.target.value });
								}}
							/>
						</div>
						<button
							style={{ height: 50, width: 100, backgroundColor: '#5b48d3', color: 'white' }}
							onClick={this.userRegister}
						>
							ADD EXPENSE
						</button>
					</div>
				</div>
			</div>
		);
	};
}

export default App;
