export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  image: string;
  sales: number;
  revenue: number;
}

export interface ProductStats {
  totalProducts: number;
  activeProducts: number;
  lowStock: number;
  outOfStock: number;
}
