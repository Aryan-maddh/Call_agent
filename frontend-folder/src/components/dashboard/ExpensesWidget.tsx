import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [{ value: 78 }, { value: 22 }];

export default function ExpensesWidget() {
  return (
    <div className="bg-white rounded-[5px] shadow-card p-5 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-1">
        <div>
          <p className="text-[#00485A] font-semibold text-xl">82.5k</p>
          <p className="text-[#5B5B5B] text-sm font-medium">Expenses</p>
        </div>
      </div>
      <div className="relative flex items-center justify-center" style={{ height: 120 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={42} outerRadius={55} startAngle={90} endAngle={-270} dataKey="value" strokeWidth={0}>
              <Cell fill="#EE6832" fillOpacity={0.85} />
              <Cell fill="#E6EDEF" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#00485A] font-semibold text-xl">78%</span>
        </div>
      </div>
      <p className="text-[#5B5B5B] text-sm text-center mt-2 leading-snug">$21k Expenses more than last month</p>
    </div>
  );
}
