import React, { useState } from 'react';
import { LayoutDashboard, Calendar, Users, BarChart2, MessageSquare, Sparkles, Bell, Search, Moon, Sun, LogOut, Menu, X, Flame } from 'lucide-react';
import { TUTOR, NOTIFICATIONS } from '../data';
import { cn } from '../lib/utils';
import { Logo } from './Logo';

export type View = 'Dashboard' | 'Timetable' | 'Students' | 'StudentProfile' | 'Analytics' | 'Forum' | 'AIAssistant' | 'Hotlist';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  navigate: (view: View) => void;
  onLogout: () => void;
}

export function Layout({ children, currentView, navigate, onLogout }: LayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { id: 'Dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'Timetable', icon: Calendar, label: 'Timetable' },
    { id: 'Students', icon: Users, label: 'Students' },
    { id: 'Hotlist', icon: Flame, label: 'Hotlist' },
    { id: 'Analytics', icon: BarChart2, label: 'Analytics' },
    { id: 'Forum', icon: MessageSquare, label: 'Forum' },
    { id: 'AIAssistant', icon: Sparkles, label: 'AI Assistant' },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const markRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Mobile sidebar overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 flex flex-col",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between h-20 px-6 border-b border-slate-100 dark:border-slate-700/50">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              navigate('Dashboard');
              setIsMobileMenuOpen(false);
            }}
          >
            <div className="w-10 h-10 rounded-2xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Logo className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-serif font-bold tracking-tight text-slate-900 dark:text-white">StudentLens</h1>
          </div>
          <button className="md:hidden text-slate-500" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { navigate(item.id as View); setIsMobileMenuOpen(false); }}
              className={cn(
                "group flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-200 mb-1",
                currentView === item.id || (currentView === 'StudentProfile' && item.id === 'Students')
                  ? "bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 font-medium"
                  : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5",
                currentView === item.id || (currentView === 'StudentProfile' && item.id === 'Students')
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
              )} />
              <span className="text-[15px] font-sans">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="h-16 flex items-center justify-between px-4 sm:px-6 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 z-10">
          <div className="flex items-center">
            <button className="md:hidden mr-4 text-slate-500" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative hidden sm:block w-64 md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search students, forum posts, classes..."
                className="w-full pl-9 pr-4 py-2 bg-slate-100 dark:bg-slate-900 border-transparent rounded-full text-sm focus:bg-white dark:focus:bg-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <button onClick={toggleDarkMode} className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button onClick={() => navigate('Forum')} className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full hidden sm:block">
              <MessageSquare className="w-5 h-5" />
            </button>

            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full relative"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-800"></span>
                )}
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="p-3 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-900/50">
                    <h3 className="font-semibold text-sm">Notifications</h3>
                    <button onClick={markAllRead} className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">Mark all read</button>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.map(n => (
                      <div 
                        key={n.id} 
                        onClick={() => markRead(n.id)}
                        className={cn("p-3 border-b border-slate-100 dark:border-slate-700 cursor-pointer text-sm", n.read ? "opacity-60" : "bg-indigo-50/50 dark:bg-indigo-900/20")}
                      >
                        <p className="text-slate-800 dark:text-slate-200">{n.text}</p>
                        <p className="text-xs text-slate-500 mt-1">{n.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>

            <div className="flex flex-col text-right hidden sm:flex">
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">Status</span>
              <span className="text-sm font-medium">{TUTOR.name}</span>
            </div>
            <div className="w-10 h-10 rounded-full border border-slate-900 dark:border-slate-100 flex items-center justify-center">
              <div className="w-2 h-2 bg-[#FF4D00] rounded-full"></div>
            </div>
            
            <button onClick={onLogout} className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full ml-1">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
