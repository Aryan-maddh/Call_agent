import { Search, Settings, Bell, Home, ChevronRight, Upload, Plus, Trash2, Calendar, ChevronDown, Check } from 'lucide-react';

const AddProductPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#E6EDEF] min-h-[1896px] w-full max-w-[1920px] mx-auto animate-fade">
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
        <div className="flex items-center gap-2 text-[13px] text-[#00485A] font-medium mb-4">
          <span className="opacity-70">E-Commerce</span>
          <ChevronRight size={14} className="opacity-50" />
          <Home size={16} className="opacity-70" />
          <ChevronRight size={14} className="opacity-50" />
          <span className="opacity-70">Products</span>
          <ChevronRight size={14} className="opacity-50" />
          <span>Add Product</span>
        </div>

        {/* Header with Save Button */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-[25px] font-medium text-[#00485A] leading-tight">Add a new Product</h1>
            <p className="text-[17px] text-[#3D3D3D] mt-1">Orders placed across your store</p>
          </div>
          <button className="bg-[#00485A] text-white px-6 py-2 rounded shadow-md font-medium text-sm hover:bg-[#003d4d] transition-colors">
            Save Draft
          </button>
        </div>

        {/* Form Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_576px] gap-8">
          
          {/* Left Column */}
          <div className="space-y-8">
            
            {/* Transactions Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-[21px] font-semibold text-[#00485A] mb-6">Transactions</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-[18px] text-[#3E3E3E] mb-2">Name</label>
                  <input type="text" placeholder="Enter your Product Name" className="w-full px-4 py-2 border border-[#3E3E3E] rounded text-sm placeholder:text-[#BEBEBE]" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[18px] text-[#3E3E3E] mb-2">SKU</label>
                    <input type="text" placeholder="Enter your SKU" className="w-full px-4 py-2 border border-[#3E3E3E] rounded text-sm placeholder:text-[#BEBEBE]" />
                  </div>
                  <div>
                    <label className="block text-[18px] text-[#3E3E3E] mb-2">Barcode</label>
                    <input type="text" placeholder="Enter your Baecode" className="w-full px-4 py-2 border border-[#3E3E3E] rounded text-sm placeholder:text-[#BEBEBE]" />
                  </div>
                </div>
                <div>
                  <label className="block text-[18px] text-[#3E3E3E] mb-2">Description (Optional)</label>
                  <textarea placeholder="Enter your Description..." rows={4} className="w-full px-4 py-2 border border-[#3E3E3E] rounded text-sm placeholder:text-[#BEBEBE] resize-none"></textarea>
                </div>
              </div>
            </div>

            {/* Media Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-[21px] font-semibold text-[#00485A] mb-6">Media</h2>
              <div className="border-2 border-dashed border-[#00485A]/30 rounded-xl p-12 flex flex-col items-center justify-center bg-gray-50/50">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 opacity-40">
                  <Upload size={32} className="text-[#00485A]" />
                </div>
                <p className="text-[20px] text-[#858D9D] mb-6">Drag and drop your image here</p>
                <button className="bg-[#F0F1F3] text-[#00485A] px-6 py-2 rounded shadow-sm font-bold text-[18px] border border-gray-100">
                  Add Image
                </button>
              </div>
            </div>

            {/* Variants Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-[21px] font-semibold text-[#00485A] mb-6">Variants</h2>
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-end gap-4">
                    <div className="flex-1 max-w-[339px]">
                      <label className="block text-[18px] text-[#3E3E3E] mb-2">Options</label>
                      <div className="relative">
                        <select className="w-full px-4 py-2 border border-[#3E3E3E] rounded text-sm text-[#BEBEBE] appearance-none">
                          <option>Select Size</option>
                        </select>
                        <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <input type="text" placeholder="Enter your Size" className="w-full px-4 py-2 border border-[#3E3E3E] rounded text-sm placeholder:text-[#BEBEBE]" />
                    </div>
                    <button className="p-2.5 border-2 border-red-500 rounded text-red-500 hover:bg-red-50 transition-colors">
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
                <button className="flex items-center gap-2 bg-[#00485A] text-white px-6 py-2 rounded mt-4 font-medium">
                  <Plus size={18} />
                  Add another option
                </button>
              </div>
            </div>

            {/* Inventory Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-[21px] font-semibold text-[#00485A] mb-6">Inventory</h2>
              <div className="grid grid-cols-[200px_1fr] gap-8">
                <div className="space-y-4">
                  {['Restock', 'Shipping', 'Global Delivery', 'Attributes', 'Advanced'].map((label) => (
                    <div key={label} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-[23px] h-[23px] rounded-full border-2 flex items-center justify-center ${label === 'Attributes' ? 'border-[#00485A]' : 'border-[#B5B5B5]'}`}>
                        {label === 'Attributes' && <div className="w-3 h-3 bg-[#00485A] rounded-full"></div>}
                      </div>
                      <span className={`text-[18px] ${label === 'Attributes' ? 'text-[#00485A] font-medium' : 'text-[#3E3E3E]'}`}>{label}</span>
                    </div>
                  ))}
                </div>
                <div className="border-l border-[#B5B5B5] pl-8 space-y-6">
                  <h3 className="text-[20px] font-medium text-[#00485A]">Attributes</h3>
                  <div className="space-y-4">
                    {['Fragile Product', 'Biodegradable'].map((label) => (
                      <div key={label} className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-[21px] h-[21px] border-2 border-[#B5B5B5] rounded flex items-center justify-center">
                            {label === 'Biodegradable' && <Check size={14} className="text-[#00485A]" />}
                          </div>
                          <span className="text-[18px] text-[#3E3E3E]">{label}</span>
                        </div>
                        {label === 'Biodegradable' && (
                          <input type="text" placeholder="Max. allowed Temperature" className="ml-[34px] w-full max-w-[339px] px-4 py-2 border border-[#3E3E3E] rounded text-sm placeholder:text-[#BEBEBE]" />
                        )}
                      </div>
                    ))}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-[21px] h-[21px] border-2 border-[#B5B5B5] rounded"></div>
                        <span className="text-[18px] text-[#3E3E3E]">Expiry Date of Product</span>
                      </div>
                      <div className="ml-[34px] relative max-w-[339px]">
                        <input type="text" placeholder="9 April 2024" className="w-full px-4 py-2 border border-[#3E3E3E] rounded text-sm placeholder:text-[#BEBEBE]" />
                        <Calendar size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3E3E3E]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="space-y-8">
            
            {/* Pricing Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-[21px] font-semibold text-[#00485A] mb-6">Pricing</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-[18px] text-[#3E3E3E] mb-2">Base Price</label>
                  <input type="text" placeholder="Enter your Price" className="w-full px-4 py-2 border border-[#3E3E3E] rounded text-sm placeholder:text-[#BEBEBE]" />
                </div>
                <div>
                  <label className="block text-[18px] text-[#3E3E3E] mb-2">Discounted Price</label>
                  <input type="text" placeholder="Enter your Discounted Price" className="w-full px-4 py-2 border border-[#3E3E3E] rounded text-sm placeholder:text-[#BEBEBE]" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[21px] h-[21px] border-2 border-[#5B5B5B] rounded-sm flex items-center justify-center">
                    <Check size={14} className="text-[#5B5B5B]" />
                  </div>
                  <span className="text-[16px] text-[#5B5B5B]">Charge tax on this product</span>
                </div>
                <div className="border-t border-black/20 pt-4 flex items-center justify-between">
                  <span className="text-[19px] font-medium text-[#00485A]">In stock</span>
                  <div className="w-11 h-5 bg-[#D9D9D9] rounded-full relative">
                    <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Organize Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-[21px] font-semibold text-[#00485A] mb-6">Organize</h2>
              <div className="space-y-6">
                {[
                  { label: 'Vendor', placeholder: 'Select Vendor' },
                  { label: 'Category', placeholder: 'Select Category' },
                  { label: 'Collection', placeholder: 'Select Collection' },
                  { label: 'Status', placeholder: 'Select Status' }
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block text-[18px] text-[#3E3E3E] mb-2">{field.label}</label>
                    <div className="relative">
                      <select className="w-full px-4 py-2 border border-[#3E3E3E] rounded text-sm text-[#BEBEBE] appearance-none">
                        <option>{field.placeholder}</option>
                      </select>
                      <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                ))}
                <div>
                  <label className="block text-[18px] text-[#3E3E3E] mb-2">Status</label>
                  <div className="flex flex-wrap gap-2 p-2 border border-[#3E3E3E] rounded min-h-[70px]">
                    {['Normal', 'Standard', 'Premium'].map((tag) => (
                      <div key={tag} className="flex items-center gap-2 bg-[#E6EDEF] px-2 py-1 rounded text-[17px] text-[#5B5B5B]">
                        {tag}
                        <Plus size={14} className="rotate-45" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Page Footer */}
        <div className="mt-24 py-6 border-t border-gray-200 flex items-center justify-between text-[18px] text-[#3D3D3D]">
          <span>© 2024, made with ❤️ by Orbitwebtech</span>
          <div className="flex items-center gap-10">
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

export default AddProductPage;
