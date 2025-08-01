import { Transaction, Category, Budget, FinancialGoal } from '../types/finance';

export const categories: Category[] = [
  { id: '1', name: 'Salary', color: '#10B981', type: 'income' },
  { id: '2', name: 'Freelance', color: '#34D399', type: 'income' },
  { id: '3', name: 'Investments', color: '#6EE7B7', type: 'income' },
  { id: '4', name: 'Food & Dining', color: '#EF4444', type: 'expense', budget: 500 },
  { id: '5', name: 'Transportation', color: '#F97316', type: 'expense', budget: 200 },
  { id: '6', name: 'Shopping', color: '#8B5CF6', type: 'expense', budget: 300 },
  { id: '7', name: 'Entertainment', color: '#EC4899', type: 'expense', budget: 150 },
  { id: '8', name: 'Bills & Utilities', color: '#6B7280', type: 'expense', budget: 400 },
  { id: '9', name: 'Healthcare', color: '#3B82F6', type: 'expense', budget: 100 },
];

export const transactions: Transaction[] = [
  { id: '1', amount: 3500, description: 'Monthly Salary', category: 'Salary', type: 'income', date: '2024-01-01' },
  { id: '2', amount: 800, description: 'Freelance Project', category: 'Freelance', type: 'income', date: '2024-01-05' },
  { id: '3', amount: 45.50, description: 'Grocery Shopping', category: 'Food & Dining', type: 'expense', date: '2024-01-02' },
  { id: '4', amount: 120, description: 'Gas Station', category: 'Transportation', type: 'expense', date: '2024-01-03' },
  { id: '5', amount: 89.99, description: 'Online Shopping', category: 'Shopping', type: 'expense', date: '2024-01-04' },
  { id: '6', amount: 25, description: 'Movie Tickets', category: 'Entertainment', type: 'expense', date: '2024-01-06' },
  { id: '7', amount: 340, description: 'Electric Bill', category: 'Bills & Utilities', type: 'expense', date: '2024-01-07' },
  { id: '8', amount: 65, description: 'Doctor Visit', category: 'Healthcare', type: 'expense', date: '2024-01-08' },
  { id: '9', amount: 200, description: 'Investment Return', category: 'Investments', type: 'income', date: '2024-01-10' },
  { id: '10', amount: 35.75, description: 'Restaurant Dinner', category: 'Food & Dining', type: 'expense', date: '2024-01-12' },
];

export const budgets: Budget[] = [
  { id: '1', categoryId: '4', amount: 500, period: 'monthly', spent: 81.25 },
  { id: '2', categoryId: '5', amount: 200, period: 'monthly', spent: 120 },
  { id: '3', categoryId: '6', amount: 300, period: 'monthly', spent: 89.99 },
  { id: '4', categoryId: '7', amount: 150, period: 'monthly', spent: 25 },
  { id: '5', categoryId: '8', amount: 400, period: 'monthly', spent: 340 },
  { id: '6', categoryId: '9', amount: 100, period: 'monthly', spent: 65 },
];

export const financialGoals: FinancialGoal[] = [
  {
    id: '1',
    title: 'Emergency Fund',
    targetAmount: 10000,
    currentAmount: 6500,
    deadline: '2024-12-31',
    description: '6 months of expenses'
  },
  {
    id: '2',
    title: 'Vacation Fund',
    targetAmount: 3000,
    currentAmount: 1200,
    deadline: '2024-08-15',
    description: 'Europe trip savings'
  },
  {
    id: '3',
    title: 'New Car',
    targetAmount: 25000,
    currentAmount: 8500,
    deadline: '2025-06-30',
    description: 'Down payment for new vehicle'
  }
];