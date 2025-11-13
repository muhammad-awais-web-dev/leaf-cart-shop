import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '@/store/CartSlice';
import { addToWishlist, removeFromWishlist } from '@/store/WishlistSlice';
import { RootState } from '@/store/store';
import { toast } from 'sonner';
import { Heart, ShoppingCart, Users, TrendingUp, ArrowLeft, Sun, Droplets, Sprout } from 'lucide-react';
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
    description: 'A stunning tropical plant with iconic split leaves that brings a jungle vibe to any space. Native to Central America, the Monstera Deliciosa is known for its dramatic fenestrated leaves that develop as the plant matures. This easy-care plant is perfect for adding a bold statement to your home while also purifying the air.',
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
    description: 'Perfect for beginners, this trailing plant thrives in various conditions and purifies air. The Golden Pothos features cascading vines with heart-shaped leaves variegated in shades of green and yellow. It\'s virtually indestructible and can tolerate a wide range of light conditions, making it ideal for any room in your home.',
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
    description: 'Nearly indestructible, this architectural plant tolerates neglect and low light beautifully. Also known as Mother-in-Law\'s Tongue, the Snake Plant features striking upright leaves with unique patterns. It\'s one of the best air-purifying plants and releases oxygen at night, making it perfect for bedrooms.',
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
    description: 'A statement plant with large, violin-shaped leaves that creates a dramatic focal point. The Fiddle Leaf Fig has become an interior design icon, prized for its architectural form and glossy, sculptural leaves. While it requires consistent care, its stunning appearance makes it worth the effort for plant enthusiasts.',
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
    description: 'Glossy green leaves and extreme drought tolerance make this a perfect low-maintenance choice. The ZZ Plant features waxy, emerald-green leaves that add a modern touch to any space. Its rhizomes store water, allowing it to survive extended periods without watering, making it ideal for busy plant parents or offices.',
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
    description: 'Elegant white blooms and air-purifying qualities make this a popular indoor favorite. The Peace Lily produces beautiful white spathes that resemble flowers, creating an elegant display. It\'s excellent at removing toxins from the air and even tells you when it needs water by drooping slightly.',
    wishlistedBy: 417,
    soldLastMonth: 192,
    careLevel: 'Easy',
    lightRequirement: 'Low to medium indirect light',
    wateringFrequency: 'Weekly',
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const plant = plants.find(p => p.id === Number(id));
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  
  if (!plant) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product not found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const isInCart = cartItems.some(item => item.id === plant.id);
  const isInWishlist = wishlistItems.some(item => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addItem(plant));
    toast.success(`${plant.name} added to cart!`);
  };

  const handleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(plant.id));
      toast.success(`${plant.name} removed from wishlist`);
    } else {
      dispatch(addToWishlist(plant));
      toast.success(`${plant.name} added to wishlist!`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="relative">
            {plant.stock !== undefined && plant.stock < 10 && (
              <Badge className="absolute top-4 left-4 z-10 bg-destructive text-destructive-foreground text-sm px-3 py-1">
                Only {plant.stock} left in stock!
              </Badge>
            )}
            <div className="aspect-square rounded-lg overflow-hidden bg-muted shadow-lg">
              <img 
                src={plant.image} 
                alt={plant.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <Badge className="w-fit mb-2 bg-secondary text-secondary-foreground">{plant.category}</Badge>
            <h1 className="text-4xl font-bold text-foreground mb-4">{plant.name}</h1>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{plant.wishlistedBy} users wishlisted this</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                <span>{plant.soldLastMonth} sold in last month</span>
              </div>
            </div>

            <p className="text-3xl font-bold text-primary mb-6">${plant.price.toFixed(2)}</p>

            <p className="text-foreground mb-6 leading-relaxed">{plant.description}</p>

            <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
              <div className="text-center">
                <Sprout className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground mb-1">Care Level</p>
                <p className="text-sm font-semibold text-foreground">{plant.careLevel}</p>
              </div>
              <div className="text-center">
                <Sun className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground mb-1">Light</p>
                <p className="text-sm font-semibold text-foreground">{plant.lightRequirement}</p>
              </div>
              <div className="text-center">
                <Droplets className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground mb-1">Watering</p>
                <p className="text-sm font-semibold text-foreground">{plant.wateringFrequency}</p>
              </div>
            </div>

            <div className="flex gap-3 mt-auto">
              <Button 
                onClick={handleAddToCart}
                disabled={isInCart}
                className="flex-1"
                size="lg"
                variant={isInCart ? "secondary" : "default"}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {isInCart ? 'Already in Cart' : 'Add to Cart'}
              </Button>
              <Button 
                onClick={handleWishlist}
                variant={isInWishlist ? "default" : "outline"}
                size="lg"
              >
                <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground mb-4">Care Instructions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Light Requirements</h3>
              <p className="text-muted-foreground">{plant.lightRequirement}. Avoid direct sunlight which can scorch the leaves.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Watering</h3>
              <p className="text-muted-foreground">Water {plant.wateringFrequency.toLowerCase()}. Allow the top inch of soil to dry between waterings.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Humidity</h3>
              <p className="text-muted-foreground">Thrives in moderate to high humidity. Mist regularly or use a pebble tray for best results.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
