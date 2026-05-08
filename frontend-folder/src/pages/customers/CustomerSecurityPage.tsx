import React from 'react';
import { Search, Settings, Bell, Home, ChevronRight, Copy, Edit, Eye, Smartphone, Monitor, ShieldCheck, Trash2 } from 'lucide-react';

const recentDevices = [
  { browser: 'Chrome On Windows', device: 'HP Spectre 360', location: 'Switzerland', activity: '10, April 2024 20:07' },
  { browser: 'Chrome On iPhone', device: 'iPhone 12x', location: 'Australia', activity: '13, April 2024 10:10' },
  { browser: 'Chrome On Android', device: 'Oneplus 9 Pro', location: 'Dubai', activity: '14, April 2024 15:15' },
  { browser: 'Chrome On MacOS', device: 'Apple iMac', location: 'India', activity: '16, April 2024 16:17' },
  { browser: 'Chrome On Windows', device: 'HP Spectre 360', location: 'Switzerland', activity: '20, April 2024 21:01' },
  { browser: 'Chrome On Android', device: 'Oneplus 9 Pro', location: 'Dubai', activity: '21, April 2024 12:22' },
];

const CustomerSecurityPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#E6EDEF] min-h-[1461px] w-full max-w-[1920px] mx-auto animate-fade">
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
          <span>Security</span>
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

        {/* Security Settings Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Change Password Card */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-[21px] font-semibold text-[#00485A] mb-6">Change Password</h3>
            <div className="bg-[#FF7E46]/20 p-4 rounded-md mb-8 border border-[#FF7E46]/10">
              <p className="text-[#FF7E46] text-[16px] font-medium">Ensure that these requirements are met Minimum 8 characters long, uppercase & symbol</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="space-y-2">
                <label className="text-[18px] text-[#3E3E3E]">New Password</label>
                <div className="relative">
                  <input type="password" placeholder="New Password" defaultValue="••••••••" className="w-full px-4 py-3 border border-[#3E3E3E] rounded-md text-[#BEBEBE] focus:outline-none focus:border-[#00485A]" />
                  <Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-[#BEBEBE]" size={20} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[18px] text-[#3E3E3E]">Confirm New Password</label>
                <div className="relative">
                  <input type="password" placeholder="Confirm New Password" defaultValue="••••••••" className="w-full px-4 py-3 border border-[#3E3E3E] rounded-md text-[#BEBEBE] focus:outline-none focus:border-[#00485A]" />
                  <Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-[#BEBEBE]" size={20} />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-[#00485A] text-white px-10 py-3 rounded-md font-medium text-[17px] shadow-md hover:bg-[#003845] transition-all">
                Change Password
              </button>
            </div>
          </div>

          {/* Two-steps verification Card */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-[21px] font-semibold text-[#00485A] mb-6">Two-steps verification</h3>
            <p className="text-[16px] text-[#5B5B5B] font-medium mb-10">Keep your account secure with authentication step.</p>
            
            <div className="space-y-1 mb-10">
              <h4 className="text-[18px] font-semibold text-[#3D3D3D]">SMS</h4>
              <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                <span className="text-[16px] text-[#5B5B5B] font-medium">+1(968) 945-8832</span>
                <div className="flex items-center gap-4">
                  <Edit size={18} className="text-[#00485A] cursor-pointer" />
                  <Trash2 size={18} className="text-[#FF2121] cursor-pointer" />
                </div>
              </div>
            </div>

            <p className="text-[16px] text-[#5B5B5B] font-medium leading-relaxed">
              Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. <span className="text-[#00485A] cursor-pointer underline">Learn more.</span>
            </p>
          </div>
        </div>

        {/* Recent Devices Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 border-b border-gray-100">
            <h2 className="text-[23px] font-medium text-[#00485A]">Recent Devices</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#00485A]/80 text-white text-[18px] font-medium">
                  <th className="px-8 py-4 border-r border-white/20 uppercase">BROWSER</th>
                  <th className="px-8 py-4 border-r border-white/20 uppercase text-center">DEVICE</th>
                  <th className="px-8 py-4 border-r border-white/20 uppercase text-center">LOCATION</th>
                  <th className="px-8 py-4 uppercase text-center">RECENT ACTIVITIES</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentDevices.map((device, idx) => (
                  <tr key={idx} className="text-[18px] text-[#3D3D3D]">
                    <td className="px-8 py-6 border-r border-gray-100">{device.browser}</td>
                    <td className="px-8 py-6 border-r border-gray-100 text-center">{device.device}</td>
                    <td className="px-8 py-6 border-r border-gray-100 text-center">{device.location}</td>
                    <td className="px-8 py-6 text-center">{device.activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default CustomerSecurityPage;
