import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [{ value: 75 }, { value: 25 }];

export default function GeneratedLeads() {
  return (
    <div className="bg-white rounded-[5px] shadow-card p-5 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-[#00485A] font-semibold text-xl">Generated Leads</h3>
          <p className="text-[#5B5B5B] text-sm font-medium mt-1">Monthly Report</p>
          <p className="text-[#00485A] font-semibold text-2xl mt-4">4,350</p>
          <p className="text-[#00C678] text-base font-medium mt-1">15.8%</p>
        </div>
        <div className="relative flex-shrink-0" style={{ width: 140, height: 140 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={50} outerRadius={68} startAngle={90} endAngle={-270} dataKey="value" strokeWidth={0}>
                <Cell fill="#EE6832" fillOpacity={0.8} />
                <Cell fill="#EE6832" fillOpacity={0.1} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[#00485A] font-semibold text-2xl">184</span>
            <span className="text-[#EE6832] text-sm font-medium">Total</span>
          </div>
        </div>
      </div>
    </div>
  );
}
