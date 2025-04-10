    // src/pages/CategoryPage.tsx
// Page for displaying products in a category
import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const getCategoryTitle = () => {
    switch (categoryId) {
      case 'zym-sport':
        return 'ZYM SPORT +';
      case 'variety-packs':
        return 'VARIETY PACKS +';
      case 'accessories':
        return 'ACCESSORIES +';
      default:
        return 'Category';
    }
  };

  const getCategoryDescription = () => {
    switch (categoryId) {
      case 'zym-sport':
        return 'High-performance nutrition products designed for athletes';
      case 'variety-packs':
        return 'Curated collections to support your fitness goals';
      case 'accessories':
        return 'Essential gear to enhance your workout experience';
      default:
        return '';
    }
  };

  const getCategoryImage = () => {
    switch (categoryId) {
      case 'zym-sport':
        return 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
      case 'variety-packs':
        return 'https://images.unsplash.com/photo-1579722820258-02ad05d08058?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
      case 'accessories':
        return 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80';
      default:
        return '';
    }
  };

  return (
    <div>
      {/* Category Hero */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${getCategoryImage()}')` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center p-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{getCategoryTitle()}</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">{getCategoryDescription()}</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Mock Products */}
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 bg-gray-200 animate-pulse-slow"></div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{getCategoryTitle().replace(' +', '')} Product {index + 1}</h3>
                <p className="text-sm text-gray-600 mb-2">Premium quality product</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">${(39.99 + index * 5).toFixed(2)}</span>
                  <div className="text-xs bg-gray-100 px-2 py-1 rounded">★★★★☆</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
