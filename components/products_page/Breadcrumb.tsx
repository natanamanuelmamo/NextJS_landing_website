"use client";

type BreadcrumbProps = {
  currentCategory: string;
};

export default function Breadcrumb({ currentCategory }: BreadcrumbProps) {
  return (
    <div className="text-sm text-gray-600 mb-6">
        <br />
        <br />
      Home / <span className="font-medium text-green-700">Products</span>
      {currentCategory !== "All" && (
        <> / <span className="font-medium">{currentCategory}</span></>
      )}
    </div>
  );
}
