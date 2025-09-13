import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Dev<span className="text-blue-500">Cortex</span>
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Transforming Ideas into Digital Reality
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              DevCortex delivers innovative IT consultancy services, empowering businesses with cutting-edge technology solutions that drive growth and competitive advantage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg group"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg group"
              >
                <Play className="mr-2 w-4 h-4" />
                View Our Portfolio
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1531535807748-218331acbcb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU3NzY4MzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="DevCortex team collaboration" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-2xl transform -rotate-2 scale-110 -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}