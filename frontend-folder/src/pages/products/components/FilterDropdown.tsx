import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FilterDropdownProps {
  placeholder: string;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ placeholder }) => {
  return (
    <div className="relative min-w-[200px]">
      <input 
        type="text" 
        placeholder={placeholder} 
        className="w-full pl-4 pr-10 py-2 bg-white border border-gray-300 rounded text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[#00485A] text-gray-400 placeholder:text-gray-400"
      />
      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
    </div>
  );
};

export default FilterDropdown;
