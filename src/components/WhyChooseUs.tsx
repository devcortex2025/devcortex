import { Lightbulb, Target, Award, Handshake } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We leverage the latest technologies to build future-ready solutions.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Target,
      title: 'Business-Centric Approach',
      description: 'Technology aligned with your core business objectives.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Award,
      title: 'Proven Expertise',
      description: 'A team with diverse industry experience and successful projects delivered.',
      color: 'from-emerald-400 to-green-600'
    },
    {
      icon: Handshake,
      title: 'End-to-End Partnership',
      description: 'From idea to execution, we stay with you at every step.',
      color: 'from-purple-400 to-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose DevCortex?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions that truly make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 rounded-3xl p-12">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Ideas into Digital Reality?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how DevCortex can help you achieve your business goals through innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
                Start Your Project
              </button>
              <button className="px-8 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium transition-colors">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}