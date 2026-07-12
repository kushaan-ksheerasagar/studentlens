import React, { useState } from 'react';
import { Sparkles, Target, Users, ArrowRight, PlayCircle, CheckCircle2 } from 'lucide-react';

interface LandingProps {
  onLogin: () => void;
}

export function Landing({ onLogin }: LandingProps) {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      onLogin();
    } else {
      setError('Invalid credentials. Use admin / admin');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-200 selection:text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/logo.jpeg" alt="StudentLens Logo" className="w-12 h-12 object-contain" />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Home</a>
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Features</a>
              <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowLogin(true)}
                className="hidden md:block text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors"
              >
                Log in
              </button>
              <button 
                onClick={() => setShowLogin(true)}
                className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-200/50 rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-pink-200/50 rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-200/50 rounded-full blur-3xl -z-10 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Now with AI Assistant v2.0</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-slate-900 mb-8 max-w-4xl mx-auto leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            The sweetest way to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">manage</span> your students.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            StudentLens brings all your tutoring data into one beautiful, calm, and organized space. Say goodbye to spreadsheets and hello to clarity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button 
              onClick={() => setShowLogin(true)}
              className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Start for free <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-base font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5 text-indigo-500" /> Watch Demo
            </button>
          </div>
          
          <div className="mt-20 relative max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 z-10 h-full w-full pointer-events-none" style={{ top: '60%' }}></div>
            <div className="bg-white p-2 rounded-3xl shadow-2xl border border-slate-200/50">
              <img 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=2000" 
                alt="Dashboard Preview" 
                className="w-full rounded-2xl border border-slate-100 object-cover h-[400px] md:h-[600px] opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Everything you need, beautifully designed.</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">We focused on making the most complex tasks feel simple, intuitive, and delightful.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Student Profiles</h3>
              <p className="text-slate-600 leading-relaxed">Keep track of every student's progress, attendance, and parent communication in one unified view.</p>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 text-pink-600">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Performance Analytics</h3>
              <p className="text-slate-600 leading-relaxed">Visualize grades and identify areas for improvement with our gorgeous, interactive charts.</p>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-emerald-600">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Copilot</h3>
              <p className="text-slate-600 leading-relaxed">Let our AI generate progress reports, suggest learning plans, and analyze class performance instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50 text-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Simple, transparent pricing.</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Start for free, then choose a plan that fits your needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Free Plan */}
            <div className="bg-slate-100 rounded-3xl p-8 border border-slate-200 flex flex-col hover:border-amber-500 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-2">First 7 Days</h3>
              <p className="text-slate-500 mb-6">Perfect for trying out</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">FREE</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1 text-slate-600">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Full feature access</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Unlimited students</li>
              </ul>
              <button onClick={() => setShowLogin(true)} className="w-full py-3 bg-amber-500 text-slate-50 rounded-full font-bold hover:bg-amber-600 transition-colors">Get Started</button>
            </div>
            
            {/* 1 Month */}
            <div className="bg-slate-100 rounded-3xl p-8 border border-slate-200 flex flex-col hover:border-amber-500 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-2">1 Month</h3>
              <p className="text-slate-500 mb-6">Billed monthly</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">₹1,000</span>
                <span className="text-slate-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1 text-slate-600">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Full feature access</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-500" /> AI Copilot included</li>
              </ul>
              <button onClick={() => setShowLogin(true)} className="w-full py-3 bg-slate-200 text-slate-900 rounded-full font-bold hover:bg-slate-300 transition-colors">Subscribe</button>
            </div>

            {/* 3 Months */}
            <div className="bg-slate-100 rounded-3xl p-8 border border-amber-500 flex flex-col relative transform md:-translate-y-4 shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-50 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap">20% Discount</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">3 Months</h3>
              <p className="text-slate-500 mb-6">Billed quarterly</p>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg text-slate-600 line-through">₹3,000</span>
                </div>
                <span className="text-4xl font-bold text-amber-500">₹2,400</span>
                <span className="text-slate-500">/total</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1 text-slate-600">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Full feature access</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-500" /> AI Copilot included</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Priority support</li>
              </ul>
              <button onClick={() => setShowLogin(true)} className="w-full py-3 bg-amber-500 text-slate-50 rounded-full font-bold hover:bg-amber-600 transition-colors">Subscribe</button>
            </div>

            {/* 6 Months */}
            <div className="bg-slate-100 rounded-3xl p-8 border border-slate-200 flex flex-col hover:border-amber-500 transition-all relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-50 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap">30% Discount</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">6 Months</h3>
              <p className="text-slate-500 mb-6">Billed semi-annually</p>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg text-slate-600 line-through">₹6,000</span>
                </div>
                <span className="text-4xl font-bold text-slate-900">₹4,200</span>
                <span className="text-slate-500">/total</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1 text-slate-600">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Full feature access</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-500" /> AI Copilot included</li>
              </ul>
              <button onClick={() => setShowLogin(true)} className="w-full py-3 bg-slate-200 text-slate-900 rounded-full font-bold hover:bg-slate-300 transition-colors">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Tailbar */}
      <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.jpeg" alt="StudentLens Logo" className="w-10 h-10 object-contain rounded-lg bg-white p-1" />
              <span className="font-serif text-2xl font-bold tracking-tight text-white">StudentLens</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">The complete toolkit for modern tutors to manage students, track progress, and grow their teaching business.</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Connect with us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="text-sm">hello@studentlens.com</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-sm">123 Education Lane, EdTech City</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} StudentLens. All rights reserved.</p>
        </div>
      </footer>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative animate-scale-in">
            <button 
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
            >
              ×
            </button>
            
            <div className="p-10 border-b border-slate-100 bg-slate-50 text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <img src="/logo.jpeg" alt="StudentLens Logo" className="w-16 h-16 object-contain" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Welcome back</h2>
              <p className="text-sm text-slate-500">Enter your details to access your dashboard.</p>
            </div>
            
            <form onSubmit={handleLogin} className="p-10 space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Username</label>
                <input 
                  type="text" 
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all shadow-sm"
                  placeholder="admin"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all shadow-sm"
                  placeholder="••••••••"
                />
              </div>
              
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-medium text-center border border-red-100">
                  {error}
                </div>
              )}
              
              <button 
                type="submit"
                className="w-full py-4 bg-indigo-600 text-white rounded-xl text-base font-bold shadow-md hover:bg-indigo-700 transition-all hover:shadow-lg mt-4"
              >
                Sign in to Dashboard
              </button>
              <p className="text-center text-xs font-medium text-slate-400 mt-4">Hint: Use admin / admin</p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
