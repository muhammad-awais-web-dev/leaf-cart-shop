import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { Plant } from '@/store/CartSlice';
import { Link } from 'react-router-dom';
import monsteraImg from '@/assets/monstera.jpg';
import pothosImg from '@/assets/pothos.jpg';
import snakePlantImg from '@/assets/snake-plant.jpg';
import fiddleLeafImg from '@/assets/fiddle-leaf.jpg';
import zzPlantImg from '@/assets/zz-plant.jpg';
import peaceLilyImg from '@/assets/peace-lily.jpg';

const plants: Plant[] = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    price: 45.99,
    image: monsteraImg,
    category: 'Tropical',
    description: 'A stunning tropical plant with iconic split leaves that brings a jungle vibe to any space.',
    stock: 5,
    soldLastMonth: 87,
    careLevel: 'Easy',
    lightRequirement: 'Bright indirect light',
    wateringFrequency: 'Weekly',
  },
  {
    id: 2,
    name: 'Golden Pothos',
    price: 24.99,
    image: pothosImg,
    category: 'Trailing',
    description: 'Perfect for beginners, this trailing plant thrives in various conditions and purifies air.',
    soldLastMonth: 156,
    careLevel: 'Very Easy',
    lightRequirement: 'Low to bright indirect light',
    wateringFrequency: 'Every 1-2 weeks',
  },
  {
    id: 3,
    name: 'Snake Plant',
    price: 32.99,
    image: snakePlantImg,
    category: 'Low-Light',
    description: 'Nearly indestructible, this architectural plant tolerates neglect and low light beautifully.',
    stock: 3,
    soldLastMonth: 203,
    careLevel: 'Very Easy',
    lightRequirement: 'Low to bright light',
    wateringFrequency: 'Every 2-3 weeks',
  },
  {
    id: 4,
    name: 'Fiddle Leaf Fig',
    price: 65.99,
    image: fiddleLeafImg,
    category: 'Tropical',
    description: 'A statement plant with large, violin-shaped leaves that creates a dramatic focal point.',
    soldLastMonth: 125,
    careLevel: 'Moderate',
    lightRequirement: 'Bright indirect light',
    wateringFrequency: 'Weekly',
  },
  {
    id: 5,
    name: 'ZZ Plant',
    price: 38.99,
    image: zzPlantImg,
    category: 'Low-Light',
    description: 'Glossy green leaves and extreme drought tolerance make this a perfect low-maintenance choice.',
    soldLastMonth: 178,
    careLevel: 'Very Easy',
    lightRequirement: 'Low to bright indirect light',
    wateringFrequency: 'Every 2-3 weeks',
  },
  {
    id: 6,
    name: 'Peace Lily',
    price: 29.99,
    image: peaceLilyImg,
    category: 'Trailing',
    description: 'Elegant white blooms and air-purifying qualities make this a popular indoor favorite.',
    soldLastMonth: 192,
    careLevel: 'Easy',
    lightRequirement: 'Low to medium indirect light',
    wateringFrequency: 'Weekly',
  },
];

const ProductListing = () => {
  const categories = Array.from(new Set(plants.map(p => p.category)));

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of houseplants, perfect for any space and skill level.
          </p>
        </div>

        {categories.map(category => (
          <div key={category} className="mb-12">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-border">
              <h2 className="text-2xl font-semibold text-foreground">
                {category}
              </h2>
              <Link to={`/category/${category}`} className="text-primary hover:underline text-sm font-medium">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {plants
                .filter(plant => plant.category === category)
                .map(plant => (
                  <ProductCard key={plant.id} plant={plant} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
