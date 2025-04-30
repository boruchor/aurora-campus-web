
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsGrid from '@/components/news-events/NewsGrid';
import EventsSidebar from '@/components/news-events/EventsSidebar';
import TopicFilter from '@/components/news-events/TopicFilter';
import ArticlePreviewModal from '@/components/news-events/ArticlePreviewModal';
import { NewsArticle } from '@/types/news';

// Mock data for the news articles
const allNewsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Aurora University Researchers Make Breakthrough in Clean Energy Technology",
    excerpt: "Research team develops new method to increase solar cell efficiency by 25%, promising more affordable renewable energy.",
    content: "Aurora University researchers have achieved a significant breakthrough in solar cell technology that could revolutionize renewable energy. The team, led by Dr. Elena Patel from the Department of Materials Science and Engineering, has developed a novel method to increase the efficiency of traditional silicon solar cells by incorporating a new type of perovskite layer.\n\nThe innovation could reduce the cost of solar energy by making panels more efficient at converting sunlight to electricity. Early tests show efficiency gains of up to 25% compared to conventional solar cells.\n\n\"This breakthrough represents years of dedicated research,\" said Dr. Patel. \"Our goal has always been to make clean energy more accessible and affordable for everyone.\"\n\nThe research, published in the latest issue of Nature Energy, has already attracted interest from several renewable energy companies looking to commercialize the technology.",
    category: "research",
    date: "April 25, 2025",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "University Launches New Global Health Initiative",
    excerpt: "New program will connect students with international partners to address critical health challenges worldwide.",
    content: "Aurora University has launched an ambitious new Global Health Initiative designed to address pressing international health challenges through collaborative research and education. The program will establish partnerships with universities and healthcare organizations across five continents.\n\nStudents enrolled in the initiative will have opportunities to participate in international research projects, clinical rotations, and community health interventions. The program aims to foster a global perspective on healthcare and develop innovative solutions to health disparities.\n\n\"In our interconnected world, health challenges transcend national boundaries,\" said Dr. James Washington, Dean of the School of Medicine. \"We're preparing the next generation of health professionals to think and act globally.\"\n\nThe initiative has secured $12 million in initial funding from a combination of university resources, government grants, and private philanthropy.",
    category: "academics",
    date: "April 20, 2025",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "Aurora Debate Team Wins National Championship",
    excerpt: "Students showcase exceptional critical thinking and persuasive skills to bring home top honors against elite competition.",
    content: "The Aurora University Debate Team has claimed the national championship title at the Collegiate Debate Finals held in Washington, D.C. last weekend. The team defeated defending champions from Harvard University in the final round with a compelling argument on international trade policy.\n\nTeam captain Sophia Chen and debate partner Marcus Johnson delivered what judges called \"a masterclass in logical reasoning and persuasive rhetoric.\" The victory marks Aurora's first national debate championship in the university's 125-year history.\n\n\"This achievement represents countless hours of research, practice, and dedication,\" said Coach Robert Simmons. \"Our students faced the best debaters in the country and proved they belong at the very top.\"\n\nThe team received a standing ovation upon their return to campus, where University President Dr. Elizabeth Torres congratulated them for \"embodying the intellectual rigor and excellence that defines Aurora University.\"",
    category: "students",
    date: "April 15, 2025",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "New Student Center Construction Ahead of Schedule",
    excerpt: "The $45 million facility will provide modern gathering spaces, dining options, and recreational areas for the campus community.",
    content: "Construction of Aurora University's new $45 million Student Center is progressing ahead of schedule, with completion now expected in early 2026. The 120,000-square-foot facility will serve as the new heart of campus life, featuring modern gathering spaces, diverse dining options, recreational areas, and student organization offices.\n\nThe building's design emphasizes sustainability, incorporating solar panels, rainwater harvesting systems, and energy-efficient climate control. Large windows and open spaces will maximize natural light and create connection with the surrounding campus landscape.\n\n\"This facility represents our commitment to providing exceptional spaces for student collaboration, community, and growth,\" said Vice President for Student Affairs, Dr. Marcus Reid. \"The new Student Center will transform campus life.\"\n\nA time-lapse camera installed at the construction site allows the community to watch the building's progress online. Students graduating in 2026 will likely be the first class to enjoy the completed center.",
    category: "campus",
    date: "April 10, 2025",
    image: "https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "University Orchestra Invited to Perform at International Festival",
    excerpt: "Student musicians will represent Aurora at prestigious event featuring top ensembles from around the world.",
    content: "The Aurora University Symphony Orchestra has received an invitation to perform at the International Festival of University Orchestras in Vienna, Austria next summer. The prestigious event brings together top collegiate music ensembles from around the world for performances in some of classical music's most historic venues.\n\nThe 85-member orchestra, conducted by Professor Maria Gonzalez, was selected from over 200 applicants based on recorded performances and program proposals. Aurora's orchestra will present a program featuring both classical masterworks and contemporary compositions, including a world premiere by faculty composer Dr. Jonathan Baker.\n\n\"This invitation represents extraordinary recognition of our students' talent and dedication,\" said Professor Gonzalez. \"Performing in Vienna, a city so central to classical music history, will be a transformative experience.\"\n\nThe university has launched a fundraising campaign to support travel expenses for student musicians, with several donors already stepping forward to help make the opportunity possible.",
    category: "students",
    date: "April 5, 2025",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "Aurora Partners with Tech Industry for New Innovation Hub",
    excerpt: "Collaboration will provide students with real-world experience and accelerate commercialization of university research.",
    content: "Aurora University has announced a strategic partnership with five leading technology companies to establish a new Innovation Hub on the north campus. The $30 million facility will bring together students, faculty, and industry professionals to collaborate on emerging technologies and business solutions.\n\nPartner companies—including Quantum Computing Inc., Biotech Solutions, and NextGen AI—will establish research offices in the hub and work directly with university departments on joint projects. Students will gain valuable hands-on experience through internships, mentorship programs, and capstone projects.\n\n\"This partnership represents a new model for university-industry collaboration,\" said Dr. Raymond Ortiz, Vice President for Innovation and Economic Development. \"We're creating a seamless connection between academic research and commercial application.\"\n\nGround breaking for the Innovation Hub is scheduled for next month, with completion expected in approximately 18 months. The facility will feature flexible laboratory spaces, collaborative work areas, and technology incubator resources for student and faculty startups.",
    category: "campus",
    date: "March 28, 2025",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    featured: false,
  },
];

const NewsEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter articles based on selected category and search query
  const filteredArticles = allNewsArticles.filter(article => {
    const matchesCategory = selectedCategory ? article.category === selectedCategory : true;
    const matchesSearch = searchQuery.trim() === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = allNewsArticles.find(article => article.featured) || allNewsArticles[0];
  const regularArticles = filteredArticles.filter(article => article.id !== featuredArticle.id);
  
  const handleArticleClick = (article: NewsArticle) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleFilterChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-aurora-light/10 to-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">News & Events</h1>
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
              Stay up-to-date with the latest stories, research breakthroughs, and events from our vibrant university community.
            </p>
          </div>
        </section>
        
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content Area */}
            <div className="lg:w-3/4">
              {/* Topic Filters */}
              <TopicFilter 
                selectedCategory={selectedCategory}
                onFilterChange={handleFilterChange}
                onSearchChange={handleSearchChange}
              />
              
              {/* News Grid */}
              <NewsGrid 
                featuredArticle={featuredArticle} 
                articles={regularArticles} 
                onArticleClick={handleArticleClick}
              />
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <EventsSidebar />
            </div>
          </div>
        </div>
        
        {/* Article Preview Modal */}
        {selectedArticle && (
          <ArticlePreviewModal 
            article={selectedArticle} 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default NewsEvents;
