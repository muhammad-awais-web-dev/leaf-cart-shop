import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';
import heroImage from '@/assets/hero-plants.jpg';

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-6">
                <Leaf className="h-12 w-12 text-primary" />
                <h1 className="text-6xl font-bold text-foreground">
                  Lovable Plants
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your space with our curated collection of premium houseplants. 
                At Lovable Plants, we believe that every home deserves the beauty and 
                tranquility that plants bring. Each plant is carefully selected and nurtured 
                to ensure it thrives in your care. From low-maintenance beginners to exotic 
                statement pieces, discover the perfect green companion for your lifestyle.
              </p>
              
              <Link to="/products">
                <Button size="lg" className="text-lg px-8 py-6 group">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
