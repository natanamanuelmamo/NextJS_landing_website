'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function BreadcrumbCart() {
  return (
    <nav className="text-sm text-gray-500 mt-10 mb-6 flex items-center space-x-2">
      <Link href="/" className="hover:underline text-green-700 font-medium">
        Home
      </Link>
      <ChevronRight className="w-4 h-4" />
      <span className="text-gray-600">My Cart</span>
    </nav>
  );
}
