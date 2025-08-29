import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/products/${product.id}`}>
      <motion.div
        className="card card-hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          {product.discount && (
            <div className="absolute top-2 right-2 bg-accent-600 text-white px-2 py-1 rounded-full text-sm font-medium">
              {product.discount}% OFF
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg font-medium text-warm-900 mb-1">{product.name}</h3>
          <p className="text-sm text-warm-600 mb-2 line-clamp-2">{product.description}</p>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-primary-600">₹{product.price}</span>
              {product.originalPrice && (
                <span className="ml-2 text-sm text-warm-500 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            
            <motion.button
              onClick={handleAddToCart}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                isHovered
                  ? 'bg-primary-600 text-white'
                  : 'bg-warm-100 text-warm-700 hover:bg-warm-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard; 