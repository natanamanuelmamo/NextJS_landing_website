'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function BreadcrumbProduct({ productName }: { productName: string }) {
  return (
    <nav className="text-sm text-gray-600 mb-4 flex items-center space-x-1">
      <Link href="/" className="hover:text-green-600 transition-colors font-medium">
        Home
      </Link>
      <ChevronRight className="w-4 h-4" />
      <Link href="/products" className="hover:text-green-600 transition-colors font-medium">
        Products
      </Link>
      <ChevronRight className="w-4 h-4" />
      <span className="text-gray-800 font-semibold truncate max-w-[200px]">{productName}</span>
    </nav>
  );
}
