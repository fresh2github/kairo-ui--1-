import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, PiggyBank, TrendingUp, TrendingDown, DollarSign, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useLanguage } from '../contexts/LanguageContext';

interface SpendWiseProps {
  onBack: () => void;
}

export default function SpendWise({ onBack }: SpendWiseProps) {
  const { t } = useLanguage();
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const stats = [
    { label: 'This Month', amount: '₹12,450', trend: 'up', color: 'from-red-500 to-pink-500' },
    { label: 'Budget Left', amount: '₹7,550', trend: 'down', color: 'from-emerald-500 to-green-500' },
    { label: 'Savings', amount: '₹5,200', trend: 'up', color: 'from-blue-500 to-cyan-500' },
  ];

  const recentTransactions = [
    { id: 1, title: 'Groceries', amount: -450, category: 'Food', date: 'Today' },
    { id: 2, title: 'Salary', amount: 25000, category: 'Income', date: 'Yesterday' },
    { id: 3, title: 'Transport', amount: -120, category: 'Travel', date: '2 days ago' },
    { id: 4, title: 'Shopping', amount: -2100, category: 'Shopping', date: '3 days ago' },
  ];

  return (
    <div className="min-h-screen pb-20 bg-black">
      {/* Header */}
      <div className="premium-glass border-b border-gold/20 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto p-4 md:p-6">
          <div className="flex items-center gap-4">
            <Button
              onClick={onBack}
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-gold"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <PiggyBank className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl gradient-text-premium">{t('spendWise')}</h1>
                <p className="text-sm text-gray-400">{t('spendWiseTagline')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="premium-card rounded-2xl p-6"
            >
              <p className="text-sm text-gray-400 mb-2">{stat.label}</p>
              <p className="text-2xl text-white mb-2">{stat.amount}</p>
              <div className="flex items-center gap-2">
                {stat.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-400" />
                )}
                <span className={`text-sm ${stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
                  12.5%
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add Transaction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="premium-card rounded-2xl p-6"
        >
          <h3 className="text-lg text-white mb-4">Add Transaction</h3>
          <div className="space-y-4">
            <Input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-black/60 border-gold/30 text-white placeholder:text-gray-500 rounded-xl h-12"
            />
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="bg-black/60 border-gold/30 text-white rounded-xl h-12">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="bg-black/95 border-gold/30">
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="transport">Transport</SelectItem>
                <SelectItem value="shopping">Shopping</SelectItem>
                <SelectItem value="income">Income</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full gold-gradient text-black hover:shadow-lg hover:shadow-gold/30 h-12 rounded-xl">
              <Plus className="w-5 h-5 mr-2" />
              Add Transaction
            </Button>
          </div>
        </motion.div>

        {/* Recent Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="premium-card rounded-2xl p-6"
        >
          <h3 className="text-lg text-white mb-4">Recent Transactions</h3>
          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-gold/10"
              >
                <div>
                  <p className="text-white">{transaction.title}</p>
                  <p className="text-sm text-gray-400">{transaction.date}</p>
                </div>
                <p className={`text-lg ${transaction.amount > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
