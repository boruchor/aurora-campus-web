
import React from 'react';
import { Button } from "@/components/ui/button";
import { Filter, Search } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface TopicFilterProps {
  selectedCategory: string | null;
  onFilterChange: (category: string | null) => void;
  onSearchChange: (query: string) => void;
}

const categories = [
  { id: null, name: 'All News' },
  { id: 'research', name: 'Research' },
  { id: 'academics', name: 'Academics' },
  { id: 'students', name: 'Students' },
  { id: 'campus', name: 'Campus' },
];

const TopicFilter = ({ selectedCategory, onFilterChange, onSearchChange }: TopicFilterProps) => {
  return (
    <div className="mb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex items-center">
          <Filter className="mr-2 h-5 w-5 text-aurora" />
          <h2 className="text-xl font-semibold">Filter by Topic</h2>
        </div>
        
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            type="text" 
            placeholder="Search articles..." 
            className="pl-10"
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id || 'all'}
            variant="outline"
            size="sm"
            onClick={() => onFilterChange(category.id)}
            className={cn(
              "border-aurora hover:bg-aurora hover:text-white transition-colors",
              selectedCategory === category.id ? "bg-aurora text-white" : "text-aurora"
            )}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TopicFilter;
