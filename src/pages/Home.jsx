import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import CategorySection from "../components/CategorySection";
import Footer from "../components/Footer";

export default function Home() {
  const [popular, setPopular] = useState([]);
  const [newRelease, setNewRelease] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const [categories, setCategories] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL || ''

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [popularRes, newRes, bestRes, catRes] = await Promise.all([
          fetch(`${baseUrl}/product?page=1&limit=10&isPopular=true`),
          fetch(`${baseUrl}/product?page=1&limit=10&newRelease=true`),
          fetch(`${baseUrl}/product?page=1&limit=10&bestSeller=true`),
          fetch(`${baseUrl}/category/products`)
        ]);

        const popularData = await popularRes.json();
        const newData = await newRes.json();
        const bestData = await bestRes.json();
        const catData = await catRes.json();

        setPopular(popularData.data || []);
        setNewRelease(newData.data || []);
        setBestSeller(bestData.data || []);
        setCategories(catData.data || []);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar (fixed, hides on scroll) */}
      {/* Offset for fixed navbar height */}
      <div>
        <main className="max-w-7xl mx-auto px-2">
          <Hero />
          <Section title="Popular Products" products={popular} />
          <Section title="New Releases" products={newRelease} />
          <Section title="Best Sellers" products={bestSeller} />
          <CategorySection categories={categories} />
        </main>
      </div>
    </div>
  );
}
