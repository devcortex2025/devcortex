import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function TechnologiesPage() {
  const techCategories = [
    {
      title: 'Frontend Technologies',
      description: 'Modern frontend frameworks and libraries for building exceptional user experiences',
      technologies: [
        { name: 'React', proficiency: 95, description: 'Component-based library for building user interfaces' },
        { name: 'Vue.js', proficiency: 90, description: 'Progressive framework for building UIs' },
        { name: 'Angular', proficiency: 85, description: 'Platform for building mobile and desktop web applications' },
        { name: 'Next.js', proficiency: 92, description: 'React framework for production-grade applications' },
        { name: 'TypeScript', proficiency: 88, description: 'Typed superset of JavaScript' },
        { name: 'Tailwind CSS', proficiency: 94, description: 'Utility-first CSS framework' }
      ]
    },
    {
      title: 'Backend Technologies',
      description: 'Robust server-side technologies for scalable and secure applications',
      technologies: [
        { name: 'Node.js', proficiency: 93, description: 'JavaScript runtime for server-side development' },
        { name: 'Python', proficiency: 90, description: 'Versatile programming language for web and AI applications' },
        { name: 'Java', proficiency: 85, description: 'Enterprise-grade programming language' },
        { name: 'Spring Boot', proficiency: 82, description: 'Java framework for building production-ready applications' },
        { name: 'Django', proficiency: 87, description: 'High-level Python web framework' },
        { name: 'Express.js', proficiency: 91, description: 'Fast, unopinionated web framework for Node.js' }
      ]
    },
    {
      title: 'Database Technologies',
      description: 'Modern database solutions for data storage and management',
      technologies: [
        { name: 'PostgreSQL', proficiency: 92, description: 'Advanced open-source relational database' },
        { name: 'MongoDB', proficiency: 89, description: 'NoSQL document database' },
        { name: 'Redis', proficiency: 85, description: 'In-memory data structure store' },
        { name: 'MySQL', proficiency: 88, description: 'Popular open-source relational database' },
        { name: 'Elasticsearch', proficiency: 78, description: 'Distributed search and analytics engine' },
        { name: 'Firebase', proficiency: 86, description: 'Google\'s mobile platform for app development' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      description: 'Cloud platforms and DevOps tools for modern infrastructure',
      technologies: [
        { name: 'AWS', proficiency: 91, description: 'Amazon Web Services cloud platform' },
        { name: 'Docker', proficiency: 89, description: 'Containerization platform' },
        { name: 'Kubernetes', proficiency: 84, description: 'Container orchestration platform' },
        { name: 'Azure', proficiency: 82, description: 'Microsoft cloud computing platform' },
        { name: 'Google Cloud', proficiency: 80, description: 'Google\'s cloud computing services' },
        { name: 'Terraform', proficiency: 87, description: 'Infrastructure as Code tool' }
      ]
    },
    {
      title: 'Mobile Technologies',
      description: 'Cross-platform and native mobile development frameworks',
      technologies: [
        { name: 'React Native', proficiency: 90, description: 'Framework for building native mobile apps' },
        { name: 'Flutter', proficiency: 85, description: 'Google\'s UI toolkit for mobile apps' },
        { name: 'Swift', proficiency: 80, description: 'Programming language for iOS development' },
        { name: 'Kotlin', proficiency: 78, description: 'Modern programming language for Android' },
        { name: 'Ionic', proficiency: 82, description: 'Hybrid mobile app development framework' },
        { name: 'Xamarin', proficiency: 75, description: 'Microsoft\'s mobile app development platform' }
      ]
    },
    {
      title: 'AI & Data Science',
      description: 'Machine learning and data science technologies',
      technologies: [
        { name: 'TensorFlow', proficiency: 85, description: 'Open-source machine learning platform' },
        { name: 'PyTorch', proficiency: 82, description: 'Deep learning framework' },
        { name: 'Pandas', proficiency: 88, description: 'Data manipulation and analysis library' },
        { name: 'Scikit-learn', proficiency: 86, description: 'Machine learning library for Python' },
        { name: 'Apache Spark', proficiency: 79, description: 'Unified analytics engine for big data' },
        { name: 'Jupyter', proficiency: 83, description: 'Interactive computing environment' }
      ]
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Cloud Architect',
    'Microsoft Azure Solutions Architect Expert',
    'Kubernetes Certified Administrator (CKA)',
    'MongoDB Certified Developer',
    'Oracle Certified Professional'
  ];

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 90) return 'bg-green-500';
    if (proficiency >= 80) return 'bg-blue-500';
    if (proficiency >= 70) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  const getProficiencyLabel = (proficiency: number) => {
    if (proficiency >= 90) return 'Expert';
    if (proficiency >= 80) return 'Advanced';
    if (proficiency >= 70) return 'Intermediate';
    return 'Basic';
  };

  return (
    <div className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technologies We Use
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and proven frameworks to build robust, scalable, and innovative solutions.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1707758967860-19106a5e9ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwc3RhY2slMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NTc3Njg3NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Technology stack and programming" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Modern Technology Stack
                </h2>
                <p className="text-lg opacity-90">
                  Powering the next generation of digital solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Categories */}
        <div className="space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <Card key={techIndex} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-lg text-gray-900">
                          {tech.name}
                        </CardTitle>
                        <Badge 
                          variant="secondary" 
                          className={`${getProficiencyColor(tech.proficiency)} text-white`}
                        >
                          {getProficiencyLabel(tech.proficiency)}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-600 text-sm">
                        {tech.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Proficiency</span>
                          <span className="text-sm font-medium text-gray-700">{tech.proficiency}%</span>
                        </div>
                        <Progress 
                          value={tech.proficiency} 
                          className="h-2"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Certifications
            </h2>
            <p className="text-lg text-gray-600">
              Industry-recognized certifications that validate our expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h3 className="font-semibold text-gray-900">{cert}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 rounded-3xl p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ready to Leverage These Technologies?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our expert team help you choose the right technology stack for your project and build solutions that scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
              Discuss Your Project
            </button>
            <button className="px-8 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium transition-colors">
              Technology Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}