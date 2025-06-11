
import { useState, useMemo } from 'react';

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

export const useBlog = (posts: BlogPost[]) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [expandedPosts, setExpandedPosts] = useState<Set<string>>(new Set());

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') {
      return posts;
    }
    return posts.filter(post => post.category === selectedCategory);
  }, [posts, selectedCategory]);

  const featuredPosts = useMemo(() => 
    filteredPosts.filter(post => post.featured)
  , [filteredPosts]);

  const regularPosts = useMemo(() => 
    filteredPosts.filter(post => !post.featured)
  , [filteredPosts]);

  const displayedRegularPosts = regularPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < regularPosts.length;

  const toggleReadMore = (postId: string) => {
    setExpandedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 6);
  };

  const resetPosts = () => {
    setVisiblePosts(6);
    setExpandedPosts(new Set());
  };

  return {
    selectedCategory,
    setSelectedCategory,
    featuredPosts,
    displayedRegularPosts,
    hasMorePosts,
    expandedPosts,
    toggleReadMore,
    loadMorePosts,
    resetPosts,
    totalPosts: filteredPosts.length,
    displayedCount: featuredPosts.length + displayedRegularPosts.length
  };
};