import { h, render } from 'preact';
import { Router, Route, Link } from 'preact-router';
import ExpensesContainer from '../expenses/containers/ExpensesContainer';
import AddExpenseContainer from './containers/AddExpenseContainer';
import Budget from './components/Budget';
import baseroute from '../../../baseroute';

const App = () => (
  <div>
    {/* <nav>
      <Link href="/">Home</Link>
      <Link href="/expenses">Expenses</Link>
    </nav> */}
    <Router>
      <Route path={`${baseroute}/`} component={ExpensesContainer} />
      <Route path={`${baseroute}/expenses`} component={AddExpenseContainer} />
      <Route path={`${baseroute}/budget`} component={Budget} />
    </Router>
  </div>
);

export default App;

