
import { Calendar, User, Tag, ArrowRight, Clock, ChevronUp, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

interface BlogPostCardProps {
  post: BlogPost;
  isExpanded: boolean;
  onToggleReadMore: (postId: string) => void;
  variant?: 'featured' | 'regular';
}

const BlogPostCard = ({ post, isExpanded, onToggleReadMore, variant = 'regular' }: BlogPostCardProps) => {
  const isFeatured = variant === 'featured';
  
  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
      isFeatured ? 'hover:shadow-2xl hover:-translate-y-2' : ''
    }`}>
      <div className={`${isFeatured ? 'aspect-video' : 'aspect-video'} bg-gradient-to-br from-blue-100 to-teal-100 relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <div className="text-center">
            <div className={`${isFeatured ? 'w-16 h-16' : 'w-12 h-12'} bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-2`}>
              <Tag className={`${isFeatured ? 'w-8 h-8' : 'w-6 h-6'} text-blue-600`} />
            </div>
            <span className="text-sm">{isFeatured ? 'Featured Image' : 'Article Image'}</span>
          </div>
        </div>
        {isFeatured && (
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
          </div>
        )}
        {!isFeatured && (
          <div className="absolute top-3 left-3">
            <span className="bg-white text-gray-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
              {post.category}
            </span>
          </div>
        )}
      </div>
      
      <CardHeader className={isFeatured ? '' : 'pb-3'}>
        <div className={`flex items-center space-x-4 text-sm text-gray-500 mb-3 ${isFeatured ? '' : 'text-xs justify-between'}`}>
          <div className="flex items-center space-x-1">
            <Calendar className={`${isFeatured ? 'w-4 h-4' : 'w-3 h-3'}`} />
            <span>{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: isFeatured ? 'long' : 'short', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className={`${isFeatured ? 'w-4 h-4' : 'w-3 h-3'}`} />
            <span>{post.readTime}</span>
          </div>
        </div>
        <CardTitle className={`${isFeatured ? 'text-xl' : 'text-lg leading-tight'} group-hover:text-blue-600 transition-colors duration-200`}>
          {post.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className={isFeatured ? '' : 'pt-0'}>
        <div className="mb-4">
          <p className={`text-gray-600 ${isFeatured ? 'mb-4 line-clamp-3' : 'text-sm mb-4 line-clamp-2'}`}>
            {post.excerpt}
          </p>
          
          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="prose prose-sm max-w-none text-gray-700">
                <p>{post.content}</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <User className={`${isFeatured ? 'w-4 h-4' : 'w-3 h-3'} text-gray-400`} />
            <span className={`${isFeatured ? 'text-sm' : 'text-xs'} text-gray-500`}>By {post.author}</span>
          </div>
          <Button 
            variant="ghost" 
            size={isFeatured ? 'default' : 'sm'}
            onClick={() => onToggleReadMore(post.id)}
            className={`group-hover:bg-blue-50 group-hover:text-blue-600 ${isFeatured ? '' : 'text-xs'}`}
          >
            {isExpanded ? 'Read Less' : 'Read More'}
            {isExpanded ? (
              <ChevronUp className={`${isFeatured ? 'w-4 h-4' : 'w-3 h-3'} ml-1 group-hover:-translate-y-1 transition-transform duration-200`} />
            ) : (
              <ArrowRight className={`${isFeatured ? 'w-4 h-4' : 'w-3 h-3'} ml-1 group-hover:translate-x-1 transition-transform duration-200`} />
            )}
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, isFeatured ? 3 : 2).map((tag) => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard;