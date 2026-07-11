import React, { useState } from 'react';
import { BookOpen, Sparkles, Target, Users, ArrowRight, PlayCircle } from 'lucide-react';

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
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-slate-900">StudentLens</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">How it works</a>
              <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Testimonials</a>
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

      {/* Footer CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/40 to-pink-900/40 opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Ready to transform your teaching?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Join thousands of tutors who are saving hours every week with StudentLens.</p>
          <button 
            onClick={() => setShowLogin(true)}
            className="bg-white text-slate-900 px-10 py-4 rounded-full text-lg font-bold hover:bg-indigo-50 transition-all shadow-xl hover:-translate-y-1"
          >
            Get Started Now
          </button>
        </div>
      </section>

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
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8" />
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
