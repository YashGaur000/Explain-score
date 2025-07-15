import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, Tag, Mail } from 'lucide-react';

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [email, setEmail] = useState('');

  const featuredPost = {
    id: 1,
    title: 'The Future of Explainable AI in Financial Services',
    excerpt: 'Exploring how transparent AI will reshape the financial industry and regulatory landscape in 2025 and beyond, with insights from leading institutions.',
    author: 'Dr. Sarah Martinez',
    date: 'January 15, 2025',
    category: 'AI Innovation',
    tags: ['AI', 'Regulation', 'Future'],
    image: 'https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    readTime: '8 min read'
  };

  const posts = [
    {
      id: 2,
      title: 'Understanding GDPR Compliance in ML-Based Lending',
      excerpt: 'A comprehensive guide to ensuring your machine learning models meet European data protection requirements and avoid costly penalties.',
      author: 'James Wilson',
      date: 'January 12, 2025',
      category: 'Compliance',
      tags: ['GDPR', 'Compliance', 'Legal'],
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Building Trust Through Model Transparency',
      excerpt: 'How financial institutions can build customer trust by making AI decisions more transparent and understandable to end users.',
      author: 'Dr. Emily Thompson',
      date: 'January 10, 2025',
      category: 'Best Practices',
      tags: ['Trust', 'Transparency', 'Customer Experience'],
      image: 'https://images.pexels.com/photos/5668774/pexels-photo-5668774.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '7 min read'
    },
    {
      id: 4,
      title: 'API Integration Best Practices for ExplainScore',
      excerpt: 'Technical guide for integrating ExplainScore API into your existing lending infrastructure seamlessly and efficiently.',
      author: 'Michael Zhang',
      date: 'January 8, 2025',
      category: 'Technical',
      tags: ['API', 'Integration', 'Development'],
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '12 min read'
    },
    {
      id: 5,
      title: 'Risk Management in AI-Driven Lending',
      excerpt: 'Strategies for mitigating risks while leveraging AI for faster, more accurate lending decisions in regulated environments.',
      author: 'Dr. Sarah Martinez',
      date: 'January 5, 2025',
      category: 'Risk Management',
      tags: ['Risk', 'AI', 'Lending'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '10 min read'
    },
    {
      id: 6,
      title: 'Regulatory Updates: What Financial Institutions Need to Know',
      excerpt: 'Latest regulatory changes affecting AI implementation in banking and lending across different jurisdictions worldwide.',
      author: 'James Wilson',
      date: 'January 3, 2025',
      category: 'Regulations',
      tags: ['Regulation', 'Banking', 'Updates'],
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      readTime: '9 min read'
    }
  ];

  const allTags = ['All', ...Array.from(new Set([featuredPost, ...posts].flatMap(post => post.tags)))];

  const filteredPosts = selectedTag === 'All' 
    ? posts 
    : posts.filter(post => post.tags.includes(selectedTag));

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Resources &
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> insights</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Stay informed about the latest in AI explainability, regulatory compliance, 
            and best practices for financial institutions.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-blue-600 font-medium text-sm">{featuredPost.category}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{featuredPost.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600 text-sm">{featuredPost.author}</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600 text-sm">{featuredPost.date}</span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tag Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-gray-500 text-sm flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors group-hover:text-blue-600">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600 text-sm">{post.author}</span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600 text-sm">{post.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stay in the loop
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Get the latest insights on AI explainability and regulatory compliance delivered to your inbox weekly. 
            Join 5,000+ financial professionals staying ahead of the curve.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
            />
            <button 
              type="submit"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center"
            >
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-4">
            No spam, unsubscribe at any time. Read our privacy policy.
          </p>
        </div>
      </section>
    </div>
  );
}