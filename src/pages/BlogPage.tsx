import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Calendar, Clock, User, Search, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function BlogPage() {
  const featuredPost = {
    title: 'The Future of AI in Software Development: Trends and Predictions for 2024',
    excerpt: 'Explore how artificial intelligence is revolutionizing software development, from automated code generation to intelligent testing and beyond.',
    image: 'https://images.unsplash.com/photo-1516263497941-cfa23ccbf9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3NzY4ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    author: 'Sarah Chen',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'AI & Machine Learning'
  };

  const blogPosts = [
    {
      title: 'Building Scalable Microservices with Node.js and Docker',
      excerpt: 'Learn how to architect and deploy microservices that can handle millions of requests with Node.js and containerization.',
      image: 'https://images.unsplash.com/photo-1516263497941-cfa23ccbf9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3NzY4ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Marcus Rodriguez',
      date: 'March 10, 2024',
      readTime: '12 min read',
      category: 'Backend Development'
    },
    {
      title: 'React 19: What\'s New and How to Prepare for the Update',
      excerpt: 'A comprehensive guide to React 19\'s new features, breaking changes, and migration strategies for existing applications.',
      image: 'https://images.unsplash.com/photo-1516263497941-cfa23ccbf9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3NzY4ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'James Thompson',
      date: 'March 5, 2024',
      readTime: '6 min read',
      category: 'Frontend Development'
    },
    {
      title: 'Cloud Security Best Practices for Modern Applications',
      excerpt: 'Essential security considerations when deploying applications to the cloud, covering AWS, Azure, and GCP.',
      image: 'https://images.unsplash.com/photo-1516263497941-cfa23ccbf9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3NzY4ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Marcus Rodriguez',
      date: 'February 28, 2024',
      readTime: '10 min read',
      category: 'Cloud & DevOps'
    },
    {
      title: 'Mobile App Performance Optimization: React Native vs Flutter',
      excerpt: 'Compare performance optimization techniques in React Native and Flutter, with real-world benchmarks and examples.',
      image: 'https://images.unsplash.com/photo-1516263497941-cfa23ccbf9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3NzY4ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'David Kim',
      date: 'February 20, 2024',
      readTime: '9 min read',
      category: 'Mobile Development'
    },
    {
      title: 'Data Pipeline Architecture: From Raw Data to Business Intelligence',
      excerpt: 'Design and implement robust data pipelines that transform raw data into actionable business insights.',
      image: 'https://images.unsplash.com/photo-1516263497941-cfa23ccbf9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3NzY4ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Priya Patel',
      date: 'February 15, 2024',
      readTime: '11 min read',
      category: 'Data Science'
    },
    {
      title: 'UX Design Principles for Developer-Focused Tools',
      excerpt: 'How to design intuitive interfaces for technical users, with case studies from popular developer tools.',
      image: 'https://images.unsplash.com/photo-1516263497941-cfa23ccbf9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3NzY4ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Emily Zhang',
      date: 'February 10, 2024',
      readTime: '7 min read',
      category: 'Design'
    }
  ];

  const categories = [
    'All',
    'AI & Machine Learning',
    'Frontend Development',
    'Backend Development',
    'Mobile Development',
    'Cloud & DevOps',
    'Data Science',
    'Design'
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI & Machine Learning': 'bg-purple-100 text-purple-600',
      'Frontend Development': 'bg-blue-100 text-blue-600',
      'Backend Development': 'bg-green-100 text-green-600',
      'Mobile Development': 'bg-orange-100 text-orange-600',
      'Cloud & DevOps': 'bg-cyan-100 text-cyan-600',
      'Data Science': 'bg-indigo-100 text-indigo-600',
      'Design': 'bg-pink-100 text-pink-600'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            DevCortex Blog
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Insights, tutorials, and thought leadership on the latest in technology, software development, and digital transformation.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 py-3 bg-gray-50 border-gray-200"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'All' ? 'default' : 'outline'}
                  size="sm"
                  className={category === 'All' ? 'bg-blue-500 hover:bg-blue-600' : 'border-gray-300 hover:bg-gray-50'}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="border-0 shadow-xl bg-white overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <ImageWithFallback 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <Badge className={`mb-4 ${getCategoryColor(featuredPost.category)}`}>
                  Featured
                </Badge>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white group">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white group">
              <div className="relative overflow-hidden">
                <ImageWithFallback 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(post.category)}>
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </CardDescription>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <span>{post.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mb-16">
          <Button variant="outline" className="border-gray-300 hover:bg-gray-50 px-8 py-3">
            Load More Articles
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 rounded-3xl p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Stay Updated with DevCortex Insights
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest articles, tutorials, and tech insights delivered directly to your inbox. Join our community of developers and tech leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-white border-gray-200 flex-1"
            />
            <Button className="bg-blue-500 hover:bg-blue-600 text-white whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}