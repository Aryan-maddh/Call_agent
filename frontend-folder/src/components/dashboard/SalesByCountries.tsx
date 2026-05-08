import { useState } from 'react';
import { MoreHorizontal, MapPin } from 'lucide-react';
import { deliveries } from '../../data/mockData';

const tabs = ['New', 'Preparing', 'Shipping'];

export default function SalesByCountries() {
  const [activeTab, setActiveTab] = useState('New');
  return (
    <div className="bg-white rounded-[5px] shadow-card p-5">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-[#00485A] font-semibold text-xl">Sales by Countries</h3>
          <p className="text-[#5B5B5B] text-sm font-medium mt-1">62 Deliveries in Progress</p>
        </div>
        <button className="text-[#5B5B5B] hover:text-[#00485A] transition-colors p-1">
          <MoreHorizontal size={20} />
        </button>
      </div>
      <div className="flex border-b border-gray-100 mb-4">
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === tab ? 'text-[#00485A] border-b-2 border-[#00485A]' : 'text-[#5B5B5B] hover:text-[#00485A]'}`}>
            {tab}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {deliveries.map((d, i) => (
          <div key={i} className="bg-[#FFF8F5] rounded-[5px] p-3 space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-[#00C678] text-xs font-semibold mt-0.5 flex-shrink-0">SENDER</span>
              <div>
                <p className="text-[#1D1F2C] font-medium text-sm">{d.sender.name}</p>
                <div className="flex items-center gap-1">
                  <MapPin size={10} className="text-[#5B5B5B]" />
                  <p className="text-[#5B5B5B] text-xs">{d.sender.address}</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#EE6832] text-xs font-semibold mt-0.5 flex-shrink-0">RECEIVER</span>
              <div>
                <p className="text-[#1D1F2C] font-medium text-sm">{d.receiver.name}</p>
                {d.receiver.address && (
                  <div className="flex items-center gap-1">
                    <MapPin size={10} className="text-[#5B5B5B]" />
                    <p className="text-[#5B5B5B] text-xs">{d.receiver.address}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
