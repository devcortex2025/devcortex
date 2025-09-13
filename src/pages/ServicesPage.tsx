import { Services } from '../components/Services';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

export function ServicesPage() {
  const serviceDetails = [
    {
      title: 'Software Consulting',
      description: 'Strategic technology consulting to align your software architecture with business goals.',
      features: [
        'Technology stack selection and evaluation',
        'Software architecture design and review',
        'Code quality assessment and improvement',
        'Performance optimization strategies',
        'Scalability planning and implementation',
        'Technical due diligence for investments'
      ]
    },
    {
      title: 'Cloud & DevOps',
      description: 'Comprehensive cloud migration and DevOps implementation for modern infrastructure.',
      features: [
        'Cloud migration strategy and execution',
        'CI/CD pipeline setup and optimization',
        'Infrastructure as Code (IaC) implementation',
        'Container orchestration with Kubernetes',
        'Monitoring and alerting systems',
        'Security and compliance automation'
      ]
    },
    {
      title: 'AI & Data Solutions',
      description: 'Harness the power of artificial intelligence and data analytics for business growth.',
      features: [
        'Machine learning model development',
        'Data pipeline design and implementation',
        'Business intelligence dashboards',
        'Predictive analytics solutions',
        'Natural language processing applications',
        'Computer vision and image recognition'
      ]
    },
    {
      title: 'Product Design & Development',
      description: 'End-to-end product development from concept to deployment.',
      features: [
        'UI/UX design and prototyping',
        'Frontend and backend development',
        'Mobile app development (iOS & Android)',
        'API design and integration',
        'Database design and optimization',
        'Quality assurance and testing'
      ]
    },
    {
      title: 'Technology Modernization',
      description: 'Transform legacy systems into modern, efficient, and scalable solutions.',
      features: [
        'Legacy system assessment and analysis',
        'Migration strategy development',
        'API-first modernization approach',
        'Microservices architecture implementation',
        'Database migration and optimization',
        'Integration with modern tools and platforms'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We begin by understanding your business goals, current challenges, and technical requirements.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Our experts develop a comprehensive strategy and detailed project plan tailored to your needs.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the plan with regular updates, ensuring quality and adherence to timelines.'
    },
    {
      step: '04',
      title: 'Testing & Deployment',
      description: 'Rigorous testing and smooth deployment ensure your solution works perfectly from day one.'
    },
    {
      step: '05',
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance keep your solution running optimally and up-to-date.'
    }
  ];

  return (
    <div className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to transform your business and drive digital innovation.
          </p>
        </div>

        {/* Services Overview */}
        <Services />

        {/* Detailed Service Information */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Details</h2>
            <p className="text-lg text-gray-600">
              Explore what each service includes and how we can help your business grow.
            </p>
          </div>

          <div className="space-y-8">
            {serviceDetails.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="mb-4 lg:mb-0">
                      <CardTitle className="text-2xl text-gray-900 mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-600">
                        {service.description}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                        Get Quote
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-cyan-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 rounded-3xl p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our services can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3">
              Schedule Consultation
            </Button>
            <Button variant="outline" className="border-gray-300 hover:bg-gray-50 px-8 py-3">
              Download Service Brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}