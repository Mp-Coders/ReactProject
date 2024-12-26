import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css';

function ProductDetail() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = {
        1: { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 500 },
        2: { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 1000 },
        3: { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 1500 },
      };
      setProduct(productData[id]);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail-container">
      <h1 className="product-name">{product.name}</h1>
      <p className="product-description">{product.description}</p>
      <p className="product-price">₨ {product.price}</p>
    </div>
  );
}

export default ProductDetail;
