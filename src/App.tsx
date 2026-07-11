import React, { useState } from 'react';
import { Layout, View } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Students } from './pages/Students';
import { StudentProfile } from './pages/StudentProfile';
import { Timetable } from './pages/Timetable';
import { Analytics } from './pages/Analytics';
import { Forum } from './pages/Forum';
import { AIAssistant } from './pages/AIAssistant';
import { Student } from './types';
import { BookOpen } from 'lucide-react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState<View>('Dashboard');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const navigate = (view: View, student?: Student) => {
    setCurrentView(view);
    if (student) setSelectedStudent(student);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
        <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="p-12 border-b border-slate-200 dark:border-slate-700 text-center bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-50 block mb-4">Vol. 01 / Issue 04</span>
            <h1 className="text-5xl font-serif italic font-light tracking-tight mb-4">StudentLens</h1>
            <p className="text-sm font-light italic opacity-70 max-w-xs mx-auto">Extracting structural parameters from the provided document. The current prompt defines the visual boundaries and interaction models.</p>
          </div>
          
          <form onSubmit={handleLogin} className="p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Username</label>
              <input 
                type="text" 
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white"
                placeholder="Enter username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white"
                placeholder="Enter password"
              />
            </div>
            
            {error && <p className="text-red-500 text-sm font-medium text-center">{error}</p>}
            
            <button 
              type="submit"
              className="w-full py-4 border border-slate-900 dark:border-white bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] uppercase font-bold tracking-widest hover:bg-white hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-white transition-colors"
            >
              Sign in
            </button>
            <p className="text-center text-xs text-slate-500 mt-4">Hint: Use admin / admin</p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <Layout currentView={currentView} navigate={navigate} onLogout={() => setIsLoggedIn(false)}>
      {currentView === 'Dashboard' && <Dashboard navigate={navigate} />}
      {currentView === 'Timetable' && <Timetable />}
      {currentView === 'Students' && <Students navigate={navigate} />}
      {currentView === 'StudentProfile' && selectedStudent && <StudentProfile student={selectedStudent} navigate={navigate} />}
      {currentView === 'Analytics' && <Analytics />}
      {currentView === 'Forum' && <Forum />}
      {currentView === 'AIAssistant' && <AIAssistant />}
    </Layout>
  );
}
