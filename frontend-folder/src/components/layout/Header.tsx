import { Search, Settings, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white shadow-card flex items-center justify-between px-6 py-3">
      <div className="flex-1 max-w-lg relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="search"
          className="w-full pl-9 pr-4 py-2 bg-gray-50 rounded border border-gray-100 text-sm text-gray-500 outline-none focus:border-[#00485A] transition-colors"
        />
      </div>
      <div className="flex items-center gap-4 ml-4">
        <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
          <Settings size={18} className="text-gray-500" />
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors relative">
          <Bell size={18} className="text-gray-500" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-9 h-9 rounded-full bg-[#EE6832] flex items-center justify-center text-white text-sm font-semibold cursor-pointer hover:opacity-90 transition-opacity">
          A
        </div>
      </div>
    </header>
  );
}
