import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import { profitChartData } from '../../data/mockData';

export default function ProfitWidget() {
  return (
    <div className="bg-white rounded-[5px] shadow-card p-5 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="text-[#00485A] font-semibold text-xl">Profit</p>
          <p className="text-[#5B5B5B] text-sm font-medium">Last Month</p>
        </div>
      </div>
      <div style={{ height: 100 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={profitChartData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#13B7E2" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#13B7E2" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="v" stroke="#13B7E2" strokeWidth={2} fill="url(#profitGradient)" dot={{ fill: '#13B7E2', r: 4, strokeWidth: 0 }} />
            <Tooltip contentStyle={{ fontSize: 12, borderRadius: 6, border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} formatter={(v) => [`$${v}k`]} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-baseline gap-3 mt-2">
        <span className="text-[#00485A] font-semibold text-xl">624k</span>
        <span className="text-[#00C678] text-sm font-medium">+8.24%</span>
      </div>
    </div>
  );
}
