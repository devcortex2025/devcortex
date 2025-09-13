import { Target, Eye, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About DevCortex
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A forward-thinking IT consultancy dedicated to helping businesses harness the power of technology for sustainable growth and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Who We Are</h3>
            <p className="text-gray-600 leading-relaxed">
              DevCortex is a forward-thinking IT consultancy dedicated to helping businesses harness the power of technology for sustainable growth and innovation. We specialize in designing, developing, and delivering cutting-edge digital solutions tailored to your unique business needs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With a team of experienced consultants, developers, and technology experts, DevCortex bridges the gap between business goals and technical execution. Whether you are a startup looking to build your first product or an enterprise scaling complex systems, we provide the right expertise to make it happen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
              <p className="text-sm text-gray-600">Experienced consultants and developers</p>
            </div>
            
            <div className="text-center p-6 bg-cyan-50 rounded-xl">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Business Focus</h4>
              <p className="text-sm text-gray-600">Technology aligned with business goals</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses by transforming ideas into scalable digital solutions that drive efficiency, innovation, and competitive advantage.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To become a trusted global IT consultancy that shapes the future of digital transformation through innovation, collaboration, and excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}