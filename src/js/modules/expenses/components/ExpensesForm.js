import { h, Fragment } from 'preact';

function ExpensesForm({ onSubmit, onInput, value, error }) {
    return (
      <Fragment>
        <div className="form-container">
          <h3 className="form-title">Add new transaction</h3>
          <form className="expenses" autoComplete="off" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" name="name" id="name" placeholder="Enter text" value={value.name} onInput={onInput} />
            </div>
            <div class="form-control">
                <label htmlFor="amount">
                    Amount <br />
                    (negative - expense, positive - income)
                </label>
                <input type="number" id="amount" name="amount" placeholder="Enter amount..." value={value.amount} onInput={onInput}  />
            </div>
            <button type="submit">+ Add Expense</button>
            {error && <div>Error</div>}
        </form>
        </div>
      </Fragment>
    );
}

export default ExpensesForm;
