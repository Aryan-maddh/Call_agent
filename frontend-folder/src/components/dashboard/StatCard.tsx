import { type ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  iconBg: string;
  label: string;
  value: string;
}

export default function StatCard({ icon, iconBg, label, value }: StatCardProps) {
  return (
    <div className="bg-white rounded-[5px] shadow-card flex items-center px-6 py-5 gap-0 flex-1 min-w-0 hover:shadow-md transition-shadow duration-200">
      <div className={`w-[45px] h-[45px] rounded-lg flex items-center justify-center flex-shrink-0 ${iconBg}`}>
        {icon}
      </div>
      <div className="w-px h-[60px] bg-[#B5B5B5] mx-5 flex-shrink-0" />
      <div className="min-w-0">
        <p className="text-[#00485A] text-[15px] font-medium opacity-80 truncate">{label}</p>
        <p className="text-black text-[26px] font-semibold leading-tight tracking-[0.005em]">{value}</p>
      </div>
    </div>
  );
}
