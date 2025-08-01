import React from 'react';
import { Budget, Category } from '../../types/finance';

interface BudgetOverviewProps {
  budgets: Budget[];
  categories: Category[];
}

const BudgetOverview: React.FC<BudgetOverviewProps> = ({ budgets, categories }) => {
  const getCategoryById = (id: string) => categories.find(cat => cat.id === id);

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-red-500';
    if (percentage >= 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget Overview</h3>
      <div className="space-y-4">
        {budgets.map((budget) => {
          const category = getCategoryById(budget.categoryId);
          const percentage = (budget.spent / budget.amount) * 100;
          
          return (
            <div key={budget.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: category?.color || '#6B7280' }}
                  ></div>
                  <span className="text-sm font-medium text-gray-900">{category?.name}</span>
                </div>
                <span className="text-sm text-gray-600">
                  ${budget.spent.toFixed(2)} / ${budget.amount.toFixed(2)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(percentage)}`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-500">
                {percentage.toFixed(1)}% used
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BudgetOverview;