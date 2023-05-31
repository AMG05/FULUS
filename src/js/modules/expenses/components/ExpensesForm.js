import { h, useState} from 'preact';

const ExpensesForm = () => {

    const [expenses, setExpenses] = useState('');
    const [text, setText] = useState('');

    const handleExpenseChange = (event) => {
        setExpenses(event.target.value);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    return (
        <form className="comment-form">
            <input type="text" placeholder="Your name" value={expenses} onChange={handleExpenseChange}/>
            <input type="text" placeholder="Say something" value={text} onChange={handleTextChange}/>
            <input type="submit" value="Post"/>
        </form>

    );
};

export default ExpensesForm;