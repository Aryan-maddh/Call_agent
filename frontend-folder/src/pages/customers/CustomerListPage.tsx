import React from 'react';
import { Search, Settings, Bell, Home, ChevronRight, Download, Plus, ChevronLeft, MoreVertical } from 'lucide-react';

const customers = [
  { id: '#100696', name: 'Abagael Drogan', email: 'adrogan8@storify.com', country: 'Macedonia', flag: '🇲🇰', orders: '752', spent: '$191.11', img: 'https://i.pravatar.cc/150?u=1' },
  { id: '#123210', name: 'Alexia Speaks', email: 'aspeaksd@omniture.com', country: 'China', flag: '🇨🇳', orders: '215', spent: '$210.84', img: 'https://i.pravatar.cc/150?u=2' },
  { id: '#137049', name: 'Boycie Hartmann', email: 'bhartmann2q@addthis.com', country: 'North Korea', flag: '🇰🇵', orders: '12', spent: '$332.44', img: 'https://i.pravatar.cc/150?u=3' },
  { id: '#137230', name: 'Bradan Edgworth', email: 'bedgworth1q@typepad.com', country: 'Brazil', flag: '🇧🇷', orders: '354', spent: '$376.46', img: 'https://i.pravatar.cc/150?u=4' },
  { id: '#140146', name: 'Bonny Tebbutt', email: 'btebbutt24@clickbank.net', country: 'Jordan', flag: '🇯🇴', orders: '225', spent: '$589.72', img: 'https://i.pravatar.cc/150?u=5' },
  { id: '#152193', name: 'Abagael Drogan', email: 'adrogan8@storify.com', country: 'Argentina', flag: '🇦🇷', orders: '444', spent: '$620.57', img: 'https://i.pravatar.cc/150?u=6' },
  { id: '#155681', name: 'Bessy Vasechkin', email: 'bvasechkinx@plala.or.jp', country: 'Bangladesh', flag: '🇧🇩', orders: '239', spent: '$724.68', img: 'https://i.pravatar.cc/150?u=7' },
  { id: '#158581', name: 'Bambi Yerby', email: 'byerby1g@sohu.com', country: 'Bolivia', flag: '🇧🇴', orders: '85', spent: '$741.89', img: 'https://i.pravatar.cc/150?u=8' },
  { id: '#165827', name: 'Carmon Vasiljevic', email: 'cvasiljevic2o@odnoklassniki.ru', country: 'Bhutan', flag: '🇧🇹', orders: '231', spent: '$772.98', img: 'https://i.pravatar.cc/150?u=9' },
];

const CustomerListPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#E6EDEF] min-h-[1114px] w-full max-w-[1920px] mx-auto animate-fade">
      {/* Top Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#E6EDEF]">
        <div className="relative w-[60%] max-w-[800px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input type="text" placeholder="search" className="w-full pl-12 pr-4 py-3 bg-white rounded-lg border-none shadow-sm text-gray-600 focus:outline-none" />
        </div>
        <div className="flex items-center gap-4">
          <Settings size={20} className="text-[#00485A] cursor-pointer" />
          <Bell size={20} className="text-[#00485A] cursor-pointer" />
          <div className="w-10 h-10 rounded-full border-2 border-[#00485A] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="px-6 py-2">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[17px] text-[#00485A] font-normal mb-6">
          <span className="opacity-70">E-Commerce</span>
          <ChevronRight size={14} className="opacity-50" />
          <Home size={16} className="opacity-70" />
          <ChevronRight size={14} className="opacity-50" />
          <span className="opacity-70">Customer</span>
          <ChevronRight size={14} className="opacity-50" />
          <span>All Customers</span>
        </div>

        {/* Main Table Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
          {/* Action Bar */}
          <div className="p-6 flex flex-wrap items-center justify-between gap-4">
            <div className="relative w-full max-w-[361px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00485A]" size={20} />
              <div className="absolute left-10 top-1/2 -translate-y-1/2 h-5 w-[1px] bg-[#00485A]"></div>
              <input 
                type="text" 
                placeholder="Search Order" 
                className="w-full pl-14 pr-4 py-2 bg-transparent border border-[#00485A] rounded-md text-[17px] text-gray-400 focus:outline-none" 
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-6 py-2.5 border border-[#00485A] rounded-md text-[#00485A] font-medium hover:bg-gray-50 shadow-sm transition-all">
                <Download size={18} />
                Export
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-[#00485A] rounded-md text-white font-medium hover:bg-[#003845] shadow-sm transition-all">
                <Plus size={18} />
                Add Customer
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#00485A]/80 text-white text-[18px] font-medium">
                  <th className="px-6 py-4 w-12 border-r border-white/20">
                    <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
                  </th>
                  <th className="px-6 py-4 border-r border-white/20">CUSTOMERS</th>
                  <th className="px-6 py-4 border-r border-white/20 text-center uppercase">Customer id</th>
                  <th className="px-6 py-4 border-r border-white/20 uppercase">Country</th>
                  <th className="px-6 py-4 border-r border-white/20 text-center uppercase">Order</th>
                  <th className="px-6 py-4 text-center uppercase">Total spent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {customers.map((item, idx) => (
                  <tr key={idx} className="text-[18px] text-[#3D3D3D] hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-6 border-r border-gray-100">
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-sm cursor-pointer"></div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-100">
                      <div className="flex items-center gap-4">
                        <img src={item.img} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <p className="font-medium text-black leading-tight">{item.name}</p>
                          <p className="text-[14px] text-gray-500 lowercase mt-1">{item.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-100 text-center font-normal">{item.id}</td>
                    <td className="px-6 py-6 border-r border-gray-100">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.flag}</span>
                        <span className="capitalize">{item.country}</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-r border-gray-100 text-center">{item.orders}</td>
                    <td className="px-6 py-6 text-center">{item.spent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer / Pagination */}
          <div className="px-6 py-4 bg-white flex items-center justify-between border-t border-gray-100">
            <p className="text-[17px] text-[#A4A4A4]">Showing 1 to 7 of 50 entries</p>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3 text-[16.7px] text-[#A4A4A4]">
                <span>Items per page :</span>
                <div className="relative border-b border-[#A4A4A4] px-4 py-1 flex items-center gap-2 cursor-pointer">
                  <span>10</span>
                  <ChevronRight size={14} className="rotate-90" />
                </div>
              </div>
              <p className="text-[16.7px] text-[#A4A4A4]">1 - 10 of 16</p>
              <div className="flex items-center gap-4">
                <button className="text-[#A4A4A4] hover:text-[#00485A] transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <button className="text-[#00485A] hover:text-[#003845] transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 py-6 border-t border-gray-200 flex items-center justify-between text-[18px] text-[#3D3D3D]">
          <span>© 2024, made with ❤️ by Orbitwebtech</span>
          <div className="flex items-center gap-10">
            <span>License</span>
            <span>More Themes</span>
            <span>Documentation</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerListPage;
