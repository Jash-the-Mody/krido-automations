import React, { useState, useEffect } from 'react';
import { Zap, Mail, TrendingUp, Workflow, Bot, MessageSquare, ArrowRight, Sparkles, Send, User, AtSign, Menu, X } from 'lucide-react';

export default function KridoAutomations() {
  const [scrollY, setScrollY] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    automation: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Mail className="w-10 h-10" />,
      title: "Email Automation",
      description: "Automate email campaigns, follow-ups, and customer communications. Smart sequences that convert.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Workflow className="w-10 h-10" />,
      title: "Workflow Automation",
      description: "Streamline business processes from data entry to complex multi-step operations across all your tools.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "SEO & Marketing",
      description: "Automate content distribution, social media posting, analytics reporting, and marketing workflows.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Bot className="w-10 h-10" />,
      title: "Custom AI Agents",
      description: "Fine-tuned AI agents trained on your data, designed for your specific business needs and workflows.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Voice & Chat Bots",
      description: "Intelligent conversational agents for customer support, lead qualification, and 24/7 engagement.",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  const testimonials = [
    {
      type: 'text',
      content: "Krido Automations transformed our entire sales process. What used to take our team 15 hours a week now runs automatically. The ROI was visible within the first month.",
      author: "Sarah Mitchell",
      role: "CEO, TechFlow Solutions",
      company: "TechFlow"
    },
    {
      type: 'video',
      videoId: 'YOUR_YOUTUBE_VIDEO_ID',
      author: "Michael Chen",
      role: "Operations Director",
      company: "DataSync Pro"
    },
    {
      type: 'text',
      content: "We needed custom AI workflows that actually understood our industry. Krido delivered beyond expectations. Their automation saved us $50K annually in operational costs.",
      author: "Jennifer Rodriguez",
      role: "Founder, Marketing Dynamics",
      company: "Marketing Dynamics"
    }
  ];

  const stats = [
    { number: "10+", label: "Clients" },
    { number: "50+", label: "Workflows Created" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "1000+", label: "Hours Saved" }
  ];

  const navItems = [
    { name: "Services", id: "services" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" }
  ];

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      alert('Please fill in your name and email.');
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE',
          name: formData.name,
          email: formData.email,
          message: formData.automation || 'No automation details provided',
          subject: 'New Automation Inquiry - Krido Automations'
        })
      });

      const data = await response.json();

      if (data.success) {
        alert('Thank you! We will contact you within 24 hours.');
        setFormData({ name: '', email: '', automation: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try emailing us directly.');
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
             style={{ animationDelay: '0s', animationDuration: '7s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
             style={{ animationDelay: '2s', animationDuration: '9s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
             style={{ animationDelay: '4s', animationDuration: '8s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6 backdrop-blur-lg bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Krido Automations
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-white"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10 py-4">
            <div className="flex flex-col gap-4 px-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-20 pb-24">
        <div className="max-w-7xl mx-auto text-center">
          {/* Hero Text - Centered */}
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-7xl md:text-9xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Automate
              </span>
              <br />
              <span className="text-white">Anything</span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-10 font-medium">
              Custom-built workflows for companies and individuals.
            </p>

            <div className="p-8 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl mb-10 text-left max-w-3xl mx-auto">
              <p className="text-gray-300 text-lg leading-relaxed">
                <span className="text-purple-400 font-semibold">Tired of the AI hype?</span> You're not alone. Everyone talks about AI transformation, but few businesses can actually implement it effectively.
                <br /><br />
                The missing piece? <span className="text-pink-400 font-semibold">Custom workflows.</span> Generic AI models aren't enough. You need solutions built specifically for your business, leveraging cutting-edge tools to solve your unique challenges.
                <br /><br />
                That's where we come in. We build automation systems that actually work for your business.
              </p>
            </div>
          </div>

          {/* Stats - Below text */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Grid Layout */}
      <section id="services" className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">What We Automate</h2>
            <p className="text-lg text-gray-400">From simple tasks to complex AI workflows, we've got you covered</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl transition-all duration-500 cursor-pointer ${
                  activeCard === index ? 'scale-105 bg-white/10 shadow-2xl shadow-purple-500/20' : ''
                } ${index === 3 ? 'md:col-start-1 lg:col-start-2' : ''} ${index === 4 ? 'md:col-start-2 lg:col-start-3' : ''}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>

                <div className="relative">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 px-6 py-20 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">What Our Clients Say</h2>
            <p className="text-lg text-gray-400">Real results from real businesses</p>
          </div>

          <div className="relative max-w-5xl mx-auto mb-20">
            {/* Testimonial Cards Container */}
            <div className="relative h-[500px] md:h-[450px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 right-0 transition-all duration-700 ${
                    index === currentTestimonial
                      ? 'opacity-100 scale-100 z-10'
                      : 'opacity-0 scale-95 pointer-events-none z-0'
                  }`}
                >
                  {testimonial.type === 'video' ? (
                    <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl">
                      <div className="w-full max-w-2xl mx-auto aspect-video rounded-2xl overflow-hidden mb-6 border border-white/20">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                          title="Client Testimonial Video"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-semibold text-white">{testimonial.author}</p>
                        <p className="text-purple-400">{testimonial.role}</p>
                        <p className="text-gray-500 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 md:p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl text-center">
                      <div className="text-6xl text-purple-400 mb-6">"</div>
                      <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 max-w-3xl mx-auto">
                        {testimonial.content}
                      </p>
                      <div className="border-t border-white/20 pt-6">
                        <p className="text-xl font-semibold text-white mb-1">{testimonial.author}</p>
                        <p className="text-purple-400 mb-1">{testimonial.role}</p>
                        <p className="text-gray-500 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentTestimonial
                      ? 'w-12 h-3 bg-gradient-to-r from-purple-600 to-pink-600'
                      : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 opacity-10"></div>

            <div className="relative">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Automate?</h2>
                <p className="text-lg text-gray-300">
                  Tell us what you need, and we'll build a custom solution for you.
                </p>
              </div>

              <div className="space-y-6 max-w-2xl mx-auto">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                    <AtSign className="w-4 h-4" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Optional Automation Details */}
                <div>
                  <label htmlFor="automation" className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    What are you looking to automate? <span className="text-gray-500 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="automation"
                    rows="4"
                    value={formData.automation}
                    onChange={(e) => setFormData({ ...formData, automation: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your automation needs... (e.g., 'I want to automate my email marketing campaigns and lead follow-ups')"
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Started <Send className="w-5 h-5" />
                </button>

                <p className="text-center text-sm text-gray-400 mt-4">
                  We typically respond within 24 hours. No commitment required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-lg font-bold text-white">Krido Automations</span>
          </div>
          <p className="mb-2 text-sm">Automating the future, one workflow at a time.</p>
          <p className="text-xs">© 2025 Krido Automations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
