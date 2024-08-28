"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";
import Pagination from "../components/Pagination";
import axios from "axios";
import usePagination from "@/hooks/usePagination";
import Loader from "../components/Loader";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const { currentPage, totalPages, goToPage, getCurrentItems } = usePagination({
    perPage: 4,
    totalItems: categories.length,
  });

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${apiBaseUrl}/products/categories`);
        setCategories(
          response.data.map((name, index) => ({ id: index + 1, name }))
        );
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, [apiBaseUrl]);

  const currentCategories = getCurrentItems(categories);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header categories={categories.map((category) => category.name)} />
      <main className="max-w-7xl mx-auto pt-20 p-4">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategories.map((category) => (
                <CategoryCard key={category.id} title={category.name} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={goToPage}
            />
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
