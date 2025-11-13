import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plant } from '@/store/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '@/store/CartSlice';
import { addToWishlist, removeFromWishlist } from '@/store/WishlistSlice';
import { RootState } from '@/store/store';
import { toast } from 'sonner';
import { Heart, ShoppingCart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  plant: Plant;
}

const ProductCard = ({ plant }: ProductCardProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
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
          <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
            <Users className="w-3 h-3" />
            <span>{plant.wishlistedBy} users wishlisted</span>
          </div>
          <p className="text-xl font-bold text-primary">${plant.price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 gap-2">
        <Button 
          onClick={handleAddToCart}
          disabled={isInCart}
          className="flex-1"
          variant={isInCart ? "secondary" : "default"}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {isInCart ? 'In Cart' : 'Add to Cart'}
        </Button>
        <Button 
          onClick={handleWishlist}
          variant={isInWishlist ? "default" : "outline"}
          size="icon"
        >
          <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-current' : ''}`} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
