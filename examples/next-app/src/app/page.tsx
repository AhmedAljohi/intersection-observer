'use client';
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { LazyRender } from "@intersection-observer/next";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  ref?: React.Ref<HTMLDivElement>;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products?limit=1000")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Product List</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 24,
        }}
      >
        {products.map((product) => (
          <LazyRender key={product.id}>
            {({ inView, ref }) => (
              <div ref={ref}>
                {inView && (
                  <ProductCard
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    thumbnail={product.thumbnail}
                  />
                )}
              </div>
            )}
          </LazyRender>
        ))}
      </div>
    </div>
  );
}
