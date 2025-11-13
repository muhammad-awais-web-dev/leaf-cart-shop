import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, Truck, Heart, Star, Quote } from 'lucide-react';
import Header from '@/components/Header';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import monsteraImg from '@/assets/monstera.jpg';
import pothosImg from '@/assets/pothos.jpg';
import snakePlantImg from '@/assets/snake-plant.jpg';
import fiddleLeafImg from '@/assets/fiddle-leaf.jpg';
import zzPlantImg from '@/assets/zz-plant.jpg';
import peaceLilyImg from '@/assets/peace-lily.jpg';
const carouselPlants = [{
  name: 'Monstera Deliciosa',
  image: monsteraImg
}, {
  name: 'Golden Pothos',
  image: pothosImg
}, {
  name: 'Snake Plant',
  image: snakePlantImg
}, {
  name: 'Fiddle Leaf Fig',
  image: fiddleLeafImg
}, {
  name: 'ZZ Plant',
  image: zzPlantImg
}, {
  name: 'Peace Lily',
  image: peaceLilyImg
}];
const features = [{
  icon: ShieldCheck,
  title: 'Quality Guaranteed',
  description: 'Every plant is hand-selected and inspected to ensure the highest quality.'
}, {
  icon: Truck,
  title: 'Fast Delivery',
  description: 'Free shipping on orders over $50. Your plants arrive fresh and ready to thrive.'
}, {
  icon: Heart,
  title: 'Expert Care Tips',
  description: 'Detailed care instructions with every purchase to help your plants flourish.'
}];
const popularPlants = [{
  name: 'Monstera Deliciosa',
  price: 45.99,
  image: monsteraImg,
  rating: 5
}, {
  name: 'Golden Pothos',
  price: 24.99,
  image: pothosImg,
  rating: 5
}, {
  name: 'Snake Plant',
  price: 32.99,
  image: snakePlantImg,
  rating: 5
}, {
  name: 'Fiddle Leaf Fig',
  price: 65.99,
  image: fiddleLeafImg,
  rating: 4
}];
const testimonials = [{
  name: 'Sarah Johnson',
  text: 'Absolutely love my plants! They arrived in perfect condition and the care instructions were so helpful.',
  rating: 5
}, {
  name: 'Michael Chen',
  text: 'Best plant shopping experience ever. The quality is outstanding and delivery was super fast.',
  rating: 5
}, {
  name: 'Emma Williams',
  text: 'My home feels so much more alive with these beautiful plants. Highly recommend Lovable Plants!',
  rating: 5
}];
const Landing = () => {
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-6">
                <Leaf className="h-12 w-12 text-primary" />
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
                  Lovable Plants
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your space with our curated collection of premium houseplants. 
                Each plant is carefully selected and nurtured to ensure it thrives in your care. 
                From low-maintenance beginners to exotic statement pieces, discover the perfect 
                green companion for your lifestyle.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button size="lg" className="text-lg px-8 py-6 group">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-md">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Carousel on the right */}
            <div className="relative animate-fade-in">
              <Carousel className="w-full max-w-md mx-auto">
                <CarouselContent>
                  {carouselPlants.map((plant, index) => <CarouselItem key={index}>
                      <Card className="border-2 shadow-lg">
                        <CardContent className="p-0">
                          <div className="aspect-square overflow-hidden rounded-t-lg">
                            <img src={plant.image} alt={plant.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-4 text-center">
                            <h3 className="font-semibold text-lg text-foreground">{plant.name}</h3>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>)}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to bringing you the best plants and service
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Popular Plants Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Popular Plants</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our customers' favorite selections
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPlants.map((plant, index) => <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img src={plant.image} alt={plant.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(plant.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{plant.name}</h3>
                    <p className="text-xl font-bold text-primary">${plant.price.toFixed(2)}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/products">
              <Button size="lg">View All Plants</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => <Card key={index} className="relative">
                <CardContent className="pt-8 pb-6">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-foreground">- {testimonial.name}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start your plant journey today and bring nature into your home
          </p>
          <Link to="/products">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 group">
              Shop Our Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">Lovable Plants</span>
              </div>
              <p className="text-muted-foreground">
                Bringing nature into your home, one plant at a time.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">All Plants</Link></li>
                <li><Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">New Arrivals</Link></li>
                <li><Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">Best Sellers</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Care Guides</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Our Story</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Lovable Plants. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Landing;