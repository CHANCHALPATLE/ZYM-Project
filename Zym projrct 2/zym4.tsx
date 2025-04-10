// src/components/HeroBanner.tsx
// Hero banner for the homepage
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HeroBanner: React.FC = () => {
  return (
    <div className="relative h-[500px] md:h-[650px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>
      
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-xl text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            ELEVATE YOUR <span className="text-zym-accent">PERFORMANCE</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Premium fitness gear and nutrition designed for athletes who demand the best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/category/zym-sport">
              <Button size="lg" className="bg-zym-blue hover:bg-zym-accent text-white">
                Shop Zym Sport
              </Button>
            </Link>
            <Link to="/new-arrivals">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                New Arrivals
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
