import { About } from '../components/About';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, Users, Award, Coffee } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former tech lead at Google, with 12+ years in software architecture and team leadership.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b6cea1af?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=400&q=80',
      skills: ['Strategy', 'Leadership', 'Architecture']
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Cloud infrastructure expert with experience at AWS and Microsoft Azure teams.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=400&q=80',
      skills: ['Cloud', 'DevOps', 'Security']
    },
    {
      name: 'Priya Patel',
      role: 'Head of AI & Data',
      bio: 'PhD in Machine Learning, previously led AI initiatives at Tesla and Uber.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=400&q=80',
      skills: ['Machine Learning', 'Data Science', 'Python']
    },
    {
      name: 'James Thompson',
      role: 'Senior Full-Stack Developer',
      bio: 'Full-stack expert specializing in React, Node.js, and modern web technologies.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=400&q=80',
      skills: ['React', 'Node.js', 'TypeScript']
    },
    {
      name: 'Emily Zhang',
      role: 'UI/UX Design Lead',
      bio: 'Design systems expert with a passion for creating intuitive user experiences.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=400&q=80',
      skills: ['UI/UX', 'Figma', 'Design Systems']
    },
    {
      name: 'David Kim',
      role: 'Mobile Development Lead',
      bio: 'React Native and Flutter specialist with 50+ published mobile applications.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=400&q=80',
      skills: ['React Native', 'Flutter', 'Mobile']
    }
  ];

  const stats = [
    { icon: Calendar, label: 'Years of Experience', value: '5+' },
    { icon: Users, label: 'Team Members', value: '25+' },
    { icon: Award, label: 'Projects Completed', value: '100+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '10,000+' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to solve complex problems.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Quality',
      description: 'We maintain the highest standards in code quality, testing, and delivery.',
      color: 'from-emerald-500 to-green-500'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners in their digital transformation journey.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Growth',
      description: 'We are committed to continuous learning and helping our clients scale their business.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About DevCortex
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn more about our company, our team, and the values that drive us to deliver exceptional results.
          </p>
        </div>

        {/* Company Overview */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded in 2019, DevCortex emerged from a simple yet powerful vision: to bridge the gap between innovative ideas and scalable digital solutions. Our team of experienced developers, designers, and strategists came together with a shared passion for transforming businesses through technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We specialize in end-to-end digital transformation, helping businesses leverage cutting-edge technologies to achieve their goals. From initial consultation to final deployment and ongoing support, we're your trusted technology partner.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Software Consulting & Architecture
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Cloud & DevOps Solutions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  AI & Data Analytics
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Product Design & Development
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Our Commitment</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We believe in building long-term partnerships with our clients, delivering solutions that not only meet today's needs but also scale for tomorrow's opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>



        {/* Stats */}
        <div className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl my-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="space-y-4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do at DevCortex.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white text-center group hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-xl">{value.title[0]}</span>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              The talented individuals behind DevCortex's success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white group hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <ImageWithFallback 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Career Section */}
        <div className="text-center bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 rounded-3xl p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for technology and innovation. Explore career opportunities at DevCortex.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
              View Open Positions
            </button>
            <button className="px-8 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium transition-colors">
              Company Culture
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}