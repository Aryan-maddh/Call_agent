import React from 'react';
import { Edit2, Trash2, MoreVertical } from 'lucide-react';

const products = [
  { id: '1', name: 'Otcom', desc: 'Lakin, Kautzer And Witting', category: 'Shoes', stock: true, suk: '88662', price: '$254.18', qty: 6, status: 'Inactive', color: 'bg-orange-200' },
  { id: '2', name: 'Konklux', desc: 'Ankunding Inc', category: 'Household', stock: true, suk: '73896', price: '$988.47', qty: 2, status: 'Inactive', color: 'bg-blue-300' },
  { id: '3', name: 'Tresom', desc: 'Deckow And Sons', category: 'Household', stock: true, suk: '55772', price: '$946.62', qty: 12, status: 'Publish', color: 'bg-purple-400' },
  { id: '4', name: 'Rt', desc: 'Romaguera, O\'Connell And Abernathy', category: 'Household', stock: true, suk: '36552', price: '$514.14', qty: 35, status: 'Inactive', color: 'bg-pink-400' },
  { id: '5', name: 'Keylex', desc: 'Hane-Bednar', category: 'Office', stock: true, suk: '12358', price: '$338.64', qty: 25, status: 'Publish', color: 'bg-green-400' },
  { id: '6', name: 'Voltsillam', desc: 'Mohr And Sons', category: 'Shoes', stock: true, suk: '42578', price: '$140.79', qty: 42, status: 'Scheduled', color: 'bg-teal-400' },
  { id: '7', name: 'Witchip', desc: 'Heidenreich, Keeling And Kuhn', category: 'Shoes', stock: true, suk: '23568', price: '$573.24', qty: 3, status: 'Scheduled', color: 'bg-yellow-500' },
  { id: '8', name: 'Konklux', desc: 'Ankunding Inc', category: 'Office', stock: true, suk: '12457', price: '$338.64', qty: 5, status: 'Inactive', color: 'bg-red-400' },
  { id: '9', name: 'Tresom', desc: 'Deckow And Sons', category: 'Office', stock: true, suk: '12365', price: '$988.47', qty: 45, status: 'Publish', color: 'bg-indigo-400' },
];

const ProductTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="text-[#00485A] text-[12px] font-bold uppercase tracking-wide bg-[#f8fafb] border-b border-gray-100">
            <th className="px-6 py-4 w-12 border-r border-gray-100">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#00485A]" />
            </th>
            <th className="px-6 py-4 border-r border-gray-100">PRODUCT</th>
            <th className="px-6 py-4 border-r border-gray-100">CATEGORY</th>
            <th className="px-6 py-4 border-r border-gray-100">STOCK</th>
            <th className="px-6 py-4 border-r border-gray-100">SUK</th>
            <th className="px-6 py-4 border-r border-gray-100">PRICE</th>
            <th className="px-6 py-4 border-r border-gray-100">QTY</th>
            <th className="px-6 py-4 border-r border-gray-100">STATUS</th>
            <th className="px-6 py-4 text-center">ACTIONS</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 border-r border-gray-100">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#00485A]" />
              </td>
              <td className="px-6 py-4 border-r border-gray-100">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${product.color} flex-shrink-0`}></div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[#00485A] text-sm">{product.name}</span>
                    <span className="text-[11px] text-gray-500">{product.desc}</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-100">
                <span className="text-[13px] text-gray-600 font-medium">{product.category}</span>
              </td>
              <td className="px-6 py-4 border-r border-gray-100 text-center">
                <div className="relative inline-block w-10 h-5">
                  <input type="checkbox" defaultChecked={product.stock} className="sr-only peer" />
                  <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00485A]"></div>
                </div>
              </td>
              <td className="px-6 py-4 border-r border-gray-100">
                <span className="text-[13px] text-gray-600 font-medium">{product.suk}</span>
              </td>
              <td className="px-6 py-4 border-r border-gray-100">
                <span className="text-[13px] text-gray-600 font-bold">{product.price}</span>
              </td>
              <td className="px-6 py-4 border-r border-gray-100">
                <span className="text-[13px] text-gray-600 font-medium">{product.qty}</span>
              </td>
              <td className="px-6 py-4 border-r border-gray-100">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    product.status === 'Publish' ? 'bg-green-500' :
                    product.status === 'Scheduled' ? 'bg-orange-400' :
                    'bg-red-500'
                  }`}></div>
                  <span className={`text-[12px] font-bold ${
                    product.status === 'Publish' ? 'text-green-600' :
                    product.status === 'Scheduled' ? 'text-orange-500' :
                    'text-red-500'
                  }`}>
                    {product.status}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-3">
                  <button className="text-gray-600 hover:text-green-600 transition-colors"><Edit2 size={16} /></button>
                  <button className="text-gray-600 hover:text-red-600 transition-colors"><Trash2 size={16} /></button>
                  <button className="text-gray-600 hover:text-[#00485A] transition-colors"><MoreVertical size={16} /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
