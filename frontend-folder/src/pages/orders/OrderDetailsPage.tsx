import { Search, Settings, Bell, Home, ChevronRight, Copy, MapPin, CreditCard, User, Edit3, Check } from 'lucide-react';

const OrderDetailsPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#E6EDEF] min-h-[1367px] w-full max-w-[1920px] mx-auto animate-fade">
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
          <span>Order Details</span>
        </div>

        {/* Order Header */}
        <div className="mb-8">
          <h1 className="text-[25px] font-medium text-[#00485A] mb-2">Add a new Product</h1>
          <div className="flex items-center gap-8 text-[20px] font-medium text-[#1D1F2C]">
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
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[506px_577px_1fr] gap-6 mb-8">
          {/* Customer Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden">
            <div className="absolute top-4 right-0 bg-gradient-to-r from-[#FF8433] to-[#FFAD32] text-white px-6 py-1 transform rotate-0 text-[18px] font-medium shadow-md">
              Pending
            </div>
            <div className="flex items-start gap-6 mb-10">
              <div className="w-20 h-20 bg-[#00485A]/10 rounded-xl flex items-center justify-center text-[#00485A]">
                <User size={40} />
              </div>
              <div className="pt-1">
                <h3 className="text-[22px] font-medium text-[#00485A]">Janet Adebayo</h3>
                <p className="text-[19px] text-[#5B5B5B] mt-1 leading-tight">Customer since <br/>12 April 2024</p>
              </div>
            </div>
            <div className="grid grid-cols-2 pt-6 border-t border-gray-100">
              <div>
                <p className="text-[15px] font-medium text-[#00485A]">Phone</p>
                <p className="text-[17px] font-medium text-[#5B5B5B] mt-1">+91 23145 23145</p>
              </div>
              <div className="border-l border-gray-200 pl-6">
                <p className="text-[15px] font-medium text-[#00485A]">Email</p>
                <p className="text-[17px] font-medium text-[#5B5B5B] mt-1">janet.adebayo@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-20 h-20 bg-[#00485A]/10 rounded-xl flex items-center justify-center text-[#00485A] mb-8">
              <MapPin size={40} />
            </div>
            <div className="grid grid-cols-2 pt-4">
              <div>
                <p className="text-[15px] font-medium text-[#00485A]">Home Address</p>
                <p className="text-[17px] font-medium text-[#5B5B5B] mt-1 leading-relaxed">No. 15 Adekunle Street, Yaba, Lagos State</p>
              </div>
              <div className="border-l border-gray-200 pl-6">
                <p className="text-[15px] font-medium text-[#00485A]">Billing Address</p>
                <p className="text-[17px] font-medium text-[#5B5B5B] mt-1 leading-relaxed">No. 15 Adekunle Street, Yaba, Lagos State</p>
              </div>
            </div>
          </div>

          {/* Payment Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-20 h-20 bg-[#00485A]/10 rounded-xl flex items-center justify-center text-[#00485A] mb-8">
              <CreditCard size={40} />
            </div>
            <div className="grid grid-cols-2 pt-4">
              <div>
                <p className="text-[15px] font-medium text-[#00485A]">Payment Method</p>
                <p className="text-[17px] font-medium text-[#5B5B5B] mt-1">Master Card</p>
              </div>
              <div className="border-l border-gray-200 pl-6">
                <p className="text-[15px] font-medium text-[#00485A]">Order Type</p>
                <p className="text-[17px] font-medium text-[#5B5B5B] mt-1">Home Delivery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Details Table Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-[25px] font-medium text-[#00485A]">Order details</h2>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-gray-700 font-medium hover:bg-gray-50 transition-colors">
              <Edit3 size={18} />
              Edit
            </button>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px]">
            <div className="overflow-x-auto border-r border-gray-100">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#00485A]/80 text-white text-[18px] font-medium">
                    <th className="px-6 py-4 w-12 border-r border-white/20"><div className="w-5 h-5 border-2 border-white rounded-sm"></div></th>
                    <th className="px-6 py-4 border-r border-white/20">PRODUCTS</th>
                    <th className="px-6 py-4 border-r border-white/20 text-center">PRICE</th>
                    <th className="px-6 py-4 border-r border-white/20 text-center">QTY</th>
                    <th className="px-6 py-4 text-center">TOTAL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { name: 'Wooden Chair', meta: 'material: wooden', price: '$841', qty: '2', total: '$1682', color: 'bg-[#237193]' },
                    { name: 'Oneplus 10', meta: 'storage:128gb', price: '$896', qty: '3', total: '$2688', color: 'bg-[#FF6464]' },
                    { name: 'Nike Jordan', meta: 'size:8uk', price: '$392', qty: '1', total: '$392', color: 'bg-[#434FBA]' },
                    { name: 'Face cream', meta: 'gender:women', price: '$813', qty: '5', total: '$1626', color: 'bg-[#43396D]' }
                  ].map((item, idx) => (
                    <tr key={idx} className="text-[18px] text-[#3D3D3D]">
                      <td className="px-6 py-6 border-r border-gray-100"><div className="w-5 h-5 border-2 border-gray-300 rounded-sm"></div></td>
                      <td className="px-6 py-6 border-r border-gray-100">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-sm ${item.color}`}></div>
                          <div>
                            <p className="font-medium text-black">{item.name}</p>
                            <p className="text-[14px] text-gray-500 lowercase">{item.meta}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6 border-r border-gray-100 text-center">{item.price}</td>
                      <td className="px-6 py-6 border-r border-gray-100 text-center">{item.qty}</td>
                      <td className="px-6 py-6 text-center">{item.total}</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50/50">
                    <td colSpan={4} className="px-6 py-4 text-right font-medium text-gray-500 text-[18px]">Subtotal :</td>
                    <td className="px-6 py-4 text-center font-bold text-black text-[19px]">$6398</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Order Summary Summary */}
            <div className="p-8 space-y-6">
              <div className="flex items-center justify-between text-[18px] text-[#3D3D3D]">
                <span>Subtotal</span>
                <span className="font-medium text-[#1D1F2C]">: $6398</span>
              </div>
              <div className="flex items-center justify-between text-[18px] text-[#3D3D3D]">
                <span>Discount</span>
                <span className="font-medium text-[#1D1F2C]">: $22</span>
              </div>
              <div className="flex items-center justify-between text-[18px] text-[#3D3D3D]">
                <span>Tax</span>
                <span className="font-medium text-[#1D1F2C]">: $30</span>
              </div>
              <div className="flex items-center justify-between text-[18px] font-bold text-[#00485A] pt-4">
                <span>Total</span>
                <span className="text-[19px]">: $6450</span>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Activity Timeline */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-[25px] font-medium text-[#00485A] mb-12">Shipping activity</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-[47px] left-[5%] right-[5%] h-1 bg-[#00485A]">
              <div className="absolute top-0 left-[80%] right-0 h-full bg-[#B5B5B5]"></div>
            </div>
            
            {/* Status Steps */}
            <div className="flex justify-between relative px-2">
              {[
                { time: 'Tuesday 11:29 AM', label: 'Order was placed', sub: 'Your order has been placed successfully', id: '#32543' },
                { time: 'Wednesday 11:29 AM', label: 'Pick-up', sub: 'Pick-up scheduled with courier' },
                { time: 'Thursday 11:29 AM', label: 'Dispatched', sub: 'Item has been picked up by courier' },
                { time: 'Saturday 15:20 AM', label: 'Package arrived', sub: 'Package arrived at an Amazon facility, NY' },
                { time: 'Today 14:12 PM', label: 'Dispatched for delivery', sub: 'Package has left an Amazon facility, NY' },
                { time: '', label: 'Delivery', sub: 'Package will be delivered by tomorrow', future: true }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center max-w-[170px]">
                  <p className="text-[16px] text-[#5B5B5B] mb-4 min-h-[19px]">{step.time}</p>
                  <div className={`w-8 h-8 rounded-full border-[3px] flex items-center justify-center bg-white z-10 ${step.future ? 'border-[#B5B5B5]' : 'border-[#00485A]'}`}>
                    {!step.future && <div className="w-3 h-3 bg-[#00485A] rounded-full"></div>}
                  </div>
                  <div className="mt-6">
                    <p className="text-[19px] font-medium text-[#00485A]">{step.label} {step.id && <span className="text-[15px] opacity-80">(Order ID: {step.id})</span>}</p>
                    <p className="text-[17px] text-[#5B5B5B] mt-2">{step.sub}</p>
                  </div>
                </div>
              ))}
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

export default OrderDetailsPage;
