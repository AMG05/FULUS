import { h } from 'preact';
import ExpensesContainer from '../../expensesVS2/containers/ExpensesContainer';

function ExpensesList () {
    

    return (
<body>
    <div>
    <h3 className="form-title">Add new transaction</h3>
        <form className="expenses" autoComplete="off">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
              type="text"
              name="item"
              placeholder="Enter details"
          />
          <div className="form-control">
            <label htmlFor="amount">
              Amount <br />
              (negative - expense, positive - income)
            </label>
            <input type="number" placeholder="Enter amount..." />
          </div>
          <button type="submit">+ Add Expense</button>
          </div>
        </form>
        <p>I wonder if this will render and then why it goes away</p>
    </div>
</body>
    );
}

export default ExpensesList;


