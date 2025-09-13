import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, Smartphone, Brain, MapPin, Calendar, Users, Trophy } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PersonalizedStory() {
  const highlights = [
    {
      icon: Building2,
      title: "Government Trust",
      description: "Official websites for Government of India",
      detail: "woolboard.in & cwdbportal.in"
    },
    {
      icon: Users,
      title: "1900+ Officers",
      description: "Police duty management system",
      detail: "Jodhpur Police SART Club"
    },
    {
      icon: Smartphone,
      title: "Fast-Growing Startups",
      description: "Complete ecosystem development",
      detail: "Veghigh, DrLocum, BajiCabs"
    },
    {
      icon: Brain,
      title: "AI Research",
      description: "Federated learning & edge AI",
      detail: "VANET, Privacy-preserving systems"
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "DevCortex Founded",
      description: "Started with a vision to bridge technology and business needs"
    },
    {
      year: "2022",
      title: "Government Projects",
      description: "Trusted with official government portals and enterprise systems"
    },
    {
      year: "2023",
      title: "Startup Ecosystem",
      description: "Helped multiple startups scale with complete tech solutions"
    },
    {
      year: "2024",
      title: "AI Innovation",
      description: "Leading edge AI implementations and research projects"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Journey & Impact
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From government portals to cutting-edge AI solutions, discover how DevCortex has made a real difference across diverse industries and technologies.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{highlight.description}</p>
                <Badge variant="outline" className="text-xs text-blue-600">
                  {highlight.detail}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              From Vision to Reality
            </h3>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Founded in 2019, DevCortex emerged from a simple yet powerful belief: that every great idea deserves exceptional execution. What started as a vision to bridge the gap between innovative concepts and scalable digital solutions has grown into a trusted partner for organizations ranging from government departments to fast-growing startups.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our journey has been marked by meaningful collaborations - from designing official government portals that serve thousands of citizens daily, to building complete ecosystems for emerging startups that are reshaping their industries. Each project has taught us something new, pushing us to continuously evolve and stay ahead of the technology curve.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>Based in India, Serving Globally</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Est. 2019</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTc3NTcxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="DevCortex team at work"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">50+ Projects</div>
                  <div className="text-xs text-gray-500">Successfully Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Growth Timeline
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-blue-500 rounded-full transform md:-translate-x-1/2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="bg-white/80 backdrop-blur-sm border-0 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className="bg-blue-500 text-white">{item.year}</Badge>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}