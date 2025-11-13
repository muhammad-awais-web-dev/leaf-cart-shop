import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
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
  },
  {
    id: 2,
    name: 'Golden Pothos',
    price: 24.99,
    image: pothosImg,
    category: 'Trailing',
  },
  {
    id: 3,
    name: 'Snake Plant',
    price: 32.99,
    image: snakePlantImg,
    category: 'Low-Light',
  },
  {
    id: 4,
    name: 'Fiddle Leaf Fig',
    price: 65.99,
    image: fiddleLeafImg,
    category: 'Tropical',
  },
  {
    id: 5,
    name: 'ZZ Plant',
    price: 38.99,
    image: zzPlantImg,
    category: 'Low-Light',
  },
  {
    id: 6,
    name: 'Peace Lily',
    price: 29.99,
    image: peaceLilyImg,
    category: 'Trailing',
  },
];

const ProductListing = () => {
  const categories = Array.from(new Set(plants.map(p => p.category)));

  return (
    <div className="min-h-screen bg-background">
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
            <h2 className="text-2xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
              {category}
            </h2>
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
