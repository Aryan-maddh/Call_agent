import { Home, ChevronRight } from 'lucide-react';

export default function Breadcrumb() {
  return (
    <div className="flex items-center gap-2 mb-6">
      <span className="text-[#00485A] font-medium text-lg">E-Commerce</span>
      <ChevronRight size={14} className="text-[#00485A] opacity-80" />
      <Home size={18} className="text-[#00485A] opacity-80" />
      <ChevronRight size={14} className="text-[#00485A] opacity-80" />
      <span className="text-[#00485A] opacity-80 text-base">Dashboard</span>
    </div>
  );
}
