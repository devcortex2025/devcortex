import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@devcortex.in',
      action: 'mailto:info@devcortex.in'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 76206 90141',
      action: 'tel:+917620690141'
    },
    {
      icon: MapPin,
      title: 'Contact Person',
      details: 'Ashutosh Gupta',
      action: 'mailto:info@devcortex.in'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start your digital transformation journey? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow border-0 bg-white">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{info.details}</p>
                  <a 
                    href={info.action} 
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Contact Now
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
              <p className="text-gray-600">We'll get back to you within 24 hours</p>
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                  <p className="text-green-800 font-medium">✓ Message sent successfully!</p>
                  <p className="text-green-600 text-sm">We'll get back to you soon.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                  <p className="text-red-800 font-medium">✗ Failed to send message</p>
                  <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">First Name *</label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Your first name" 
                      className="bg-gray-50 border-gray-200"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Last Name *</label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Your last name" 
                      className="bg-gray-50 border-gray-200"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <label className="text-sm font-medium text-gray-700">Email *</label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com" 
                    className="bg-gray-50 border-gray-200"
                    required
                  />
                </div>

                <div className="space-y-2 mb-6">
                  <label className="text-sm font-medium text-gray-700">Company</label>
                  <Input 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name" 
                    className="bg-gray-50 border-gray-200"
                  />
                </div>

                <div className="space-y-2 mb-6">
                  <label className="text-sm font-medium text-gray-700">Message *</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..." 
                    className="bg-gray-50 border-gray-200 min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white py-3 rounded-lg group"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}