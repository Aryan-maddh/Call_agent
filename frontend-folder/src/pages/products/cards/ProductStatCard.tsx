import React from 'react';

interface ProductStatCardProps {
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: React.ReactNode;
  iconBg: string;
}

const ProductStatCard: React.FC<ProductStatCardProps> = ({ label, value, trend, trendUp, icon, iconBg }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#e6eef0] p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
      <div className={`p-3 rounded-xl ${iconBg}`}>
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-[#5B5B5B] text-xs font-medium uppercase tracking-wider">{label}</p>
        <div className="flex items-end gap-2 mt-1">
          <h2 className="text-2xl font-bold text-[#17202a] leading-none">{value}</h2>
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${trendUp ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {trend}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductStatCard;
