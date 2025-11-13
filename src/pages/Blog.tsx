import Header from '@/components/Header';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Clock } from 'lucide-react';
import monsteraImg from '@/assets/monstera.jpg';
import pothosImg from '@/assets/pothos.jpg';
import snakePlantImg from '@/assets/snake-plant.jpg';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Essential Tips for Monstera Care',
    excerpt: 'Learn how to keep your Monstera Deliciosa thriving with proper light, water, and humidity.',
    content: 'The Monstera Deliciosa is one of the most popular houseplants, known for its stunning split leaves. To keep your Monstera healthy, place it in bright, indirect light. Direct sunlight can scorch the leaves, while too little light will slow growth. Water when the top 2-3 inches of soil are dry, typically once a week. Monsteras love humidity, so mist regularly or use a humidifier. Feed monthly during growing season with a balanced fertilizer.',
    image: monsteraImg,
    author: 'Sarah Green',
    date: 'January 15, 2025',
    readTime: '5 min read',
    category: 'Care Guide',
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Low-Light Plants',
    excerpt: 'Discover the best plants that thrive in darker corners of your home.',
    content: 'Not all spaces in your home get abundant natural light, but that doesn\'t mean you can\'t enjoy beautiful houseplants. Snake plants, pothos, and ZZ plants are excellent choices for low-light conditions. These plants have adapted to survive with minimal light by slowing their growth and maximizing photosynthesis. When caring for low-light plants, be careful not to overwater - they use less water than plants in brighter locations. Rotate your plants occasionally to ensure even growth.',
    image: snakePlantImg,
    author: 'Michael Chen',
    date: 'January 10, 2025',
    readTime: '7 min read',
    category: 'Plant Selection',
  },
  {
    id: 3,
    title: 'Pothos Propagation Made Easy',
    excerpt: 'Step-by-step guide to propagating your pothos and creating new plants.',
    content: 'Propagating pothos is one of the easiest ways to multiply your plant collection. Cut a stem below a node (the bumpy part where leaves emerge) with at least 2-3 leaves. Remove the bottom leaf and place the cutting in water, ensuring the node is submerged. Change the water weekly to prevent bacterial growth. Roots should appear in 2-3 weeks. Once roots are 2-3 inches long, plant in well-draining potting soil. Keep the soil moist but not waterlogged until established.',
    image: pothosImg,
    author: 'Emma Williams',
    date: 'January 5, 2025',
    readTime: '6 min read',
    category: 'Propagation',
  },
  {
    id: 4,
    title: 'Common Plant Pests and How to Deal With Them',
    excerpt: 'Identify and treat common houseplant pests before they become a problem.',
    content: 'Even indoor plants can fall victim to pests. Spider mites leave fine webbing and cause yellowing leaves. Treat with neem oil spray weekly. Mealybugs appear as white cottony masses; remove with rubbing alcohol on a cotton swab. Fungus gnats indicate overwatering; let soil dry out between waterings and use yellow sticky traps. Scale insects look like brown bumps; scrape off and spray with insecticidal soap. Prevention is key: inspect new plants before bringing them home and quarantine them for two weeks.',
    image: monsteraImg,
    author: 'David Martinez',
    date: 'December 28, 2024',
    readTime: '8 min read',
    category: 'Troubleshooting',
  },
  {
    id: 5,
    title: 'Creating the Perfect Watering Schedule',
    excerpt: 'Learn how to water your plants correctly and avoid common mistakes.',
    content: 'Watering is the most common cause of houseplant death. The key is to water based on soil moisture, not a fixed schedule. Stick your finger 2 inches into the soil - if it\'s dry, it\'s time to water. Most tropical plants prefer evenly moist soil, while succulents need to dry out completely. Always use pots with drainage holes and empty saucers after watering. Water quality matters too - let tap water sit overnight to allow chlorine to evaporate, or use filtered water for sensitive plants.',
    image: pothosImg,
    author: 'Sarah Green',
    date: 'December 20, 2024',
    readTime: '5 min read',
    category: 'Care Guide',
  },
  {
    id: 6,
    title: 'Winter Plant Care: What You Need to Know',
    excerpt: 'Adjust your care routine to help plants survive the cold months.',
    content: 'Winter brings challenges for houseplants. Shorter days mean less light, so move plants closer to windows or add grow lights. Heating systems dry the air, so increase humidity with pebble trays, grouping plants, or humidifiers. Reduce watering frequency as plants grow slower in winter. Stop fertilizing until spring when active growth resumes. Keep plants away from cold drafts and heating vents. Monitor for pests, which often increase in winter. With proper care, your plants will emerge stronger in spring.',
    image: snakePlantImg,
    author: 'Michael Chen',
    date: 'December 15, 2024',
    readTime: '6 min read',
    category: 'Seasonal Care',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Plant Care Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert tips and guides to help your plants thrive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden bg-muted">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-secondary text-secondary-foreground">
                  {post.category}
                </Badge>
                <h2 className="text-xl font-bold text-foreground mb-2">{post.title}</h2>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <p className="text-foreground leading-relaxed">{post.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
