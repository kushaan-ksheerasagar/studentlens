import React, { useState } from 'react';
import { AI_SCRIPTS } from '../data';
import { Sparkles, Activity, AlertCircle, RefreshCw, BarChart2, BookOpen, Send, User } from 'lucide-react';

export function AIAssistant() {
  const [messages, setMessages] = useState<{role: 'ai'|'user', text: string}[]>([
    {
      role: 'ai',
      text: "Hello Ananya! I'm your teaching copilot. I can analyze performance, predict risks, or generate lesson plans. How can I assist you today?"
    }
  ]);

  const quickActions = [
    { label: "Analyze Class 2", icon: BarChart2 },
    { label: "Predict At-Risk Students", icon: AlertCircle },
    { label: "Test Performance Analysis", icon: Activity },
    { label: "Revision Plan", icon: RefreshCw },
    { label: "Homework & Attendance Insights", icon: User },
    { label: "Teaching Recommendations", icon: BookOpen },
    { label: "Weekly Summary", icon: Sparkles }
  ];

  const handleAction = (label: string) => {
    // Add user message
    const newMsgs = [...messages, { role: 'user' as const, text: label }];
    setMessages(newMsgs);

    // Simulate AI thinking and reply
    setTimeout(() => {
      const reply = AI_SCRIPTS[label] || "I'm sorry, I don't have a scripted response for that in this demo.";
      setMessages([...newMsgs, { role: 'ai', text: reply }]);
    }, 600);
  };

  // Helper to format bold markdown
  const formatText = (text: string) => {
    return text.split('\n').map((line, i) => {
      const parts = line.split(/(\*\*.*?\*\*)/g).map((part, j) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={j} className="font-semibold text-indigo-900 dark:text-indigo-200">{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      return <p key={i} className={line.startsWith('*') ? 'ml-4 mb-2 flex gap-2' : 'mb-3'}>
        {line.startsWith('*') && <span className="text-indigo-500 mt-1.5 text-xs">●</span>}
        <span>{line.startsWith('*') ? parts.slice(1) : parts}</span>
      </p>;
    });
  };

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col md:flex-row gap-6">
      
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex items-center gap-4">
          <div className="w-12 h-12 border border-slate-900 dark:border-white flex items-center justify-center text-slate-900 dark:text-white">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-serif italic text-2xl tracking-tight text-slate-900 dark:text-white">AI Copilot</h2>
            <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Powered by STUDENTLENS Engine</p>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-slate-50/50 dark:bg-slate-900/20">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'ai' ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400' : 'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300'}`}>
                {msg.role === 'ai' ? <Sparkles className="w-4 h-4" /> : 'AR'}
              </div>
              <div className={`px-5 py-3.5 rounded-2xl max-w-[85%] text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-sm' 
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-tl-sm'
              }`}>
                {msg.role === 'ai' ? formatText(msg.text) : msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-wrap gap-2 mb-4">
            {quickActions.map((action, i) => (
              <button 
                key={i}
                onClick={() => handleAction(action.label)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800 rounded-full text-xs font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
              >
                <action.icon className="w-3.5 h-3.5" /> {action.label}
              </button>
            ))}
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Ask anything about your classes or students..." 
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                  handleAction(e.currentTarget.value);
                  e.currentTarget.value = '';
                }
              }}
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Auto Monitors */}
      <div className="w-full md:w-80 flex flex-col gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Activity className="w-4 h-4 text-teal-500" /> Active Monitors
          </h3>
          <div className="space-y-3">
            {[
              { text: "Monitoring Ram Verma - alert if accuracy < 60% next test", active: true },
              { text: "Reminder: Class 2 revision test Fri 5 PM", active: true },
              { text: "Track Class 1 attendance dip", active: false }
            ].map((alert, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-lg">
                <div className="pt-0.5">
                  <div className={`w-8 h-4 rounded-full p-0.5 cursor-pointer transition-colors ${alert.active ? 'bg-teal-500' : 'bg-slate-300 dark:bg-slate-600'}`}>
                    <div className={`w-3 h-3 bg-white rounded-full shadow-sm transition-transform ${alert.active ? 'translate-x-4' : ''}`}></div>
                  </div>
                </div>
                <p className={`text-xs leading-relaxed ${alert.active ? 'text-slate-700 dark:text-slate-300' : 'text-slate-400'}`}>
                  {alert.text}
                </p>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 border border-dashed border-slate-300 dark:border-slate-600 text-slate-500 rounded-lg text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            + Create New Monitor
          </button>
        </div>
      </div>

    </div>
  );
}
