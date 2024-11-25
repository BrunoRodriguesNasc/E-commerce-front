import Link from 'next/link';
import { ShoppingCart, Search, X } from 'lucide-react';

export function Header() {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-black text-white py-2 px-4 flex justify-between items-center text-sm">
        <span>Sign up and get 20% off to your first order.</span>
        <div className="flex items-center gap-2">
          <Link href="/signup" className="underline">Sign Up Now</Link>
          <button>
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <header className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black">SHOP.CO</Link>
          
          <nav className="flex space-x-8">
            <div className="group relative">
              <Link href="/shop" className="text-gray-700 hover:text-black">
                Shop
              </Link>
            </div>
            <Link href="/on-sale" className="text-gray-700 hover:text-black">On Sale</Link>
            <Link href="/new-arrivals" className="text-gray-700 hover:text-black">New Arrivals</Link>
            <Link href="/brands" className="text-gray-700 hover:text-black">Brands</Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-[300px] pl-12 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none"
              />
            </div>
            <Link href="/cart" className="flex items-center">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link href="/profile" className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-gray-200" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}