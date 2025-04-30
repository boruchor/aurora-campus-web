
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { theme } = useTheme();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // This is just a fake search function
    console.log("Searching for:", query);
    // In a real app, we would redirect to search results page or show results
  };

  return (
    <motion.form 
      onSubmit={handleSearch} 
      className="relative w-full max-w-sm"
      initial={{ opacity: 0.8, width: "90%" }}
      animate={{ 
        opacity: 1, 
        width: isFocused ? "100%" : "90%"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <Search className={`absolute left-2.5 top-2.5 h-4 w-4 ${
          isFocused ? "text-aurora" : "text-muted-foreground"
        } transition-colors duration-300`} />
        <Input
          type="search"
          placeholder="Search..."
          className={`w-full bg-background pl-8 pr-4 transition-all duration-300 ${
            theme === 'dark' 
              ? 'focus:bg-slate-800 focus:ring-aurora' 
              : 'focus:bg-white focus:ring-aurora'
          }`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </motion.form>
  );
};

export default SearchBar;
