
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { useBlog } from '@/hooks/useBlog';
import BlogPostCard from '@/components/BlogPostCard';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  slug: string;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Ocean-Inspired Mosaics: Finding Beauty in Coastal Colors',
    excerpt: 'Discover how the endless blues and greens of the South African coast inspire stunning mosaic creations that capture the essence of the sea.',
    content: 'The ocean has always been my greatest teacher and inspiration. Living in Amanzimtoti, I wake up every morning to the sound of waves crashing against the shore, and I see how the light dances differently on the water throughout the day. These natural phenomena translate beautifully into mosaic art, where each tile represents a droplet of water, a ray of sunlight, or the foam of a breaking wave. The key to creating ocean-inspired mosaics lies in understanding the subtle variations in blue and green hues, and how they interact with whites and sandy beiges to create depth and movement.',
    author: 'Arlene',
    date: '2024-06-10',
    readTime: '5 min read',
    category: 'Inspiration',
    tags: ['Ocean Art', 'Color Theory', 'Mosaic Techniques'],
    slug: 'ocean-inspired-mosaics',
    featured: true
  },
  {
    id: '2',
    title: 'Beginner\'s Guide to Mosaic Art: Your First Steps into Creative Expression',
    excerpt: 'Starting your mosaic journey can feel overwhelming. Here\'s everything you need to know to create your first beautiful piece.',
    content: 'Every mosaic artist remembers their first piece – the excitement, the uncertainty, and that magical moment when scattered tiles transform into something beautiful. Starting with mosaic art doesn\'t require expensive tools or years of training. Begin with a simple design, perhaps a small coaster or decorative tile. Choose materials that speak to you – ceramic tiles, glass pieces, or even broken pottery can work wonderfully. The most important lesson I can share is to trust the process. Mosaic art teaches patience and allows for happy accidents that often become the most beautiful parts of your creation.',
    author: 'Arlene',
    date: '2024-06-08',
    readTime: '7 min read',
    category: 'Tutorial',
    tags: ['Beginner Tips', 'Getting Started', 'Mosaic Basics'],
    slug: 'beginners-guide-mosaic-art',
    featured: false
  },
  {
    id: '3',
    title: 'Sustainable Art: Using Recycled Materials in Mosaic Creation',
    excerpt: 'Learn how to create beautiful mosaics while being environmentally conscious by incorporating recycled and upcycled materials.',
    content: 'Sustainability in art isn\'t just a trend – it\'s a responsibility. Some of my most cherished pieces incorporate recycled materials: broken ceramics from old dishes, glass from discarded bottles, and tiles from renovation projects. These materials carry stories and add character that new materials simply cannot match. The challenge lies in preparing these materials properly – cleaning, cutting safely, and ensuring they integrate well with your design. The reward is creating art that not only beautifies spaces but also gives new life to materials that might otherwise end up in landfills.',
    author: 'Arlene',
    date: '2024-06-05',
    readTime: '6 min read',
    category: 'Sustainability',
    tags: ['Eco-Friendly', 'Recycled Materials', 'Sustainable Art'],
    slug: 'sustainable-mosaic-art',
    featured: false
  },
  {
    id: '4',
    title: 'Color Psychology in Mosaic Art: How Colors Affect Mood and Space',
    excerpt: 'Understanding how different colors interact in mosaic art can transform your space and evoke specific emotions.',
    content: 'Color is the language of emotion in mosaic art. Blues and greens evoke calm and tranquility – perfect for bathrooms or meditation spaces. Warm oranges and reds energize and inspire – ideal for kitchens or creative studios. But it\'s not just about individual colors; it\'s about how they interact. The placement of complementary colors can create vibrant focal points, while analogous color schemes provide harmony and flow. In mosaic art, you also need to consider how light affects your color choices. Natural light will make colors appear differently throughout the day, while artificial lighting can dramatically alter the mood of your piece.',
    author: 'Arlene',
    date: '2024-06-02',
    readTime: '8 min read',
    category: 'Design Theory',
    tags: ['Color Psychology', 'Interior Design', 'Mood Enhancement'],
    slug: 'color-psychology-mosaics',
    featured: true
  },
  {
    id: '5',
    title: 'Amanzimtoti Inspirations: How Local Landscapes Shape My Art',
    excerpt: 'Take a journey through the beautiful coastal town of Amanzimtoti and discover how its natural beauty influences every mosaic piece.',
    content: 'Amanzimtoti isn\'t just where I live – it\'s my muse. The golden beaches, the way morning mist rises from the ocean, the vibrant bird life, and even the dramatic storms all find their way into my mosaics. There\'s something magical about this place where the Amanzimtoti River meets the Indian Ocean. The interplay of fresh and salt water creates unique patterns in the sand, inspiring textures I recreate in my tile work. Local flora like the coastal aloes and wild fig trees provide color palettes I never would have discovered elsewhere.',
    author: 'Arlene',
    date: '2024-05-30',
    readTime: '4 min read',
    category: 'Personal Story',
    tags: ['Amanzimtoti', 'Local Inspiration', 'Nature Art'],
    slug: 'amanzimtoti-inspirations',
    featured: false
  },
  {
    id: '6',
    title: 'Advanced Mosaic Techniques: Creating Texture and Depth',
    excerpt: 'Master the art of creating stunning visual depth and texture in your mosaic pieces with these advanced techniques.',
    content: 'Once you\'ve mastered basic mosaic techniques, the real artistry begins with creating texture and depth. Varying the height of your tiles, using different materials with contrasting surfaces, and playing with the direction of your tile placement can transform a flat surface into a dynamic, three-dimensional artwork. Advanced techniques like the opus vermiculatum (worm-like pattern) or opus tessellatum (grid pattern) aren\'t just historical curiosities – they\'re powerful tools for directing the viewer\'s eye and creating movement in your piece. Shadow play becomes crucial at this level; understanding how light will hit your finished piece allows you to plan dramatic effects that change throughout the day.',
    author: 'Arlene',
    date: '2024-05-28',
    readTime: '10 min read',
    category: 'Advanced Tutorial',
    tags: ['Advanced Techniques', 'Texture', 'Professional Tips'],
    slug: 'advanced-mosaic-techniques',
    featured: false
  },
  {
    id: '7',
    title: 'Mosaic Maintenance: Keeping Your Artwork Beautiful for Years',
    excerpt: 'Learn the essential maintenance techniques to preserve your mosaic art and keep it looking vibrant for decades.',
    content: 'Creating a beautiful mosaic is only half the journey – proper maintenance ensures your artwork remains stunning for generations. Regular cleaning with pH-neutral cleaners, proper sealing for outdoor pieces, and knowing when to re-grout are essential skills every mosaic artist should master. Different materials require different care approaches, and understanding these nuances can mean the difference between a piece that lasts decades and one that deteriorates quickly.',
    author: 'Arlene',
    date: '2024-05-25',
    readTime: '6 min read',
    category: 'Tutorial',
    tags: ['Maintenance', 'Care Tips', 'Longevity'],
    slug: 'mosaic-maintenance',
    featured: false
  },
  {
    id: '8',
    title: 'The Therapeutic Benefits of Mosaic Art',
    excerpt: 'Discover how creating mosaic art can be a powerful form of meditation and stress relief in our busy modern world.',
    content: 'In our fast-paced digital world, the methodical process of placing each tile in a mosaic offers a rare opportunity for mindfulness and meditation. The repetitive nature of the work, combined with the need for focused attention, naturally quiets the mind and reduces stress. Many of my students discover that mosaic art becomes their favorite form of therapy – a creative outlet that provides both mental peace and tangible, beautiful results.',
    author: 'Arlene',
    date: '2024-05-22',
    readTime: '5 min read',
    category: 'Personal Story',
    tags: ['Therapy', 'Mindfulness', 'Stress Relief'],
    slug: 'therapeutic-benefits-mosaic',
    featured: false
  }
];

const categories = ['All', 'Inspiration', 'Tutorial', 'Sustainability', 'Design Theory', 'Personal Story', 'Advanced Tutorial'];

const Blog = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  
  const {
    selectedCategory,
    setSelectedCategory,
    featuredPosts,
    displayedRegularPosts,
    hasMorePosts,
    expandedPosts,
    toggleReadMore,
    loadMorePosts,
    resetPosts,
    totalPosts,
    displayedCount
  } = useBlog(blogPosts);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    resetPosts();
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', newsletterEmail);
    // Here you would typically send the email to your newsletter service
    setNewsletterEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* SEO Meta Information */}
      <div style={{ display: 'none' }}>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Arlene's Mosaic Art Blog",
            "description": "Discover the world of mosaic art through tutorials, inspiration, and insights from Amanzimtoti, South Africa",
            "url": "https://arlenemosaicart.com/blog",
            "author": {
              "@type": "Person",
              "name": "Arlene",
              "description": "Mosaic artist from Amanzimtoti, South Africa"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Arlene Mosaic Art",
              "logo": {
                "@type": "ImageObject",
                "url": "https://arlenemosaicart.com/logo.png"
              }
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "datePublished": post.date,
              "keywords": post.tags.join(", "),
              "articleSection": post.category,
              "url": `https://arlenemosaicart.com/blog/${post.slug}`
            }))
          })}
        </script>
      </div>

      {/* Header Section */}
      <header className="bg-gradient-to-br from-blue-600 via-teal-600 to-cyan-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mosaic Art Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover the world of mosaic art through tutorials, inspiration, and insights 
              from the beautiful coastal town of Amanzimtoti, South Africa
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded-full opacity-80"></div>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? 'default' : 'outline'}
                onClick={() => handleCategoryChange(category)}
                className="rounded-full px-6 hover:scale-105 transition-transform duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="text-center mt-4 text-sm text-gray-600">
            Showing {displayedCount} of {totalPosts} articles
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Featured Articles
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {featuredPosts.map((post) => (
                <BlogPostCard
                  key={post.id}
                  post={post}
                  isExpanded={expandedPosts.has(post.id)}
                  onToggleReadMore={toggleReadMore}
                  variant="featured"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Latest Articles
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          {displayedRegularPosts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedRegularPosts.map((post) => (
                  <BlogPostCard
                    key={post.id}
                    post={post}
                    isExpanded={expandedPosts.has(post.id)}
                    onToggleReadMore={toggleReadMore}
                    variant="regular"
                  />
                ))}
              </div>

              {/* Load More Button */}
              {hasMorePosts && (
                <div className="text-center mt-12">
                  <Button 
                    size="lg" 
                    onClick={loadMorePosts}
                    className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8"
                  >
                    Load More Articles
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found in this category.</p>
              <Button 
                onClick={() => handleCategoryChange('All')}
                className="mt-4"
                variant="outline"
              >
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-teal-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Inspired
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest mosaic art tutorials, tips, and inspiration delivered to your inbox
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button type="submit" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3">
              Subscribe
            </Button>
          </form>
          <p className="text-sm text-blue-200 mt-4">
            No spam, unsubscribe at any time
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;