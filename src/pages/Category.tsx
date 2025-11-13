import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Plant } from '@/store/CartSlice';
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
    wishlistedBy: 342,
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
    wishlistedBy: 528,
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
    wishlistedBy: 456,
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
    wishlistedBy: 691,
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
    wishlistedBy: 389,
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
    wishlistedBy: 417,
    soldLastMonth: 192,
    careLevel: 'Easy',
    lightRequirement: 'Low to medium indirect light',
    wateringFrequency: 'Weekly',
  },
];

const Category = () => {
  const { category } = useParams();
  const filteredPlants = plants.filter(p => p.category.toLowerCase() === category?.toLowerCase());

  if (!category || filteredPlants.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-muted/30 via-background to-muted/20">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Category not found</h1>
          <Link to="/products">
            <Button>Back to All Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 via-background to-muted/20">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Products
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">{category} Plants</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our selection of {category.toLowerCase()} plants, perfect for creating your ideal indoor garden.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlants.map(plant => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
