import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Target } from 'lucide-react';
import StatCard from './StatCard';
import RecentTransactions from './RecentTransactions';
import BudgetOverview from './BudgetOverview';
import { transactions, categories, budgets } from '../../data/mockData';

const Dashboard: React.FC = () => {
  // Calculate statistics
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const netWorth = totalIncome - totalExpenses;
  const totalBudget = budgets.reduce((sum, b) => sum + b.amount, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Financial Dashboard</h2>
        <p className="text-gray-600 mt-1">Track your financial health and spending patterns</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Income"
          value={`$${totalIncome.toLocaleString()}`}
          change="+12.5% from last month"
          changeType="positive"
          icon={TrendingUp}
          iconColor="bg-green-500"
        />
        <StatCard
          title="Total Expenses"
          value={`$${totalExpenses.toLocaleString()}`}
          change="-3.2% from last month"
          changeType="positive"
          icon={TrendingDown}
          iconColor="bg-red-500"
        />
        <StatCard
          title="Net Worth"
          value={`$${netWorth.toLocaleString()}`}
          change="+8.1% from last month"
          changeType="positive"
          icon={DollarSign}
          iconColor="bg-blue-500"
        />
        <StatCard
          title="Budget Used"
          value={`$${budgets.reduce((sum, b) => sum + b.spent, 0).toLocaleString()}`}
          change={`of $${totalBudget.toLocaleString()}`}
          changeType="neutral"
          icon={Target}
          iconColor="bg-purple-500"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RecentTransactions transactions={transactions} categories={categories} />
        </div>
        <div>
          <BudgetOverview budgets={budgets} categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;