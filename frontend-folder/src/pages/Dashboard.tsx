import { ShoppingBag, UserPlus, ShoppingCart, DollarSign } from 'lucide-react';
import Breadcrumb from '../components/layout/Breadcrumb';
import StatCard from '../components/dashboard/StatCard';
import RevenueChart from '../components/dashboard/RevenueChart';
import ExpensesWidget from '../components/dashboard/ExpensesWidget';
import ProfitWidget from '../components/dashboard/ProfitWidget';
import GeneratedLeads from '../components/dashboard/GeneratedLeads';
import PopularProducts from '../components/dashboard/PopularProducts';
import EarningsReport from '../components/dashboard/EarningsReport';
import SalesByCountries from '../components/dashboard/SalesByCountries';
import Transactions from '../components/dashboard/Transactions';
import InvoiceTable from '../components/dashboard/InvoiceTable';

const statCards = [
  { icon: <ShoppingBag size={22} className="text-white" />, iconBg: 'bg-[#FF6632]', label: 'Sales', value: '230k' },
  { icon: <UserPlus size={22} className="text-white" />, iconBg: 'bg-[#3DA1CF]', label: 'Customers', value: '8.549k' },
  { icon: <ShoppingCart size={22} className="text-white" />, iconBg: 'bg-[#22CAAD]', label: 'Products', value: '1.423k' },
  { icon: <DollarSign size={22} className="text-white" />, iconBg: 'bg-[#EB953D]', label: 'Revenue', value: '$9745' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <Breadcrumb />

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {statCards.map(card => <StatCard key={card.label} {...card} />)}
      </div>

      {/* Revenue + Right Widgets */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_230px_230px] gap-5">
        <RevenueChart />
        <div className="flex xl:flex-col gap-5">
          <ExpensesWidget />
          <ProfitWidget />
        </div>
      </div>

      {/* Generated Leads full width on large, placed under right widgets */}
      <div className="xl:hidden">
        <GeneratedLeads />
      </div>

      {/* Row: Popular Products | Earnings | Sales by Countries | Generated Leads (xl only) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_auto] gap-5 items-start">
        <PopularProducts />
        <EarningsReport />
        <SalesByCountries />
        <div className="hidden xl:block w-[240px]">
          <GeneratedLeads />
        </div>
      </div>

      {/* Bottom: Transactions + Invoice Table */}
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-5 lg:items-start">
        <Transactions />
        <InvoiceTable />
      </div>
    </div>
  );
}
