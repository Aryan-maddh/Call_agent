import { Search, Settings, Bell, Home, ChevronRight, Download, Plus, Edit2, Trash2, MoreVertical, LayoutGrid } from 'lucide-react';
import ProductTable from './tables/ProductTable.tsx';
import FilterDropdown from './components/FilterDropdown.tsx';

const ProductsPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#E6EDEF] min-h-[1292px] w-full max-w-[1920px] mx-auto animate-fade">
      {/* Top Search Bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#E6EDEF]">
        <div className="relative w-[60%] max-w-[800px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="search" 
            className="w-full pl-12 pr-4 py-3 bg-white rounded-lg border-none shadow-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00485A]/10"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:bg-white/50 rounded-full transition-colors"><Settings size={20} /></button>
          <button className="p-2 text-gray-600 hover:bg-white/50 rounded-full transition-colors"><Bell size={20} /></button>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm cursor-pointer">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="User" className="w-full h-full object-cover" />
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
          <span className="opacity-70">Products</span>
          <ChevronRight size={14} className="opacity-50" />
          <span>Product List</span>
        </div>

        {/* Sales Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <SalesStatCard icon={<LayoutGrid className="text-orange-500" />} label="In-store Sales" value="$5,345.43" orders="5k orders" trend="18.6%" trendUp={true} />
          <SalesStatCard icon={<LayoutGrid className="text-blue-500" />} label="Website Sales" value="$674,347.12" orders="21k orders" trend="18.6%" trendUp={true} />
          <SalesStatCard icon={<LayoutGrid className="text-purple-500" />} label="Discount" value="$14,235.12" orders="6k orders" trend="" trendUp={true} />
          <SalesStatCard icon={<LayoutGrid className="text-teal-500" />} label="Affiliate" value="$8,345.23" orders="150 orders" trend="18.6%" trendUp={false} />
        </div>

        {/* Filters Section */}
        <div className="flex flex-wrap items-center gap-8 mb-6 text-sm font-bold text-[#00485A]">
          <div className="flex items-center gap-3">
            <span>Status :</span>
            <FilterDropdown placeholder="Search Status" />
          </div>
          <div className="flex items-center gap-3">
            <span>Category :</span>
            <FilterDropdown placeholder="Search Category" />
          </div>
          <div className="flex items-center gap-3">
            <span>Stock :</span>
            <FilterDropdown placeholder="Search Stock" />
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Table Actions */}
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search Product" 
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#00485A]"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-bold text-[#00485A] hover:bg-gray-50 transition-colors">
                <Download size={16} />
                Export
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#00485A] rounded-lg text-sm font-bold text-white hover:bg-[#003d4d] transition-shadow shadow-md">
                <Plus size={16} />
                Add Product
              </button>
            </div>
          </div>

          <ProductTable />

          {/* Table Footer / Pagination */}
          <div className="px-6 py-4 flex items-center justify-between text-[13px] text-gray-500 border-t border-gray-100">
            <span>Showing 1 to 7 of 50 entries</span>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span>Items per page :</span>
                <select className="border border-gray-200 rounded px-2 py-1 focus:outline-none">
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
              </div>
              <div className="flex items-center gap-4">
                <span>1 - 10 of 16</span>
                <div className="flex items-center gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded opacity-40"><ChevronRight size={18} className="rotate-180" /></button>
                  <button className="p-1 hover:bg-gray-100 rounded text-[#00485A]"><ChevronRight size={18} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Footer */}
        <div className="mt-8 py-4 flex items-center justify-between text-[13px] text-gray-500">
          <span>© 2024, made with ❤️ by Orbitwebtech</span>
          <div className="flex items-center gap-6">
            <span className="cursor-pointer hover:text-[#00485A]">License</span>
            <span className="cursor-pointer hover:text-[#00485A]">More Themes</span>
            <span className="cursor-pointer hover:text-[#00485A]">Documentation</span>
            <span className="cursor-pointer hover:text-[#00485A]">Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SalesStatCard = ({ icon, label, value, orders, trend, trendUp }: any) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center gap-5 transition-transform hover:scale-[1.02]">
    <div className="p-4 bg-[#f8fafb] rounded-xl text-2xl shadow-inner">
      {icon}
    </div>
    <div className="flex-1">
      <p className="text-gray-500 text-sm font-medium">{label}</p>
      <h3 className="text-xl font-bold text-[#00485A] mt-1">{value}</h3>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-gray-400 text-xs">{orders}</span>
        {trend && (
          <span className={`text-[11px] font-bold flex items-center ${trendUp ? 'text-green-500' : 'text-red-500'}`}>
            {trendUp ? '▲' : '▼'} {trend}
          </span>
        )}
      </div>
    </div>
  </div>
);

export default ProductsPage;
