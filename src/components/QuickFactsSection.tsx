
import React from 'react';
import { cn } from "@/lib/utils";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

type Fact = {
  stat: string;
  label: string;
  delay: string;
  value: number; // The numerical value for CountUp
  suffix: string; // Any suffix like +, %, etc.
};

const facts: Fact[] = [
  { stat: "20,000+", label: "Students", delay: "0", value: 20000, suffix: "+" },
  { stat: "100+", label: "Academic Programs", delay: "150", value: 100, suffix: "+" },
  { stat: "50+", label: "Nationalities", delay: "300", value: 50, suffix: "+" },
  { stat: "12:1", label: "Student-Faculty Ratio", delay: "450", value: 12, suffix: ":1" },
];

const QuickFactsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Aurora University at a Glance</h2>
          <div className="w-20 h-1 bg-aurora mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <div 
              key={index} 
              className="stat-card"
              data-aos="fade-up"
              data-aos-delay={fact.delay}
              style={{animationDelay: `${parseInt(fact.delay)}ms`}}
            >
              <span className="text-4xl md:text-5xl font-bold text-aurora-dark mb-2">
                {inView ? (
                  <CountUp 
                    end={fact.value} 
                    duration={2.5} 
                    separator="," 
                    suffix={fact.suffix}
                  />
                ) : "0"}
              </span>
              <span className="text-gray-600 text-lg">
                {fact.label}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="300">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Aurora University is committed to providing a transformative educational experience that prepares students to become leaders in their fields and communities.
          </p>
          <a 
            href="/about#facts" 
            className="text-aurora hover:text-aurora-dark font-medium transition-colors inline-flex items-center"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            Learn more about our achievements
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuickFactsSection;
