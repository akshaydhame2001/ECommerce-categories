"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/ProductCard";
import usePagination from "@/hooks/usePagination";
import Pagination from "@/components/Pagination";

const CategoryPage = ({ params }) => {
  const { category } = params;
  const [products, setProducts] = useState([]);
  const decodedCategory = decodeURIComponent(category);
  const { currentPage, totalPages, goToPage, getCurrentItems } = usePagination({
    perPage: 4,
    totalItems: products.length,
  });

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${apiBaseUrl}/products/category/${decodedCategory}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [decodedCategory]);

  const paginatedProducts = getCurrentItems(products);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md fixed top-0 w-full z-10 p-4">
        <h1 className="text-xl font-bold text-dark-black">
          Category: {decodedCategory}
        </h1>
      </header>
      <main className="max-w-7xl mx-auto pt-20 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      </main>
    </div>
  );
};

export default CategoryPage;
