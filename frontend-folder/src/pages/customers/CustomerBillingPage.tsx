import React, { useState } from 'react';
import { Search, Settings, Bell, Home, ChevronRight, Copy, Plus, Edit, Trash2, MoreVertical, CreditCard } from 'lucide-react';

const CustomerBillingPage: React.FC = () => {
  const [activeAddress, setActiveAddress] = useState('Home');
  const [activePayment, setActivePayment] = useState('Mastercard');

  return (
    <div className="flex flex-col bg-[#E6EDEF] min-h-[1519px] w-full max-w-[1920px] mx-auto animate-fade">
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
          <span>Address & Billing</span>
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

        {/* Address Book Section */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-[23px] font-medium text-[#00485A]">Address Book</h3>
            <button className="flex items-center gap-2 bg-[#00485A] text-white px-6 py-2 rounded shadow-md hover:bg-[#003845] transition-all">
              <Plus size={18} />
              Add New Address
            </button>
          </div>
          
          <div className="divide-y divide-gray-100">
            {['Home', 'Office', 'Family'].map((label) => (
              <div key={label} className="p-6">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setActiveAddress(activeAddress === label ? '' : label)}
                >
                  <div className="flex items-center gap-4">
                    <ChevronRight size={20} className={`text-gray-500 transition-transform ${activeAddress === label ? 'rotate-90' : ''}`} />
                    <div className="flex items-center gap-3">
                      <span className="text-[18px] text-[#3D3D3D]">{label}</span>
                      {label === 'Home' && <span className="bg-[#1F9900]/20 text-[#1F9900] px-3 py-1 rounded text-[13px] font-semibold">Default Address</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[#00485A]">
                    <Edit size={18} className="cursor-pointer" />
                    <Trash2 size={18} className="text-[#FF2121] cursor-pointer" />
                    <MoreVertical size={18} className="cursor-pointer" />
                  </div>
                </div>
                
                {activeAddress === label && (
                  <div className="mt-4 pl-10">
                    <p className="text-[14px] text-[#5B5B5B] mb-2">23 Shatinon Mekalan</p>
                    <div className="text-[17px] text-[#3D3D3D] space-y-1">
                      <p>Violet Mendoza</p>
                      <p>23 Shatinon Mekalan, Melbourne, VIC 3000, LondonUK</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-[23px] font-medium text-[#00485A]">Payment Methods</h3>
            <button className="flex items-center gap-2 bg-[#00485A] text-white px-6 py-3 rounded shadow-md hover:bg-[#003845] transition-all">
              <Plus size={18} />
              Add Payment Methods
            </button>
          </div>

          <div className="divide-y divide-gray-100">
            {['Mastercard', 'American Express', 'Visa'].map((card) => (
              <div key={card} className="p-6">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setActivePayment(activePayment === card ? '' : card)}
                >
                  <div className="flex items-center gap-4">
                    <ChevronRight size={20} className={`text-gray-500 transition-transform ${activePayment === card ? 'rotate-90' : ''}`} />
                    <div className="flex items-center gap-3">
                       <CreditCard size={24} className="text-gray-600" />
                       <span className="text-[18px] text-[#3D3D3D]">{card}</span>
                       {card === 'Mastercard' && <span className="bg-[#1F9900]/20 text-[#1F9900] px-3 py-1 rounded text-[13px] font-semibold">Primary</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[#00485A]">
                    <Edit size={18} className="cursor-pointer" />
                    <Trash2 size={18} className="text-[#FF2121] cursor-pointer" />
                    <MoreVertical size={18} className="cursor-pointer" />
                  </div>
                </div>

                {activePayment === card && (
                  <div className="mt-8 pl-10 grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-gray-50 pt-8">
                    <div className="grid grid-cols-[120px_1fr] gap-y-4">
                      <span className="text-[17px] font-medium text-[#1D1F2C]">Name</span>
                      <span className="text-[17px] text-[#3D3D3D]">Violet Mendoza</span>
                      
                      <span className="text-[17px] font-medium text-[#1D1F2C]">Number</span>
                      <span className="text-[17px] text-[#3D3D3D]">**** 4487</span>
                      
                      <span className="text-[17px] font-medium text-[#1D1F2C]">Expires</span>
                      <span className="text-[17px] text-[#3D3D3D]">04/2028</span>
                      
                      <span className="text-[17px] font-medium text-[#1D1F2C]">Type</span>
                      <span className="text-[17px] text-[#3D3D3D]">Visa Credit Card</span>
                      
                      <span className="text-[17px] font-medium text-[#1D1F2C]">Issuer</span>
                      <span className="text-[17px] text-[#3D3D3D]">VICBANK</span>
                      
                      <span className="text-[17px] font-medium text-[#1D1F2C]">ID</span>
                      <span className="text-[17px] text-[#3D3D3D]">id_w2r84jdy723</span>
                    </div>

                    <div className="grid grid-cols-[120px_1fr] gap-y-4 border-l border-gray-100 pl-12">
                      <span className="text-[17px] font-medium text-[#1D1F2C]">Billing</span>
                      <span className="text-[17px] text-[#3D3D3D]">USA</span>
                      
                      <span className="text-[17px] font-medium text-[#1D1F2C]">Phone Number</span>
                      <span className="text-[17px] text-[#3D3D3D]">+7634 983 637</span>
                      
                      <span className="text-[17px] font-medium text-[#1D1F2C]">Email</span>
                      <span className="text-[17px] text-[#3D3D3D]">Vafgot@vultukir.org</span>
                      
                      <span className="text-[17px] font-medium text-[#1D1F2C]">Origin</span>
                      <span className="text-[17px] text-[#3D3D3D]">United States</span>
                      
                      <span className="text-[17px] font-medium text-[#1D1F2C]">CVC Check</span>
                      <span className="text-[17px] text-[#1F9900] font-medium">Passed</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
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

export default CustomerBillingPage;
