import { h, Fragment } from 'preact';

function ExpensesFormEdit({ onSubmit, onInput, value }) {
    return (
      <Fragment>
          <h3 class="form-title">Add new transaction</h3>
          <form class="expenses" autoComplete="off" onSubmit={onSubmit}>
            <div class="form-control">
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
            <button type="submit">+ Edit Expense</button>
        </form>
      </Fragment>
    );
}

export default ExpensesFormEdit;