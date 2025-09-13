import { Contact } from '../components/Contact';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { MapPin, Clock, Globe, Phone } from 'lucide-react';

export function ContactPage() {
  const offices = [
    {
      city: 'India',
      address: 'DevCortex Headquarters\nIndia',
      phone: '+91 76206 90141',
      email: 'info@devcortex.in',
      timezone: 'IST (UTC+5:30)',
      isHeadquarters: true
    },
    {
      city: 'Global',
      address: 'Remote Services\nWorldwide Coverage',
      phone: '+91 76206 90141',
      email: 'info@devcortex.in',
      timezone: 'All Time Zones',
      isHeadquarters: false
    },
    {
      city: 'Contact Person',
      address: 'Ashutosh Gupta\nFounder & Lead Developer',
      phone: '+91 76206 90141',
      email: 'info@devcortex.in',
      timezone: 'IST (UTC+5:30)',
      isHeadquarters: false
    }
  ];

  const faqs = [
    {
      question: 'How do you approach new projects?',
      answer: 'We start with a comprehensive discovery phase to understand your business goals, technical requirements, and constraints. This helps us create a tailored solution that aligns with your objectives.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity and scope. Simple projects may take 2-4 weeks, while enterprise solutions can take 3-6 months. We provide detailed timelines during the planning phase.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer comprehensive support and maintenance packages to ensure your solution continues to perform optimally. This includes bug fixes, updates, and feature enhancements.'
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! We often work as an extension of our clients\' teams, collaborating closely with your internal developers, designers, and stakeholders throughout the project lifecycle.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern web technologies (React, Node.js), cloud platforms (AWS, Azure, GCP), mobile development (React Native, Flutter), and AI/ML solutions (Python, TensorFlow).'
    },
    {
      question: 'How do you handle project communication?',
      answer: 'We use modern collaboration tools like Slack, Jira, and Figma for real-time communication. We also provide regular updates through weekly reports and milestone reviews.'
    }
  ];

  return (
    <div className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start your next project? Get in touch with our team to discuss your requirements and receive a personalized solution.
          </p>
        </div>

        {/* Main Contact Form */}
        <Contact />

        {/* Office Locations */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Offices</h2>
            <p className="text-lg text-gray-600">
              Visit us at any of our global locations or connect with us remotely.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {offices.map((office, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CardTitle className="text-xl text-gray-900">{office.city}</CardTitle>
                    {office.isHeadquarters && (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-600">
                        HQ
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600 text-sm whitespace-pre-line">{office.address}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600 text-sm">{office.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600 text-sm">{office.email}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600 text-sm">{office.timezone}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-16">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-cyan-50">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600">We're here to help during these hours across all time zones</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Monday - Friday</h4>
                  <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Saturday</h4>
                  <p className="text-gray-600">10:00 AM - 4:00 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sunday</h4>
                  <p className="text-gray-600">Emergency Support Only</p>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-sm text-gray-500">
                  * Emergency support available 24/7 for enterprise clients
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}