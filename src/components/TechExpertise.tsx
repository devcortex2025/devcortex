import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Code, Database, Cloud, Smartphone, Brain, Globe, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TechExpertise() {
  const techStacks = [
    {
      category: "Frontend",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      technologies: ["React", "Next.js", "Vue.js", "Angular", "React Native", "Flutter"]
    },
    {
      category: "Backend", 
      icon: Code,
      color: "from-green-500 to-emerald-500",
      technologies: ["Node.js", "Python", "Spring Boot", "Express.js", "FastAPI", "Django"]
    },
    {
      category: "Database",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "InfluxDB", "Firebase"]
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Jenkins"]
    },
    {
      category: "Mobile",
      icon: Smartphone,
      color: "from-indigo-500 to-purple-500",
      technologies: ["React Native", "Flutter", "iOS", "Android", "Progressive Web Apps"]
    },
    {
      category: "AI & ML",
      icon: Brain,
      color: "from-pink-500 to-rose-500",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP", "Computer Vision"]
    }
  ];

  const realProjects = [
    {
      title: "Government Portal Architecture",
      description: "Scalable government systems serving thousands of users daily",
      tech: ["React", "Spring Boot", "PostgreSQL", "AWS"],
      impact: "Serving 1000+ daily users"
    },
    {
      title: "Startup Mobile Ecosystem",
      description: "Complete mobile and web solutions for fast-growing startups",
      tech: ["React Native", "Node.js", "MongoDB", "Real-time APIs"],
      impact: "3 successful startup launches"
    },
    {
      title: "AI-Powered Systems",
      description: "Edge AI and federated learning implementations",
      tech: ["Python", "TensorFlow", "Edge Computing", "Privacy-first AI"],
      impact: "Research-grade innovations"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technology Expertise
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We master the technologies that power today's digital solutions. From proven enterprise stacks to cutting-edge AI frameworks, we choose the right tools for your success.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {techStacks.map((stack, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stack.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                    <stack.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{stack.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-sm hover:bg-gray-50 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Real Project Applications */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Real-World Applications
            </h3>
            <div className="space-y-6">
              {realProjects.map((project, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">{project.title}</h4>
                    <p className="text-gray-600 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} className="bg-blue-50 text-blue-700 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-green-600 font-medium">{project.impact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white group">
                View Technical Case Studies
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1667984390527-850f63192709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwc3RhY2slMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTc3NzA2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Technology development workspace"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            {/* Tech stack floating badges */}
            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Always Updated</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600">15+</div>
                <div className="text-xs text-gray-600">Tech Stacks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}