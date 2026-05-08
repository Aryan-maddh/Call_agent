import { Search, Settings, Bell, Home, ChevronRight, Plus, Edit2, Trash2 } from 'lucide-react';

const categories = [
  { id: '1', name: 'Otcom', desc: 'Lakin, Kautzer And Witting', totalProducts: '4665', earning: '$7912.99', color: 'bg-orange-200' },
  { id: '2', name: 'Konklux', desc: 'Ankunding Inc', totalProducts: '4186', earning: '$7912.98', color: 'bg-blue-300' },
  { id: '3', name: 'Tresom', desc: 'Deckow And Sons', totalProducts: '1254', earning: '$7912.49', color: 'bg-purple-400' },
  { id: '4', name: 'Rt', desc: 'Romaguera, O\'Connell And Abernathy', totalProducts: '4940', earning: '$7912.95', color: 'bg-pink-400' },
  { id: '5', name: 'Keylex', desc: 'Hane-Bednar', totalProducts: '2458', earning: '$72912.99', color: 'bg-green-400' },
  { id: '6', name: 'Voltsillam', desc: 'Mohr And Sons', totalProducts: '2437', earning: '$7912.9942', color: 'bg-teal-400' },
  { id: '7', name: 'Witchip', desc: 'Heidenreich, Keeling And Kuhn', totalProducts: '2596', earning: '$7912.99', color: 'bg-yellow-500' },
  { id: '8', name: 'Konklux', desc: 'Ankunding Inc', totalProducts: '2369', earning: '$7912.995', color: 'bg-red-400' },
  { id: '9', name: 'Tresom', desc: 'Deckow And Sons', totalProducts: '1478', earning: '$7912.9945', color: 'bg-indigo-400' },
];

const CategoryListPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#E6EDEF] min-h-[1000px] w-full max-w-[1920px] mx-auto animate-fade">
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
          <span>Category List</span>
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
            <button className="flex items-center gap-2 px-4 py-2 bg-[#00485A] rounded-lg text-sm font-bold text-white hover:bg-[#003d4d] transition-shadow shadow-md">
              <Plus size={16} />
              Add Category
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[#00485A] text-[12px] font-bold uppercase tracking-wide bg-[#f8fafb] border-b border-gray-100">
                  <th className="px-6 py-4 w-12 border-r border-gray-100">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#00485A]" />
                  </th>
                  <th className="px-6 py-4 border-r border-gray-100">CATEGORIES</th>
                  <th className="px-6 py-4 border-r border-gray-100">TOTAL PRODUCTS</th>
                  <th className="px-6 py-4 border-r border-gray-100">TOTAL EARNING</th>
                  <th className="px-6 py-4 text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {categories.map((cat) => (
                  <tr key={cat.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 border-r border-gray-100">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#00485A]" />
                    </td>
                    <td className="px-6 py-4 border-r border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg ${cat.color} flex-shrink-0`}></div>
                        <div className="flex flex-col">
                          <span className="font-bold text-[#00485A] text-sm">{cat.name}</span>
                          <span className="text-[11px] text-gray-500">{cat.desc}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 border-r border-gray-100">
                      <span className="text-[13px] text-gray-600 font-medium">{cat.totalProducts}</span>
                    </td>
                    <td className="px-6 py-4 border-r border-gray-100">
                      <span className="text-[13px] text-gray-600 font-bold">{cat.earning}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-3">
                        <button className="text-gray-600 hover:text-[#00485A] transition-colors"><Edit2 size={16} /></button>
                        <button className="text-gray-600 hover:text-red-600 transition-colors"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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

export default CategoryListPage;
