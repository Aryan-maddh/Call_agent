import React from 'react';
import { Search, Settings, Bell, Home, ChevronRight, DollarSign, Gift, UserPlus, Percent, Rocket, MousePointer2, Share2, Download, ChevronDown, ChevronLeft } from 'lucide-react';

const stats = [
  { label: 'In-store Sales', value: '$24,983', icon: <DollarSign className="text-[#EB953D]" size={24} /> },
  { label: 'Unpaid Earning', value: '$8,647', icon: <Gift className="text-[#29BBFA]" size={24} /> },
  { label: 'Signups', value: '2,367', icon: <UserPlus className="text-[#3DA1CF]" size={24} /> },
  { label: 'Conversion Rate', value: '4.5%', icon: <Percent className="text-[#38004D]" size={24} /> },
];

const referralData = [
  { id: '1252', customer: { name: 'Abagael Drogan', email: 'adrogan8@storify.com', avatar: 'https://i.pravatar.cc/150?u=1' }, status: 'Cancelled', value: '$6475.75', earnings: '$605.75' },
  { id: '3524', customer: { name: 'Alexia Speaks', email: 'aspeaksd@omniture.com', avatar: 'https://i.pravatar.cc/150?u=2' }, status: 'Pending', value: '$6234.84', earnings: '$387.02' },
  { id: '2358', customer: { name: 'Boycie Hartmann', email: 'bhartmann2q@addthis.com', avatar: 'https://i.pravatar.cc/150?u=3' }, status: 'Failed', value: '$2221.71', earnings: '$347.19' },
  { id: '2541', customer: { name: 'Bradan Edgworth', email: 'bedgworth1q@typepad.com', avatar: 'https://i.pravatar.cc/150?u=4' }, status: 'Pending', value: '$3721.16', earnings: '$738.56' },
  { id: '1425', customer: { name: 'Bonny Tebbutt', email: 'btebbutt24@clickbank.net', avatar: 'https://i.pravatar.cc/150?u=5' }, status: 'Paid', value: '$7828.40', earnings: '$453.00' },
  { id: '1122', customer: { name: 'Abagael Drogan', email: 'adrogan8@storify.com', avatar: 'https://i.pravatar.cc/150?u=6' }, status: 'Pending', value: '$7148.09', earnings: '$951.78' },
  { id: '8521', customer: { name: 'Bessy Vasechkin', email: 'bvasechkinx@plala.or.jp', avatar: 'https://i.pravatar.cc/150?u=7' }, status: 'Paid', value: '$2155.12', earnings: '$101.49' },
  { id: '7896', customer: { name: 'Bambi Yerby', email: 'byerby1g@sohu.com', avatar: 'https://i.pravatar.cc/150?u=8' }, status: 'Pending', value: '$9375.13', earnings: '$690.75' },
  { id: '1248', customer: { name: 'Carmon Vasiljevic', email: 'cvasiljevic2o@odnoklassniki.ru', avatar: 'https://i.pravatar.cc/150?u=9' }, status: 'Failed', value: '$2996.63', earnings: '$610.27' },
];

const ReferralsPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#E6EDEF] min-h-[1555px] w-full max-w-[1920px] mx-auto animate-fade">
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
          <span>Referrals</span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-sm flex items-center gap-6">
               <div className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-gray-100">
                 {stat.icon}
               </div>
               <div className="h-10 w-[2px] bg-[#B5B5B5]"></div>
               <div>
                  <p className="text-[18px] font-bold text-[#00485A] opacity-80 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-[22px] font-semibold text-black">{stat.value}</p>
               </div>
            </div>
          ))}
        </div>

        {/* Middle Cards */}
        <div className="flex gap-6 mb-8">
          {/* How to Use Card */}
          <div className="flex-[1.3] bg-white rounded-lg p-8 shadow-sm">
             <h3 className="text-[23px] font-medium text-[#00485A] mb-2">How to use</h3>
             <p className="text-[19px] text-[#B5B5B5] font-medium mb-12">Integrate your referral code in 3 easy steps.</p>
             
             <div className="flex justify-between items-start">
                <div className="flex flex-col items-center gap-4 text-center max-w-[180px]">
                   <div className="w-12 h-12 flex items-center justify-center text-[#00485A]">
                     <Rocket size={40} className="drop-shadow-md" />
                   </div>
                   <p className="text-[17px] text-[#5B5B5B]">Create & validate your referral link and get</p>
                   <span className="text-[23px] font-bold text-[#00485A]">$50</span>
                </div>

                <div className="h-32 w-[1px] bg-gray-200 mt-4"></div>

                <div className="flex flex-col items-center gap-4 text-center max-w-[180px]">
                   <div className="w-12 h-12 flex items-center justify-center text-[#00485A]">
                     <MousePointer2 size={40} />
                   </div>
                   <p className="text-[17px] text-[#5B5B5B]">For every new signup you get</p>
                   <span className="text-[23px] font-bold text-[#00485A]">10%</span>
                </div>

                <div className="h-32 w-[1px] bg-gray-200 mt-4"></div>

                <div className="flex flex-col items-center gap-4 text-center max-w-[180px]">
                   <div className="w-12 h-12 flex items-center justify-center text-[#00485A]">
                     <Share2 size={40} />
                   </div>
                   <p className="text-[17px] text-[#5B5B5B]">Get other friends to generate link and get</p>
                   <span className="text-[23px] font-bold text-[#00485A]">$100</span>
                </div>
             </div>
          </div>

          {/* Invite Card */}
          <div className="flex-1 bg-white rounded-lg p-8 shadow-sm">
             <div className="mb-8">
                <h3 className="text-[23px] font-medium text-[#00485A] mb-4">Invite your friends</h3>
                <p className="text-[18px] text-[#3E3E3E] mb-3">Enter friend's email address and invite them</p>
                <div className="flex gap-2">
                   <input type="text" placeholder="Email address" className="flex-1 px-4 py-2 border border-[#3E3E3E] rounded text-gray-500 text-[18px]" />
                   <button className="bg-[#00485A] text-white px-6 py-2 rounded font-medium text-[17px]">Submit</button>
                </div>
             </div>

             <div>
                <h3 className="text-[23px] font-medium text-[#00485A] mb-4">Share the referral link</h3>
                <p className="text-[18px] text-[#3E3E3E] mb-3">Share referral link in social media</p>
                <div className="flex gap-2">
                   <input type="text" placeholder="Social media link" className="flex-1 px-4 py-2 border border-[#3E3E3E] rounded text-gray-500 text-[18px]" />
                   <div className="flex gap-2">
                      <button className="w-11 h-11 bg-[#183D63] text-white flex items-center justify-center rounded">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      </button>
                      <button className="w-11 h-11 bg-black text-white flex items-center justify-center rounded">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                      </button>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-[23px] font-medium text-[#00485A]">Recent Devices</h2>
            <button className="flex items-center gap-2 border border-[#00485A] px-4 py-2 rounded text-[#00485A] font-medium shadow-sm">
               <Download size={18} /> Export
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#00485A]/80 text-white text-[18px] font-medium">
                  <th className="px-6 py-4 border-r border-white/20 w-12 text-center">
                    <input type="checkbox" className="w-5 h-5 border-2 border-white rounded bg-transparent" />
                  </th>
                  <th className="px-6 py-4 border-r border-white/20 uppercase">CUSTOMERS</th>
                  <th className="px-6 py-4 border-r border-white/20 uppercase">REFERRED ID</th>
                  <th className="px-6 py-4 border-r border-white/20 uppercase">STATUS</th>
                  <th className="px-6 py-4 border-r border-white/20 uppercase">VALUE</th>
                  <th className="px-6 py-4 uppercase">EARNINGS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {referralData.map((item, idx) => (
                  <tr key={idx} className="text-[18px] text-[#3D3D3D]">
                    <td className="px-6 py-6 text-center">
                      <input type="checkbox" className="w-5 h-5 border-gray-300 rounded" />
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-4">
                        <img src={item.customer.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <p className="font-normal capitalize">{item.customer.name}</p>
                          <p className="text-[14px] text-[#5B5B5B] lowercase">{item.customer.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-l border-gray-100 font-normal">{item.id}</td>
                    <td className="px-6 py-6 border-l border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          item.status === 'Paid' ? 'bg-[#1F9900]' : 
                          item.status === 'Pending' ? 'bg-[#FF9900]' : 
                          item.status === 'Failed' ? 'bg-[#FF2121]' : 'bg-[#A0A0A0]'
                        }`}></div>
                        <span className={`${
                          item.status === 'Paid' ? 'text-[#1F9900]' : 
                          item.status === 'Pending' ? 'text-[#FF9900]' : 
                          item.status === 'Failed' ? 'text-[#FF2121]' : 'text-[#A0A0A0]'
                        }`}>{item.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 border-l border-gray-100">{item.value}</td>
                    <td className="px-6 py-6 border-l border-gray-100 font-normal">{item.earnings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-8 border-t border-gray-100 flex items-center justify-between text-[17px] text-[#A4A4A4]">
             <span>Showing 1 to 7 of 50 entries</span>
             <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                   <span>Items per page :</span>
                   <div className="flex items-center gap-2 border-b border-[#A4A4A4] px-2 py-1">
                      <span className="text-black font-medium">10</span>
                      <ChevronDown size={14} />
                   </div>
                </div>
                <span>1 - 10 of 16</span>
                <div className="flex items-center gap-4">
                   <ChevronLeft size={20} className="cursor-pointer" />
                   <ChevronRight size={20} className="text-[#00485A] cursor-pointer" />
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

export default ReferralsPage;
