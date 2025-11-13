import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Plant } from '@/store/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '@/store/CartSlice';
import { RootState } from '@/store/store';
import { toast } from 'sonner';

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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img 
            src={plant.image} 
            alt={plant.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
            {plant.category}
          </p>
          <h3 className="text-lg font-semibold text-foreground mb-2">{plant.name}</h3>
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
          {isInCart ? 'In Cart' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
