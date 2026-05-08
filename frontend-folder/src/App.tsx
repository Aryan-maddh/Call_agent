import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar.tsx';
import Header from './components/layout/Header.tsx';
import Dashboard from './pages/Dashboard.tsx';
import ProductsPage from './pages/products/ProductsPage.tsx';
import AddProductPage from './pages/products/AddProductPage.tsx';
import CategoryListPage from './pages/products/CategoryListPage.tsx';
import OrderListPage from './pages/orders/OrderListPage.tsx';
import OrderDetailsPage from './pages/orders/OrderDetailsPage.tsx';
import CustomerListPage from './pages/customers/CustomerListPage.tsx';
import CustomerOverviewPage from './pages/customers/CustomerOverviewPage.tsx';
import CustomerSecurityPage from './pages/customers/CustomerSecurityPage.tsx';
import CustomerBillingPage from './pages/customers/CustomerBillingPage.tsx';
import CustomerNotificationsPage from './pages/customers/CustomerNotificationsPage.tsx';
import ManageReviewsPage from './pages/customers/ManageReviewsPage.tsx';
import ReferralsPage from './pages/customers/ReferralsPage.tsx';
import SettingsPage from './pages/settings/SettingsPage.tsx';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#E6EDEF] font-roboto flex">
        {/* Sidebar stays fixed as per original */}
        <Sidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 ml-[268px] flex flex-col min-h-screen overflow-x-hidden">
          <Header />
          
          <main className="flex-1 p-6">
            <div className="mx-auto max-w-[1920px] min-h-[1997px] bg-[#E6EDEF]">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/add" element={<AddProductPage />} />
                <Route path="/products/categories" element={<CategoryListPage />} />
                <Route path="/orders" element={<OrderListPage />} />
                <Route path="/orders/details" element={<OrderDetailsPage />} />
                <Route path="/customers" element={<CustomerListPage />} />
                <Route path="/customers/details" element={<CustomerOverviewPage />} />
                <Route path="/customers/security" element={<CustomerSecurityPage />} />
                <Route path="/customers/billing" element={<CustomerBillingPage />} />
                <Route path="/customers/notifications" element={<CustomerNotificationsPage />} />
                <Route path="/manage-reviews" element={<ManageReviewsPage />} />
                <Route path="/referrals" element={<ReferralsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                {/* Fallback for other routes */}
                <Route path="*" element={<Dashboard />} />
              </Routes>
            </div>
          </main>

          {/* ── Page Footer ── */}
          <footer className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-[#E6EDEF]">
            <span className="text-[#5B5B5B] text-[13px]">
              © 2024, made with{' '}
              <span className="text-red-500">❤</span>
              {' '}by Orbitwebtech
            </span>
            <div className="flex items-center gap-6">
              {['License', 'More Themes', 'Documentation', 'Support'].map(link => (
                <a
                  key={link}
                  href="#"
                  className="text-[#5B5B5B] text-[13px] hover:text-[#00485A] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}
