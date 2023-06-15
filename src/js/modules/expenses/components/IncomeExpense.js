import { h } from 'preact';


function calculateExpenses (expenses)  {

    
    let totalIncome = 0;
    let totalExpenses = 0;

    if (expenses){
        expenses.forEach(item => {
            const n = Number(item.amount);
            if (n >= 0){
                totalIncome += n;
            } else {
                totalExpenses += n;
            }
        });
    }

    return {
        totalIncome,
        totalExpenses
    };
  
  
}

export default function IncomeExpense({ expenses }) {

    const totals = calculateExpenses(expenses);
 
   
    return (
       
        
        <div class="inc-exp-container">
           
            
        <div>
          <h4>Income</h4>
          <p id="money-plus" class="money plus">£{totals.totalIncome}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" class="money minus">£{totals.totalExpenses}</p>
        </div>
        
      </div>
      
        
       
    );
}


