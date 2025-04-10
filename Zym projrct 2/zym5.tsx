// src/components/CategoryCard.tsx
// Card component for product categories
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  imageSrc: string;
  path: string;
  description?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  imageSrc,
  path,
  description
}) => {
  return (
    <Link to={path} className="category-card block">
      <div className="relative h-[280px]">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
          <h3 className="text-xl md:text-2xl font-bold mb-1">{title}</h3>
          {description && (
            <p className="text-sm text-gray-200 mb-3">{description}</p>
          )}
          <div className="flex items-center text-zym-accent font-medium text-sm">
            <span>SHOP NOW</span>
            <ArrowRight size={16} className="ml-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
