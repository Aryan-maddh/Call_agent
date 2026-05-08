import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { revenueData } from '../../data/mockData';

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-[5px] shadow-card p-6 flex flex-col">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h2 className="text-[#00485A] font-semibold text-xl">Revenue Report</h2>
          <div className="flex items-center gap-5 mt-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#EE6832] opacity-80" />
              <span className="text-sm font-medium text-black font-poppins">Profit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#13B7E2] opacity-30 border border-[#13B7E2]" />
              <span className="text-sm font-medium text-black font-poppins">Loss</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#00485A] font-bold text-2xl">$25,825</span>
          <button className="bg-[#00485A] text-white text-xs font-medium px-4 py-2 rounded-[5px] hover:bg-[#003a49] transition-colors shadow-sm whitespace-nowrap">
            Increase Budget
          </button>
        </div>
      </div>
      <div className="border-b border-dashed border-[#B5B5B5] mb-4 mt-2" />
      <div className="flex-1" style={{ height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueData} barGap={3} barCategoryGap="30%">
            <CartesianGrid strokeDasharray="0" vertical={false} stroke="#E5E7EB" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#B5B5B5', fontSize: 14, fontFamily: 'Roboto', fontWeight: 500 }} />
            <YAxis tickFormatter={(v) => `${v}k`} axisLine={false} tickLine={false} tick={{ fill: '#B5B5B5', fontSize: 14, fontFamily: 'Roboto', fontWeight: 500 }} domain={[0, 100]} ticks={[0, 20, 50, 60, 80, 100]} />
            <Tooltip
              cursor={{ fill: 'rgba(0,0,0,0.04)' }}
              contentStyle={{ borderRadius: 8, border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', fontSize: 13 }}
              formatter={(value, name) => [`${value}k`, name === 'profit' ? 'Profit' : 'Loss']}
            />
            <Bar dataKey="profit" fill="#EE6832" fillOpacity={0.8} radius={[4, 4, 0, 0]} maxBarSize={28} />
            <Bar dataKey="loss" fill="#13B7E2" fillOpacity={0.3} radius={[4, 4, 0, 0]} maxBarSize={28} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
