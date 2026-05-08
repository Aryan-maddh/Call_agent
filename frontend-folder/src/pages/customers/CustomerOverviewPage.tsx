import React from 'react';
import { Search, Settings, Bell, Home, ChevronRight, Copy, Edit, Trash2, Eye, User, ShoppingBag, CreditCard, Gift, Heart, Percent } from 'lucide-react';

const orders = [
  { id: '#5236', date: 'April 10,2024', status: 'Ready To Pickup', statusColor: 'bg-[#2F82FF]', spent: '$993.07' },
  { id: '#2365', date: 'April 9,2024', status: 'Out For Delivery', statusColor: 'bg-[#D79128]', spent: '$948.07' },
  { id: '#1258', date: 'April 8,2024', status: 'Delivered', statusColor: 'bg-[#1F9900]', spent: '$914.48' },
  { id: '#9654', date: 'April 2,2024', status: 'Ready To Pickup', statusColor: 'bg-[#2F82FF]', spent: '$905.31' },
  { id: '#2356', date: 'April 11,2024', status: 'Delivered', statusColor: 'bg-[#1F9900]', spent: '$899.35' },
];

const CustomerOverviewPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#E6EDEF] min-h-[1149px] w-full max-w-[1920px] mx-auto animate-fade">
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
          <span className="opacity-70">Customer Details</span>
          <ChevronRight size={14} className="opacity-50" />
          <span>Overview</span>
        </div>

        {/* Order Meta Header */}
        <div className="flex items-center gap-8 text-[20px] font-medium text-[#1D1F2C] mb-8">
          <div className="flex items-center gap-4">
            <span>Order Number <span className="text-gray-500">#743648</span></span>
            <div className="h-5 w-[2px] bg-[#B5B5B5]"></div>
          </div>
          <div className="flex items-center gap-4">
            <span>Order Date <span className="text-gray-500">12 April 2024 - 12:55 pm</span></span>
            <div className="h-5 w-[2px] bg-[#B5B5B5]"></div>
          </div>
          <div className="flex items-center gap-2">
            <span>Tracking ID <span className="text-gray-500">9348fjr73</span></span>
            <Copy size={18} className="text-[#00485A] cursor-pointer" />
          </div>
        </div>

        {/* Top Profile Card */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8 flex items-start gap-12 relative overflow-hidden">
          <div className="flex items-center gap-6">
            <div className="w-[111px] h-[111px] bg-[#00485A]/50 rounded-xl flex items-center justify-center p-2">
               <img src="https://i.pravatar.cc/150?u=abagael" alt="Abagael" className="w-full h-full object-cover rounded shadow-md" />
            </div>
            <div>
              <h2 className="text-[20px] font-medium text-[#00485A]">Abagael Drogan</h2>
              <p className="text-[15px] text-[#5B5B5B]">abagarl@gmail.com</p>
            </div>
          </div>

          <div className="flex-1 flex gap-16 pl-12 border-l border-gray-200">
            <div className="space-y-3">
              <h4 className="text-[16px] font-medium text-[#5B5B5B] uppercase mb-4">PERSONAL INFORMATION</h4>
              <div className="grid grid-cols-[120px_1fr] gap-x-8 gap-y-3 text-[16px]">
                <span className="text-gray-700">Username</span> <span className="font-medium">abagaael.drogan</span>
                <span className="text-gray-700">Gender</span> <span className="font-medium">Female</span>
                <span className="text-gray-700">Date of Birth</span> <span className="font-medium">1 Jan, 1985</span>
                <span className="text-gray-700">Member Since</span> <span className="font-medium">3 March, 2023</span>
                <span className="text-gray-700">Contact</span> <span className="font-medium">(123) 456-7890</span>
                <span className="text-gray-700">Country</span> <span className="font-medium">USA</span>
              </div>
            </div>

            <div className="flex-1 space-y-8 pl-12 border-l border-gray-200 relative">
              <div>
                <h4 className="text-[16px] font-medium text-[#5B5B5B] uppercase mb-4">Shipping Address</h4>
                <p className="text-[16px] text-gray-700 max-w-[300px]">No.15 Adekunle Street, Yaba, Lagos State</p>
              </div>
              <div className="flex gap-12 pt-4">
                <div>
                  <p className="text-[27px] font-bold text-black">150</p>
                  <p className="text-[16px] text-gray-500">Total Order</p>
                </div>
                <div>
                  <p className="text-[27px] font-bold text-black">140</p>
                  <p className="text-[16px] text-gray-500">Completed</p>
                </div>
                <div>
                  <p className="text-[27px] font-bold text-black">10</p>
                  <p className="text-[16px] text-gray-500">Canceled</p>
                </div>
              </div>
              <button className="absolute top-0 right-0 w-[54px] h-[40px] bg-[#00485A] rounded flex items-center justify-center text-white shadow-md">
                <Edit size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Side Cards + Main Table */}
        <div className="grid grid-cols-1 xl:grid-cols-[449px_1fr] gap-8">
          <div className="space-y-6">
            {/* Stat Cards */}
            {[
              { icon: <CreditCard size={30} className="text-[#EB953D]" />, title: 'Account Balance', value: '$2345', sub: 'Credit Left', desc: 'Account balance for next purchase' },
              { icon: <Gift size={30} className="text-[#29BBFA]" />, title: 'Loyalty Program', value: 'Platinum member', desc: '3000 points to next tier', isBadge: true },
              { icon: <Heart size={30} className="text-[#2A968F]" />, title: 'Wishlist', value: '15', sub: 'Items in wishlist', desc: 'Receive notification when items...' },
              { icon: <Percent size={30} className="text-[#38004D]" />, title: 'Coupons', value: '21', sub: 'Coupons you win', desc: 'Use coupon on next purchase' },
            ].map((card, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-6">
                <div className="w-[85px] h-[85px] border-r border-gray-100 flex items-center justify-center pr-4">
                  {card.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-[18px] font-medium text-[#00485A]/80 uppercase tracking-wider">{card.title}</h4>
                  {card.isBadge ? (
                    <div className="flex flex-col gap-1 mt-1">
                       <span className="inline-block bg-[#1F9900]/20 text-[#1F9900] px-3 py-1 rounded-sm text-[13px] font-semibold w-fit">{card.value}</span>
                       <p className="text-[17px] text-[#5B5B5B]/80">{card.desc}</p>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-[22px] font-bold text-black">{card.value}</span>
                        <span className="text-[15px] text-gray-600 font-normal">{card.sub}</span>
                      </div>
                      <p className="text-[17px] text-[#5B5B5B]/80 mt-1">{card.desc}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Main Content: Orders Placed */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-[23px] font-medium text-[#00485A]">Orders placed</h2>
              <div className="relative w-[361px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00485A]" size={18} />
                <div className="absolute left-10 top-1/2 -translate-y-1/2 h-5 w-[1px] bg-[#00485A]"></div>
                <input 
                  type="text" 
                  placeholder="Search Product" 
                  className="w-full pl-14 pr-4 py-2 bg-transparent border border-[#00485A] rounded-md text-[17px] text-gray-400 focus:outline-none" 
                />
              </div>
            </div>

            <div className="flex-1 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#00485A]/80 text-white text-[18px] font-medium">
                    <th className="px-6 py-4 w-12 border-r border-white/20">
                      <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
                    </th>
                    <th className="px-6 py-4 border-r border-white/20">ORDER</th>
                    <th className="px-6 py-4 border-r border-white/20 text-center uppercase">Date</th>
                    <th className="px-6 py-4 border-r border-white/20 uppercase">Status</th>
                    <th className="px-6 py-4 border-r border-white/20 text-center uppercase">Spent</th>
                    <th className="px-6 py-4 text-center uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {orders.map((order, idx) => (
                    <tr key={idx} className="text-[18px] text-[#3D3D3D]">
                      <td className="px-6 py-6 border-r border-gray-100">
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-sm"></div>
                      </td>
                      <td className="px-6 py-6 border-r border-gray-100 font-normal">{order.id}</td>
                      <td className="px-6 py-6 border-r border-gray-100 text-center">{order.date}</td>
                      <td className="px-6 py-6 border-r border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${order.statusColor}`}></div>
                          <span>{order.status}</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 border-r border-gray-100 text-center">{order.spent}</td>
                      <td className="px-6 py-6 text-center">
                        <div className="flex items-center justify-center gap-4">
                           <Eye size={20} className="text-[#00485A] cursor-pointer" />
                           <Trash2 size={20} className="text-[#FF2121] cursor-pointer" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 bg-white flex items-center justify-between border-t border-gray-100 mt-auto">
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
                   <ChevronRight size={20} className="rotate-180 text-[#A4A4A4]" />
                   <ChevronRight size={20} className="text-[#00485A]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 py-6 border-t border-gray-200 flex items-center justify-between text-[18px] text-[#3D3D3D]">
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

export default CustomerOverviewPage;
