import { MoreHorizontal, TrendingUp, DollarSign, BarChart2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';
import { earningsItems, earningsChartData } from '../../data/mockData';

const iconMap = [TrendingUp, DollarSign, BarChart2];

export default function EarningsReport() {
  return (
    <div className="bg-white rounded-[5px] shadow-card p-5 flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-[#00485A] font-semibold text-xl">Earning Reports</h3>
          <p className="text-[#5B5B5B] text-sm font-medium mt-1">Weekly Earnings Overview</p>
        </div>
        <button className="text-[#5B5B5B] hover:text-[#00485A] transition-colors p-1">
          <MoreHorizontal size={20} />
        </button>
      </div>
      <div className="space-y-2">
        {earningsItems.map((item, i) => {
          const Icon = iconMap[i];
          return (
            <div key={item.label} className="flex items-center gap-3 bg-gray-50 rounded-[3px] px-3 py-3">
              <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-[#5B5B5B]" />
              </div>
              <div className="w-px h-6 bg-[#5B5B5B] opacity-30 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-[#1D1F2C] font-medium text-sm truncate">{item.label}</p>
                <p className="text-[#5B5B5B] text-xs truncate">{item.sub}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-[#1D1F2C] font-medium text-sm">{item.value}</p>
                <p className="text-[#1F9900] text-xs">{item.pct}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex-1" style={{ height: 160 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={earningsChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#B5B5B5', fontSize: 11 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#B5B5B5', fontSize: 11 }} tickFormatter={(v) => `${v}k`} />
            <Tooltip contentStyle={{ fontSize: 12, borderRadius: 6, border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} formatter={(v) => [`$${v}k`]} />
            <Line type="monotone" dataKey="value" stroke="#13B7E2" strokeWidth={2} dot={{ fill: '#13B7E2', r: 3, strokeWidth: 0 }} activeDot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
