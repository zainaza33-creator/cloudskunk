import { useState, useEffect } from 'react';
import NodeNetwork from './components/NodeNetwork';
import { FaCloud, FaServer, FaWordpress, FaShieldAlt, FaBolt, FaGitAlt, FaRocket, FaEnvelope, FaGlobeAfrica, FaMobileAlt, FaHome } from 'react-icons/fa';

function App() {
  const [countdown, setCountdown] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Set launch date (2 months from now)
    const launchDate = new Date();
    launchDate.setMonth(launchDate.getMonth() + 2);
    launchDate.setDate(15); // Launch on 15th
    
    const updateCountdown = () => {
      const now = new Date();
      const diff = launchDate - now;
      
      if (diff <= 0) {
        setCountdown('Launching Soon!');
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      setCountdown(`${days}d ${hours}h ${minutes}m`);
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const handleEarlyAccess = () => {
    const subject = encodeURIComponent("Early Access Request - CloudSkunk Hosting");
    const body = encodeURIComponent("Hi,\n\nI'm interested in CloudSkunk Hosting. Please update me when you launch and add me to the early access list.\n\nBest regards,");
    window.location.href = `mailto:feedback@cloudskunk.co.za?subject=${subject}&body=${body}`;
  };

  const handleGitHubRedirect = () => {
    window.open('https://github.com', '_blank');
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNotify = (e) => {
    e.preventDefault();
    if (email) {
      const subject = encodeURIComponent(`CloudSkunk Hosting Interest - ${email}`);
      const body = encodeURIComponent(`New subscription interest from: ${email}\n\nPlease add this email to your launch notification list.`);
      window.location.href = `mailto:feedback@cloudskunk.co.za?subject=${subject}&body=${body}`;
      
      // Show confirmation
      alert(`Thank you! Opening your email client to send notification to feedback@cloudskunk.co.za. Please send the email to confirm your interest.`);
      setEmail('');
    }
  };

  return (
    <div className="bg-black text-white overflow-x-hidden min-h-screen">
      <NodeNetwork />
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-green-500/30 z-50 px-4">
        <div className="max-w-7xl mx-auto py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <button 
            onClick={handleHomeClick}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/assets/cloudskunk logo.png" 
              alt="CloudSkunk" 
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
            <div className="text-xl sm:text-2xl font-bold">
              <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">Cloud</span>
              <span className="text-white">Skunk</span>
              <span className="text-green-400 text-sm font-normal ml-2">Hosting</span>
            </div>
          </button>
          <div className="text-green-400 font-medium text-sm sm:text-base">
            Launching in: <span className="text-white font-bold">{countdown}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 sm:pt-32 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-block mb-6 p-1 rounded-2xl bg-gradient-to-r from-purple-500 to-green-400 animate-pulse">
            <div className="bg-black rounded-xl px-4 py-2 sm:px-6 sm:py-2">
              <span className="text-green-400 font-bold text-sm sm:text-base">🚀 COMING SOON TO AFRICA</span>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-white">Hosting in Africa,</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
              Made This Simple.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
            No more cPanel. No more DirectAdmin. Just pure, simplified cloud hosting built for African developers.
          </p>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
            <button 
              onClick={handleEarlyAccess}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <FaRocket /> Request Early Access
            </button>
            <button 
              onClick={handleGitHubRedirect}
              className="w-full sm:w-auto border-2 border-green-500 text-green-400 hover:bg-green-500/10 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-bold transition-all duration-300 flex items-center justify-center gap-3"
            >
              <FaGitAlt /> View Our GitHub
            </button>
          </div>

          {/* Mobile Optimised Tag */}
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-12">
            <FaMobileAlt />
            <span>Fully optimised for mobile & desktop</span>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-green-400 px-4">
            Everything You Need. Nothing You Don't.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Single Button Deployment */}
            <div className="feature-card bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-purple-500 transition-all duration-300">
              <div className="text-green-400 text-3xl sm:text-4xl mb-4">
                <FaBolt />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">One-Click Deployment</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Deploy React, Vue, Node.js, and more with a single click. No complex setups.
              </p>
            </div>

            {/* Git Push to Deploy */}
            <div className="feature-card bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-green-500 transition-all duration-300">
              <div className="text-purple-400 text-3xl sm:text-4xl mb-4">
                <FaGitAlt />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Git Push & Deploy</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Push to GitHub/GitLab and auto-deploy. Perfect for CI/CD workflows.
              </p>
            </div>

            {/* African Infrastructure */}
            <div className="feature-card bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-purple-500 transition-all duration-300">
              <div className="text-green-400 text-3xl sm:text-4xl mb-4">
                <FaGlobeAfrica />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">African Infrastructure</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Servers in South Africa & Kenya for lower latency across the continent.
              </p>
            </div>

            {/* PaaS */}
            <div className="feature-card bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-green-500 transition-all duration-300">
              <div className="text-purple-400 text-3xl sm:text-4xl mb-4">
                <FaCloud />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Platform as a Service</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Complete platform to build, deploy, and scale without managing servers.
              </p>
            </div>

            {/* BaaS */}
            <div className="feature-card bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-purple-500 transition-all duration-300">
              <div className="text-green-400 text-3xl sm:text-4xl mb-4">
                <FaServer />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Backend as a Service</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Authentication, databases, storage, and APIs ready to use.
              </p>
            </div>

            {/* WordPress Coming Soon */}
            <div className="feature-card bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-green-500 transition-all duration-300">
              <div className="text-purple-400 text-3xl sm:text-4xl mb-4">
                <FaWordpress />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">WordPress Hosting</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                <span className="text-yellow-400 font-bold">COMING SOON</span> - Optimised WordPress for African audiences.
              </p>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 mb-16 text-center mx-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Because </span>
            <span className="bg-gradient-to-r from-purple-500 to-green-400 bg-clip-text text-transparent">CloudSkunk</span>
            <span className="text-white"> is the Umbrella</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            <span className="text-green-400 font-bold">CloudSkunk Hosting</span> is part of our ecosystem to simplify 
            technology for African businesses. We handle the infrastructure so you can focus on building amazing things.
          </p>
        </section>

        {/* Email Notifications */}
        <section className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 px-4">
          <h3 className="text-xl sm:text-2xl font-bold mb-6">Get Early Access & Launch Discount</h3>
          <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address" 
              className="flex-grow bg-gray-900 border-2 border-gray-800 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-white focus:border-green-500 focus:outline-none text-sm sm:text-base"
              required
            />
            <button 
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition duration-300 flex items-center justify-center gap-2"
            >
              <FaEnvelope /> Notify Me
            </button>
          </form>
          <p className="text-gray-400 text-xs sm:text-sm mt-4">
            We'll email you with early access and special African launch pricing. No spam.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Email will be sent to: feedback@cloudskunk.co.za
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-green-500/30 py-6 sm:py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-4">
            <div className="text-xl sm:text-2xl font-bold inline-block">
              <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">Cloud</span>
              <span className="text-white">Skunk</span>
              <span className="text-green-400 text-sm font-normal ml-2">Hosting</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm sm:text-base">
            Copyright © 2026 CloudSkunk Hosting. 
            <span className="text-green-400 mx-2">Powered by CloudSkunk</span>
            | A Saragee Group company
          </p>
          <p className="text-gray-600 text-xs sm:text-sm mt-2">
            Building the future of African cloud infrastructure. No stinky hosting.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;