import { h } from 'preact';
import {calculateExpenses} from '../src/js/modules/expenses/components/IncomeExpense';
import { render } from '@testing-library/preact';

describe('calculateExpenses', () => {

    it('should calculate total income and total expenses correctly', () => {
        const expenses = [
            { amount: 100 },
            { amount: -50 },
            { amount: -25 },
            { amount: 75 }
        ];
  
        const result = calculateExpenses(expenses);
  
        expect(result.totalIncome).toBe(175);
        expect(result.totalExpenses).toBe(-75);
    });
  
    //     it('should return 0 for totalIncome and totalExpenses if no expenses are provided', () => {
    //       const result = calculateExpenses([]);
  
    //       expect(result.totalIncome).toBe(0);
    //       expect(result.totalExpenses).toBe(0);
    //     });
  
    //     it('should handle expenses with non-numeric amount values', () => {
    //       const expenses = [
    //         { amount: 100 },
    //         { amount: 'invalid' },
    //         { amount: -25 },
    //         { amount: 75 }
    //       ];
  
    //       const result = calculateExpenses(expenses);
  
//       expect(result.totalIncome).toBe(175);
//       expect(result.totalExpenses).toBe(-25);
//     });
});
  