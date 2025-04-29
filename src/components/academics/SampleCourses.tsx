
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

type Course = {
  id: number;
  code: string;
  title: string;
  description: string;
  credits: number;
  level: 'Introductory' | 'Intermediate' | 'Advanced';
  department: string;
};

const courses: Course[] = [
  {
    id: 1,
    code: "CS 101",
    title: "Introduction to Computer Science",
    description: "Fundamental concepts of computer programming, algorithms, and computational thinking. Students learn programming basics using Python.",
    credits: 3,
    level: 'Introductory',
    department: "Computer Science"
  },
  {
    id: 2,
    code: "BIO 220",
    title: "Cell Biology",
    description: "Study of cell structure, function, and the molecular processes that occur within cells. Laboratory work includes microscopy and cell culture techniques.",
    credits: 4,
    level: 'Intermediate',
    department: "Biology"
  },
  {
    id: 3,
    code: "ECON 305",
    title: "International Trade",
    description: "Analysis of international trade theories, policies, and global economic relationships. Examines tariffs, trade agreements, and international financial systems.",
    credits: 3,
    level: 'Advanced',
    department: "Economics"
  },
  {
    id: 4,
    code: "PSYCH 110",
    title: "Introduction to Psychology",
    description: "Survey of major topics in psychology, including biological bases of behavior, cognition, learning, development, personality, and psychological disorders.",
    credits: 3,
    level: 'Introductory',
    department: "Psychology"
  },
  {
    id: 5,
    code: "ENG 245",
    title: "Modern American Literature",
    description: "Critical reading and analysis of major American works from the early 20th century to the present. Explores themes of identity, innovation, and social change.",
    credits: 3,
    level: 'Intermediate',
    department: "English"
  },
  {
    id: 6,
    code: "MECH 410",
    title: "Robotics Engineering",
    description: "Advanced principles of robotic systems, including kinematics, dynamics, control systems, and artificial intelligence applications for autonomous systems.",
    credits: 4,
    level: 'Advanced',
    department: "Mechanical Engineering"
  }
];

const SampleCourses = () => {
  return (
    <section className="py-16 bg-white" id="courses">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3 text-center">Sample Courses</h2>
        <p className="text-lg text-center mb-10 max-w-2xl mx-auto text-gray-600">
          Explore a selection of our diverse course offerings across various disciplines
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CourseCard = ({ course }: { course: Course }) => {
  const getLevelColor = (level: Course['level']) => {
    switch (level) {
      case 'Introductory':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold">{course.title}</h3>
          <span className="text-sm font-medium text-gray-500">{course.code}</span>
        </div>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {course.department}
          </span>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
            {course.level}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
            {course.credits} Credits
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default SampleCourses;
