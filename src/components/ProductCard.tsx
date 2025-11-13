import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plant } from '@/store/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '@/store/CartSlice';
import { RootState } from '@/store/store';
import { toast } from 'sonner';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  plant: Plant;
}

const ProductCard = ({ plant }: ProductCardProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isInCart = cartItems.some(item => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addItem(plant));
    toast.success(`${plant.name} added to cart!`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow relative group">
      <CardContent className="p-0">
        <Link to={`/product/${plant.id}`} className="block">
          <div className="aspect-square overflow-hidden bg-muted relative">
            {plant.stock !== undefined && plant.stock < 10 && (
              <Badge className="absolute top-2 left-2 z-10 bg-destructive text-destructive-foreground">
                {plant.stock} left in stock
              </Badge>
            )}
            <img 
              src={plant.image} 
              alt={plant.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>
        <div className="p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
            {plant.category}
          </p>
          <Link to={`/product/${plant.id}`}>
            <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary transition-colors">
              {plant.name}
            </h3>
          </Link>
          <p className="text-xl font-bold text-primary">${plant.price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          disabled={isInCart}
          className="w-full"
          variant={isInCart ? "secondary" : "default"}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {isInCart ? 'In Cart' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
