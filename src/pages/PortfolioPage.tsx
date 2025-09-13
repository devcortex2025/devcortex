import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ExternalLink, Github, Building2, Smartphone, Brain, Server } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function PortfolioPage() {
  const governmentProjects = [
    {
      title: 'WoolBoard Government Portal',
      description: 'Official government websites and portals for wool industry management, serving multiple government departments.',
      image: '/images/CwdbPortal.png',
      tags: ['React', 'Node.js', 'Government Portal', 'Database Management'],
      category: 'Government & Enterprise',
      client: 'Government of India',
      year: '2024',
      website: 'woolboard.in & cwdbportal.in'
    },
    {
      title: 'Police Duty Management System',
      description: 'Comprehensive duty management system for Jodhpur Police handling 1900+ officers with scheduling and reporting features.',
      image: '/images/PolicePortal.png',
      tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'Officer Management'],
      category: 'Government & Enterprise',
      client: 'SART Club - Jodhpur Police',
      year: '2023'
    }
  ];

  const startupProjects = [
    {
      title: 'Veghigh - Vegetable Marketplace',
      description: 'Fast-growing vegetable selling startup with complete ecosystem including website, portal, and mobile apps for iOS & Android.',
      image: '/images/VegHigh.png',
      tags: ['React Native', 'Node.js', 'MongoDB', 'E-commerce'],
      category: 'Startup Solutions',
      client: 'Veghigh Startup',
      year: '2024',
      website: 'veghigh.in'
    },
    {
      title: 'DrLocum - Doctor Assignment Platform',
      description: 'Doctor-to-hospital assignment platform with comprehensive website and mobile applications for seamless healthcare staffing.',
      image: 'https://images.unsplash.com/photo-1659353887222-630895f23cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBhcHBvaW50bWVudCUyMGFwcHxlbnwxfHx8fDE3NTc3NzA0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Flutter', 'Firebase', 'Healthcare'],
      category: 'Startup Solutions',
      client: 'DrLocum Healthcare',
      year: '2023'
    },
    {
      title: 'BajiCabs - Ride Hailing Service',
      description: 'Complete ride-hailing service solution with mobile applications and robust backend system for seamless transportation.',
      image: '/images/Balajicabs.png',
      tags: ['React Native', 'Node.js', 'Real-time Tracking', 'Payment Gateway'],
      category: 'Startup Solutions',
      client: 'BajiCabs Transportation',
      year: '2023'
    },
    {
      title: 'SmartBin - IoT Waste Management',
      description: 'IoT-enabled smart waste management system with intelligent monitoring website and management portal.',
      image: '/images/SmartBin.png',
      tags: ['IoT', 'React', 'Python', 'Sensor Integration'],
      category: 'Startup Solutions',
      client: 'SmartBin Technologies',
      year: '2022'
    }
  ];

  const aiMlProjects = [
    {
      title: 'Federated Learning for VANET',
      description: 'Built distributed LSTM model for vehicle emissions prediction using Flower framework for federated learning in vehicular networks.',
      image: 'https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBBSSUyMG5ldXJhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzU3NzcwNDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'TensorFlow', 'Flower', 'Federated Learning', 'LSTM'],
      category: 'AI & ML',
      client: 'Research Project',
      year: '2024'
    },
    {
      title: 'Privacy-Preserving Attendance System',
      description: 'Location-based face recognition attendance app with on-device AI using EdgeFace model for enhanced privacy.',
      image: 'https://images.unsplash.com/photo-1618908839493-516deaa83c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwcmVjb2duaXRpb24lMjBzZWN1cml0eSUyMHN5c3RlbXxlbnwxfHx8fDE3NTc3NzA0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Computer Vision', 'Edge AI', 'Flutter', 'Face Recognition', 'Privacy'],
      category: 'AI & ML',
      client: 'Enterprise Client',
      year: '2024'
    },
    {
      title: 'Ayurveda Research Analytics',
      description: 'Data preprocessing and ML model development for ayurvedic clinical studies with advanced analytics capabilities.',
      image: 'https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBBSSUyMG5ldXJhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzU3NzcwNDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Data Science', 'ML Models', 'Healthcare Analytics', 'Research'],
      category: 'AI & ML',
      client: 'Virachna Research',
      year: '2023'
    },
    {
      title: 'CampusCoin Fraud Detection',
      description: 'Blockchain + ML-based fraud detection system for campus token ecosystem with real-time monitoring.',
      image: 'https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBBSSUyMG5ldXJhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzU3NzcwNDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Blockchain', 'ML', 'Fraud Detection', 'Campus Technology'],
      category: 'AI & ML',
      client: 'Educational Institution',
      year: '2023'
    }
  ];

  const additionalProjects = [
    {
      title: 'Smart Healthcare Analytics',
      description: 'Predictive models for hospital resource optimization',
      tags: ['Healthcare', 'Predictive Analytics']
    },
    {
      title: 'Retail Demand Forecasting',
      description: 'ML models for inventory prediction and optimization',
      tags: ['Retail', 'Forecasting']
    },
    {
      title: 'Edge AI Deployments',
      description: 'Edge AI solutions for IoT and smart devices',
      tags: ['Edge AI', 'IoT']
    },
    {
      title: 'NLP Chatbots',
      description: 'AI-powered chatbots for customer support',
      tags: ['NLP', 'Customer Support']
    },
    {
      title: 'AI Recommendation Systems',
      description: 'Recommendation engines for e-commerce platforms',
      tags: ['AI', 'E-commerce']
    },
    {
      title: 'Decentralized Server Management',
      description: 'AI-driven decentralized resource allocation system',
      tags: ['AI', 'Distributed Systems']
    }
  ];

  const allProjects = [...governmentProjects, ...startupProjects, ...aiMlProjects];
  const categories = ['All', 'Government & Enterprise', 'Startup Solutions', 'AI & ML'];

  return (
    <div className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From government portals to cutting-edge AI solutions, explore our diverse range of successful projects across multiple industries and technologies.
          </p>
        </div>

        {/* Filter Buttons 
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              className={category === 'All' ? 'bg-blue-500 hover:bg-blue-600' : 'border-gray-300 hover:bg-gray-50'}
            >
              {category === 'Government & Enterprise' && <Building2 className="w-4 h-4 mr-2" />}
              {category === 'Startup Solutions' && <Smartphone className="w-4 h-4 mr-2" />}
              {category === 'AI & ML' && <Brain className="w-4 h-4 mr-2" />}
              {category}
            </Button>
          ))}
        </div>*/}

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className="relative overflow-hidden">
                <ImageWithFallback 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    {project.website && (
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {project.website}
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-600 hover:bg-blue-100">
                    {project.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-gray-500">Client: {project.client}</p>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              AI & ML Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick overview of other successful implementations and specialized solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Server className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 rounded-3xl p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our satisfied clients across government, startups, and enterprises. Let us help you transform your ideas into successful digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3">
              Start Your Project
            </Button>
            <Button variant="outline" className="border-gray-300 hover:bg-gray-50 px-8 py-3">
              Request Case Study
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}