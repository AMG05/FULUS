import { h } from 'preact';
import ExpensesContainer from '../containers/ExpensesContainer';
import AddExpenseContainer from '../containers/AddExpenseContainer';


export const Balance = ({NewExpense}) => {

    const amounts = Newexpense.map(Newexpense => Newexpense.amount);
    const total = Newexpense.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div className="flex">
            <div className="item">
                <div className="balance">
                <h4>Your balance</h4>
                <h1>£{total}</h1>
                </div>

                <div className="flex">
                    
                </div>
            </div>
            

        </div>
    );
}