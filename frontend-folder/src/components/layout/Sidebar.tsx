import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, Users, Star, Share2, Settings, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { 
    icon: Package, 
    label: 'Products', 
    hasArrow: true,
    subItems: [
      { label: 'Product List', path: '/products' },
      { label: 'Add Product', path: '/products/add' },
      { label: 'Category List', path: '/products/categories' },
    ]
  },
  { 
    icon: ShoppingCart, 
    label: 'Order', 
    hasArrow: true,
    subItems: [
      { label: 'Order List', path: '/orders' },
      { label: 'Order Details', path: '/orders/details' },
    ]
  },
  { 
    icon: Users, 
    label: 'Customer', 
    hasArrow: true,
    subItems: [
      { label: 'All Customers', path: '/customers' },
      { 
        label: 'Customer Details', 
        hasArrow: true,
        nestedItems: [
          { label: 'Overview', path: '/customers/details' },
          { label: 'Security', path: '/customers/security' },
          { label: 'Address & Billing', path: '/customers/billing' },
          { label: 'Notifications', path: '/customers/notifications' },
        ]
      },
      { label: 'Manage Reviews', path: '/customers/reviews' },
      { label: 'Referrals', path: '/customers/referrals' },
    ]
  },
  { icon: Star, label: 'Manage Reviews' },
  { icon: Share2, label: 'Referrals' },
  { icon: Settings, label: 'Settings', hasArrow: true },
];

export default function Sidebar() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(() => {
    if (location.pathname.startsWith('/products')) return 'Products';
    if (location.pathname.startsWith('/orders')) return 'Order';
    if (location.pathname.startsWith('/customers')) return 'Customer';
    return null;
  });
  
  const [openNestedDropdown, setOpenNestedDropdown] = useState<string | null>(() => {
    if (location.pathname.startsWith('/customers/details') || location.pathname.includes('/security') || location.pathname.includes('/billing') || location.pathname.includes('/notifications')) return 'Customer Details';
    return null;
  });

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const toggleNestedDropdown = (label: string) => {
    setOpenNestedDropdown(openNestedDropdown === label ? null : label);
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-[268px] bg-[#00485A] flex flex-col z-30 overflow-y-auto border-r border-white/5 shadow-[3px_0px_5px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col items-center pt-8 pb-4">
        <h1 className="text-white text-4xl font-serif tracking-widest mb-6">LOGO</h1>
        <div className="w-[85%] h-[1px] bg-white/20"></div>
      </div>

      <div className="px-6 py-4">
        <div className="w-full flex items-center justify-between bg-[#E6EDEF] rounded px-3 py-2 text-[#00485A] text-sm font-semibold cursor-pointer shadow-[3px_3px_4px_rgba(0,0,0,0.25)]">
          <div className="flex items-center gap-2">
            <ShoppingCart size={18} />
            <span>E-Commerce</span>
          </div>
          <ChevronRight size={16} className="rotate-90" />
        </div>
      </div>

      <nav className="flex-1 px-4 mt-2">
        <div className="flex flex-col gap-[2px]">
          {navItems.map((item) => {
            const isDropdown = !!item.subItems;
            const isOpen = openDropdown === item.label;
            const isItemActive = item.path === location.pathname || (item.subItems?.some(sub => sub.path === location.pathname || sub.nestedItems?.some(n => n.path === location.pathname)));

            return (
              <div key={item.label}>
                {isDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-all duration-200 group border-b border-white/10 ${
                        isOpen ? 'text-white' : 'text-[#B5B5B5] hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span className="text-[20px] font-normal">{item.label}</span>
                      <ChevronRight size={14} className={`transition-transform duration-200 opacity-60 ${isOpen ? 'rotate-90' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                          <div className="py-1">
                            {item.subItems?.map((sub) => {
                              if (sub.nestedItems) {
                                const isNestedOpen = openNestedDropdown === sub.label;
                                const isAnyNestedActive = sub.nestedItems.some(n => n.path === location.pathname);
                                return (
                                  <div key={sub.label}>
                                    <button
                                      onClick={() => toggleNestedDropdown(sub.label)}
                                      className={`w-full flex items-center justify-between py-3 px-6 text-[18px] font-normal border-b border-white/10 transition-colors ${
                                        isNestedOpen ? 'bg-white/10 text-white' : 'text-[#B5B5B5] hover:text-white hover:bg-white/5'
                                      }`}
                                    >
                                      <span>{sub.label}</span>
                                      <ChevronRight size={14} className={`transition-transform duration-200 opacity-60 ${isNestedOpen ? 'rotate-90' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                      {isNestedOpen && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-[#00485A]/50">
                                          {sub.nestedItems.map((nested) => (
                                            <NavLink key={nested.label} to={nested.path} className={({ isActive }) => `flex items-center gap-2 py-3 px-10 text-[18px] font-normal border-b border-white/5 transition-colors ${isActive ? 'bg-[#D9D9D9]/20 text-white' : 'text-[#B5B5B5] hover:text-white hover:bg-white/5'}`}>
                                              {nested.label}
                                            </NavLink>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                );
                              }
                              return (
                                <NavLink key={sub.label} to={sub.path} className={({ isActive }) => `flex items-center gap-2 py-3 px-6 text-[18px] font-normal border-b border-white/10 transition-colors ${isActive ? 'bg-[#D9D9D9]/20 text-white' : 'text-[#B5B5B5] hover:text-white hover:bg-white/5'}`}>
                                  {sub.label}
                                </NavLink>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <NavLink to={item.path || '#'} className={({ isActive }) => `w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-all duration-200 group border-b border-white/10 ${isActive ? 'bg-white/20 text-white' : 'text-[#B5B5B5] hover:bg-white/5 hover:text-white'}`}>
                    <span className="text-[20px] font-normal">{item.label}</span>
                    {item.hasArrow && <ChevronRight size={14} className="opacity-60" />}
                  </NavLink>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
