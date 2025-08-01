import React, { useState } from 'react';
import LoginPage from './components/Auth/LoginPage';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';
import TransactionList from './components/Transactions/TransactionList';
import GoalsList from './components/Goals/GoalsList';
import BudgetManagement from './components/Budget/BudgetManagement';
import FinancialAnalytics from './components/Analytics/FinancialAnalytics';
import { transactions, categories, budgets, financialGoals } from './data/mockData';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email: string) => {
    setUserEmail(email);
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'transactions':
        return <TransactionList transactions={transactions} categories={categories} />;
      case 'budgets':
        return <BudgetManagement budgets={budgets} categories={categories} />;
      case 'goals':
        return <GoalsList goals={financialGoals} />;
      case 'analytics':
        return <FinancialAnalytics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} onTabChange={setActiveTab} userEmail={userEmail} />
      {renderContent()}
    </div>
  );
}

export default App;