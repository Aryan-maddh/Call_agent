import { Search, Settings, Bell, Home, ChevronRight, Download, Eye, Trash2, CheckCircle2, AlertCircle, Clock, Wallet } from 'lucide-react';

const orderStats = [
  { label: 'Pending Payment', value: '563', trend: '+18.6%', icon: Clock, color: 'text-yellow-500', bg: 'bg-yellow-50' },
  { label: 'Completed', value: '12,689', trend: '+18.6%', icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-50' },
  { label: 'Refunded', value: '124', trend: '+18.6%', icon: Wallet, color: 'text-teal-500', bg: 'bg-teal-50' },
  { label: 'Failed', value: '32', trend: '+18.6%', icon: AlertCircle, color: 'text-red-500', bg: 'bg-red-50' },
];

const orders = [
  { id: '#5236', date: 'April 10,2024', customer: 'Abagael Drogan', email: 'adrogan8@storify.com', payment: 'Cancelled', status: 'Ready To Pickup', method: 'Mastercard', pColor: 'text-gray-400', sColor: 'text-blue-500' },
  { id: '#2365', date: 'April 9,2024', customer: 'Alexia Speaks', email: 'aspeaksd@omniture.com', payment: 'Pending', status: 'Out For Delivery', method: 'Visa', pColor: 'text-orange-400', sColor: 'text-orange-500' },
  { id: '#1258', date: 'April 8,2024', customer: 'Boycie Hartmann', email: 'bhartmann2q@addthis.com', payment: 'Failed', status: 'Delivered', method: 'Paypall', pColor: 'text-red-500', sColor: 'text-green-500' },
  { id: '#9654', date: 'April 2,2024', customer: 'Bradan Edgworth', email: 'bedgworth1q@typepad.com', payment: 'Pending', status: 'Ready To Pickup', method: 'Mastercard', pColor: 'text-orange-400', sColor: 'text-blue-500' },
  { id: '#2356', date: 'April 11,2024', customer: 'Bonny Tebbutt', email: 'btebbutt24@clickbank.net', payment: 'Paid', status: 'Delivered', method: 'Paypall', pColor: 'text-green-500', sColor: 'text-green-500' },
  { id: '#7852', date: 'April 15,2024', customer: 'Abagael Drogan', email: 'adrogan8@storify.com', payment: 'Pending', status: 'Ready To Pickup', method: 'Mastercard', pColor: 'text-orange-400', sColor: 'text-blue-500' },
  { id: '#1235', date: 'April 4,2024', customer: 'Bessy Vasechkin', email: 'bvasechkinx@plala.or.jp', payment: 'Paid', status: 'Out For Delivery', method: 'Visa', pColor: 'text-green-500', sColor: 'text-orange-500' },
  { id: '#7896', date: 'April 3,2024', customer: 'Bambi Yerby', email: 'byerby1g@sohu.com', payment: 'Pending', status: 'Delivered', method: 'Visa', pColor: 'text-orange-400', sColor: 'text-green-500' },
  { id: '#5412', date: 'April 17,2024', customer: 'Carmon Vasiljevic', email: 'cvasiljevic2o@odnoklassniki.ru', payment: 'Failed', status: 'Out For Delivery', method: 'Paypall', pColor: 'text-red-500', sColor: 'text-orange-500' },
];

const OrderListPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#E6EDEF] min-h-[1224px] w-full max-w-[1920px] mx-auto animate-fade">
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
        <div className="flex items-center gap-2 text-[13px] text-[#00485A] font-medium mb-6">
          <span className="opacity-70">E-Commerce</span>
          <ChevronRight size={14} className="opacity-50" />
          <Home size={16} className="opacity-70" />
          <ChevronRight size={14} className="opacity-50" />
          <span className="opacity-70">Order</span>
          <ChevronRight size={14} className="opacity-50" />
          <span>Order List</span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {orderStats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4">
              <div className={`w-14 h-14 rounded-full ${stat.bg} flex items-center justify-center`}>
                <stat.icon className={stat.color} size={28} />
              </div>
              <div className="flex-1 border-l border-gray-200 pl-4">
                <p className="text-[18px] text-[#00485A] opacity-80 font-medium">{stat.label}</p>
                <h3 className="text-[22px] font-bold text-black mt-1">{stat.value}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[15px] text-green-600 font-medium">{stat.trend}</span>
                  <span className="text-[15px] text-gray-500">today</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <div className="relative w-[361px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00485A]" size={18} />
              <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[1px] h-6 bg-[#00485A]"></div>
              <input 
                type="text" 
                placeholder="Search Product" 
                className="w-full pl-14 pr-4 py-2 bg-white border border-[#00485A] rounded text-[17px] text-[#B5B5B5] focus:outline-none"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-[#00485A] rounded text-[#00485A] font-medium text-[17px] hover:bg-gray-50">
              <Download size={18} />
              Export
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#00485A] text-white text-[18px] font-medium uppercase">
                  <th className="px-6 py-4 w-12 border-r border-white/20">
                    <div className="w-[21px] h-[21px] border-2 border-white rounded-sm"></div>
                  </th>
                  <th className="px-6 py-4 border-r border-white/20">ORDER</th>
                  <th className="px-6 py-4 border-r border-white/20">DATE</th>
                  <th className="px-6 py-4 border-r border-white/20">CUSTOMERS</th>
                  <th className="px-6 py-4 border-r border-white/20">PAYMENT</th>
                  <th className="px-6 py-4 border-r border-white/20">STATUS</th>
                  <th className="px-6 py-4 border-r border-white/20">METHOD</th>
                  <th className="px-6 py-4">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {orders.map((order) => (
                  <tr key={order.id} className="text-[18px] text-[#3D3D3D]">
                    <td className="px-6 py-4">
                      <div className="w-[21px] h-[21px] border-2 border-[#B5B5B5] rounded-sm"></div>
                    </td>
                    <td className="px-6 py-4 font-medium">{order.id}</td>
                    <td className="px-6 py-4">{order.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                          <img src={`https://i.pravatar.cc/150?u=${order.customer}`} alt="avatar" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium text-black leading-tight">{order.customer}</span>
                          <span className="text-[14px] text-gray-500 lowercase">{order.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-current ${order.pColor}`}></div>
                        <span className={order.pColor}>{order.payment}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-current ${order.sColor}`}></div>
                        <span className={order.sColor}>{order.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">{order.method}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4 text-[#00485A]">
                        <button className="hover:opacity-70 transition-opacity"><Eye size={20} /></button>
                        <button className="text-red-500 hover:opacity-70 transition-opacity"><Trash2 size={20} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer / Pagination */}
          <div className="px-6 py-4 flex items-center justify-between text-[17px] text-[#A4A4A4] border-t border-gray-100">
            <span>Showing 1 to 7 of 50 entries</span>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span>Items per page :</span>
                <div className="relative">
                  <select className="appearance-none border-b border-[#A4A4A4] bg-transparent pr-6 focus:outline-none">
                    <option>10</option>
                  </select>
                  <ChevronRight size={14} className="absolute right-0 top-1 rotate-90" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span>1 - 10 of 16</span>
                <div className="flex items-center gap-3">
                  <button className="p-1 opacity-50"><ChevronRight size={20} className="rotate-180" /></button>
                  <button className="p-1 text-[#00485A]"><ChevronRight size={20} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Footer */}
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

export default OrderListPage;
