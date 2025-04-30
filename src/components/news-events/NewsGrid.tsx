
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { NewsArticle } from '@/types/news';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NewsGridProps {
  featuredArticle: NewsArticle;
  articles: NewsArticle[];
  onArticleClick: (article: NewsArticle) => void;
}

const NewsGrid = ({ featuredArticle, articles, onArticleClick }: NewsGridProps) => {
  return (
    <div className="space-y-10">
      {/* Featured Article */}
      <div className="featured-article">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span>Featured Story</span>
          <div className="h-1 bg-aurora flex-grow ml-4"></div>
        </h2>
        
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={featuredArticle.image} 
                alt={featuredArticle.title} 
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-aurora-dark text-white text-xs font-medium px-2.5 py-1 rounded mr-2">
                    {featuredArticle.category.charAt(0).toUpperCase() + featuredArticle.category.slice(1)}
                  </span>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredArticle.date}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{featuredArticle.title}</h3>
                <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
              </div>
              
              <Button 
                onClick={() => onArticleClick(featuredArticle)}
                className="bg-aurora hover:bg-aurora-dark text-white w-full md:w-auto"
              >
                Read Full Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Regular Articles Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span>Latest News</span>
          <div className="h-1 bg-aurora flex-grow ml-4"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card 
              key={article.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onArticleClick(article)}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-aurora-dark text-white text-xs font-medium px-2.5 py-1 rounded">
                  {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                </div>
              </div>
              
              <CardContent className="p-5">
                <div className="text-sm text-gray-500 flex items-center mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {article.date}
                </div>
                <h3 className="text-xl font-bold mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
              </CardContent>
              
              <CardFooter className="px-5 pb-5 pt-0">
                <div className="text-aurora font-medium inline-flex items-center">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsGrid;
