import React from 'react';

interface ProductCardProps {
  title: string;
  price: number;
  description: string;
  thumbnail: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, description, thumbnail }) => (
  <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 16, maxWidth: 300 }}>
    <img src={thumbnail} alt={title} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 4 }} />
    <h2 style={{ fontSize: 18, margin: '12px 0 4px' }}>{title}</h2>
    <p style={{ color: '#888', margin: '4px 0' }}>${price}</p>
    <p style={{ fontSize: 14, color: '#555' }}>{description}</p>
  </div>
);

export default ProductCard; 