import { useState, useEffect } from 'react';
import { ChevronDown, MessageCircle, Shield, Users, Book, BarChart, ArrowRight, Globe, Clock, Heart, Send, X, DollarSign, Gift, PenTool, Code } from 'lucide-react';

const LoyaWebsite = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY > 500) setAnimateStats(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { label: 'Users Helped', value: '50K+', icon: Users },
    { label: 'Available Hours', value: '24/7', icon: Clock },
    { label: 'Success Rate', value: '92%', icon: BarChart },
    { label: 'Languages', value: '12+', icon: Globe },
  ];

  const services = [
    {
      title: 'Family Law',
      description: 'Marriage, divorce, child custody, and domestic relations',
      icon: Users,
      category: 'family'
    },
    {
      title: 'Property Rights',
      description: 'Land disputes, property ownership, and tenant rights',
      icon: Shield,
      category: 'property'
    },
    {
      title: 'Employment Law',
      description: 'Worker rights, contracts, and workplace disputes',
      icon: Book,
      category: 'employment'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">L</span>
              </div>
              <span className="text-2xl font-bold text-blue-900">LOYA</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Services', 'How It Works', 'Contact'].map((item) => (
                <button key={item} className="text-gray-600 hover:text-blue-600 transition">
                  {item}
                </button>
              ))}
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
              Free Legal Support for All Ugandans
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Access instant legal advice powered by AI technology. Available 24/7, in your language, completely free.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition flex items-center justify-center">
                Get Legal Help Now <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-50 transition flex items-center justify-center">
                Learn More <ChevronDown className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`text-center transform transition-all duration-500 ${animateStats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Services</h2>
          <div className="flex justify-center mb-8 space-x-4">
            {['all', 'family', 'property', 'employment'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full transition ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services
              .filter((service) => activeTab === 'all' || service.category === activeTab)
              .map((service) => (
                <div key={service.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Chat Feature Preview */}
      <div className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h2 className="text-4xl font-bold mb-6">24/7 Legal Support in Your Language</h2>
              <p className="text-blue-100 text-lg mb-8">
                Get instant answers to your legal questions through our AI-powered chat system.
                Available in multiple local languages.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition flex items-center">
                Start Chat <MessageCircle className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-xl">
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-gray-600">How can I file for child custody?</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-blue-600">Here are the steps for filing child custody in Uganda:</p>
                <ol className="text-blue-600 mt-2 ml-4 list-decimal">
                  <li>Gather necessary documentation</li>
                  <li>File petition at family court</li>
                  <li>Attend mandatory mediation</li>
                </ol>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your legal question..."
                  className="w-full p-4 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-600"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About Loya</h3>
              <p className="text-gray-400">Empowering Ugandan citizens with free AI-powered legal support and guidance.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal Areas</h3>
              <ul className="space-y-2">
                {services.map(service => (
                  <li key={service.title} className="text-gray-400">{service.title}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>support@loya.ug</li>
                <li>Toll-free: 0800-LOYA</li>
                <li>Kampala, Uganda</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Loya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoyaWebsite;
