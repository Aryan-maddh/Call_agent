import { MoreHorizontal, Mouse, Gamepad2, Keyboard, Headphones, Smartphone } from 'lucide-react';
import { popularProducts } from '../../data/mockData';

const iconMap: Record<string, React.ElementType> = {
  Mouse, Game: Gamepad2, Keyboard, Earphone: Headphones, Smartphone
};

const iconColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];
const bgColors = ['#FFF0EE', '#E8FAF9', '#EAF5FB', '#EEF8F1', '#FFFBEB', '#F9F0FF'];

export default function PopularProducts() {
  return (
    <div className="bg-white rounded-[5px] shadow-card p-5">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-[#00485A] font-semibold text-xl">Popular Products</h3>
          <p className="text-[#5B5B5B] text-sm font-medium mt-1">Total 10.4k Visitors</p>
        </div>
        <button className="text-[#5B5B5B] hover:text-[#00485A] transition-colors p-1">
          <MoreHorizontal size={20} />
        </button>
      </div>
      <div className="space-y-0">
        {popularProducts.map((product, i) => {
          const IconComp = iconMap[product.category] || Smartphone;
          return (
            <div key={product.id}>
              <div className="flex items-center gap-4 py-3">
                <div className="w-[48px] h-[48px] rounded-[10px] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: bgColors[i] }}>
                  <IconComp size={22} style={{ color: iconColors[i] }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#1D1F2C] font-medium text-[15px] truncate">{product.name}</p>
                  <p className="text-[#5B5B5B] text-sm">{product.category}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-px h-8 bg-[#B5B5B5] opacity-60" />
                  <span className="text-[#1D1F2C] font-medium text-base whitespace-nowrap">{product.price}</span>
                </div>
              </div>
              {i < popularProducts.length - 1 && <div className="border-b border-dashed border-[#B5B5B5] opacity-50" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
