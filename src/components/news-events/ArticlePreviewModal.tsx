
import React from 'react';
import { NewsArticle } from '@/types/news';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ArticlePreviewModalProps {
  article: NewsArticle;
  isOpen: boolean;
  onClose: () => void;
}

const ArticlePreviewModal = ({ article, isOpen, onClose }: ArticlePreviewModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{article.title}</DialogTitle>
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <Calendar className="h-4 w-4 mr-1" />
            {article.date}
            <span className="mx-2">•</span>
            <span className="capitalize">{article.category}</span>
          </div>
        </DialogHeader>
        
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-64 object-cover my-4 rounded-md"
        />
        
        <div className="space-y-4">
          {article.content.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className="text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="flex justify-end mt-6">
          <Button 
            className="bg-aurora hover:bg-aurora-dark text-white"
            onClick={() => window.open(`/news/${article.id}`, '_blank')}
          >
            Read Full Article
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArticlePreviewModal;
