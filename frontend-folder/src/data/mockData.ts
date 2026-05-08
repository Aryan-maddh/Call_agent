export const revenueData = [
  { month: 'Jan', profit: 100, loss: 68 },
  { month: 'Feb', profit: 81, loss: 55 },
  { month: 'Mar', profit: 85, loss: 35 },
  { month: 'Apr', profit: 71, loss: 89 },
  { month: 'May', profit: 81, loss: 55 },
  { month: 'Jun', profit: 45, loss: 30 },
  { month: 'Jul', profit: 71, loss: 36 },
  { month: 'Aug', profit: 85, loss: 58 },
  { month: 'Sep', profit: 78, loss: 53 },
];

export const earningsChartData = [
  { day: 'Mon', value: 20 },
  { day: 'Tue', value: 28 },
  { day: 'Wed', value: 42 },
  { day: 'Thu', value: 55 },
  { day: 'Fri', value: 35 },
  { day: 'Sat', value: 48 },
  { day: 'Sun', value: 30 },
];

export const profitChartData = [
  { pt: 1, v: 30 }, { pt: 2, v: 55 }, { pt: 3, v: 38 },
  { pt: 4, v: 65 }, { pt: 5, v: 45 }, { pt: 6, v: 72 },
];

export const popularProducts = [
  { id: 1, name: 'Logic Wireless Mouse', category: 'Mouse', price: '$17,678', color: '#FF6B6B' },
  { id: 2, name: 'PS Wireless Controller', category: 'Game', price: '$15,500', color: '#4ECDC4' },
  { id: 3, name: 'Ximi Keyboard', category: 'Keyboard', price: '$10,500', color: '#45B7D1' },
  { id: 4, name: 'Audia Tech Earphone', category: 'Earphone', price: '$8,456', color: '#96CEB4' },
  { id: 5, name: 'Sams S14 Pro', category: 'Smartphone', price: '$7,189', color: '#FFEAA7' },
  { id: 6, name: 'Sams S13 Pro', category: 'Smartphone', price: '$7,189', color: '#DDA0DD' },
];

export const earningsItems = [
  { icon: 'graph', label: 'Net Profit', sub: '12.4k Sales', value: '$1,619', pct: '+18.6%', positive: true },
  { icon: 'dollar', label: 'Total Income', sub: 'Sales, Affiliation', value: '$3,571', pct: '+39.6%', positive: true },
  { icon: 'chart', label: 'Total Expenses', sub: 'ADVT, Marketing', value: '$2,628', pct: '+18.6%', positive: true },
];

export const transactions = [
  { id: 1, type: 'Wallet',            description: 'Starbucks',        amount: '$180', positive: true  },
  { id: 2, type: 'Bank Transfer',     description: 'Add Money',         amount: '$20',  positive: false },
  { id: 3, type: 'Paypal',            description: 'Client Payment',    amount: '$180', positive: true  },
  { id: 4, type: 'Bank Transactions', description: 'Refund',            amount: '$20',  positive: false },
  { id: 5, type: 'Master Card',       description: 'Ordered iPhone 13', amount: '$180', positive: true  },
  { id: 6, type: 'Paypal',            description: 'Client Payment',    amount: '$20',  positive: false },
  { id: 7, type: 'Wallet',            description: 'Starbucks',         amount: '$180', positive: true  },
  { id: 8, type: 'Bank Transfer',     description: 'Add Money',         amount: '$20',  positive: false },
];

export const invoices = [
  { id: '#4323', status: true,  total: '$2869', date: '07/12/2020' },
  { id: '#4126', status: false, total: '$3658', date: '02/05/2021' },
  { id: '#4785', status: true,  total: '$4125', date: '05/31/2020' },
  { id: '#4235', status: true,  total: '$2365', date: '03/22/2021' },
  { id: '#4444', status: true,  total: '$9856', date: '06/01/2020' },
  { id: '#4142', status: false, total: '$4256', date: '12/30/2020' },
  { id: '#4548', status: true,  total: '$2365', date: '10/29/2020' },
  { id: '#4897', status: true,  total: '$2354', date: '03/23/2021' },
  { id: '#4961', status: false, total: '$2365', date: '10/19/2020' },
];

export const deliveries = [
  {
    sender: { name: 'Myrtle Ullrich', address: '101 Boulder, California(CA) 93959' },
    receiver: { name: 'Barry Schowalter', address: '939 Orange, California(CA) 92118' },
  },
  {
    sender: { name: 'Veronica Herman', address: '712 Windsor, California(CA) 95492' },
    receiver: { name: 'Helen Jacobs', address: '—' },
  },
];
