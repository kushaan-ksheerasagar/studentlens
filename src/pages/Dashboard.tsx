import React, { useState } from 'react';
import { Users, Calendar as CalendarIcon, FileCheck, Award, TrendingUp, AlertTriangle, ChevronRight, FileText } from 'lucide-react';
import { TUTOR, STUDENTS, HOTLIST, AI_SCRIPTS } from '../data';
import { Student } from '../types';
import { View } from '../components/Layout';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '../lib/utils';

interface DashboardProps {
  navigate: (view: View, student?: Student) => void;
}

export function Dashboard({ navigate }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'roster' | 'progress'>('roster');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredStudents = STUDENTS.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.classGroup.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const progressData = [
    { name: 'Week 1', progress: 72 },
    { name: 'Week 2', progress: 74 },
    { name: 'Week 3', progress: 77 },
    { name: 'Week 4', progress: 81 },
  ];

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-indigo-900 dark:text-indigo-100 mb-2">
            Welcome back, {TUTOR.name.split(' ')[0]} 👋
          </h1>
          <p className="text-slate-500 font-medium">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {[
          { icon: Users, label: 'Total Students', value: '12', color: 'text-indigo-600', bg: 'bg-indigo-50 dark:bg-indigo-900/20' },
          { icon: CalendarIcon, label: 'Classes Today', value: '3', color: 'text-teal-600', bg: 'bg-teal-50 dark:bg-teal-900/20' },
          { icon: FileCheck, label: 'Pending Reviews', value: '5', color: 'text-pink-600', bg: 'bg-pink-50 dark:bg-pink-900/20' },
          { icon: FileText, label: 'Upcoming Exams', value: '2', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
          { icon: Award, label: 'Attendance Rate', value: '88%', color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
          { icon: AlertTriangle, label: 'At Risk', value: '3', color: 'text-rose-600', bg: 'bg-rose-50 dark:bg-rose-900/20' },
        ].map((stat, i) => (
          <div key={i} className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-between h-32 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-slate-500">{stat.label}</span>
              <div className={cn("p-2 rounded-xl", stat.bg, stat.color)}>
                <stat.icon className="w-4 h-4" />
              </div>
            </div>
            <div className="font-serif text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-2">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="xl:col-span-2 space-y-6">
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4 border-b sm:border-none border-slate-100 dark:border-slate-700">
                <button 
                  onClick={() => setActiveTab('roster')}
                  className={cn("pb-3 sm:pb-0 font-bold text-sm border-b-2 transition-colors", activeTab === 'roster' ? "border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400" : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300")}
                >
                  Student Roster
                </button>
                <button 
                  onClick={() => setActiveTab('progress')}
                  className={cn("pb-3 sm:pb-0 font-bold text-sm border-b-2 transition-colors", activeTab === 'progress' ? "border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400" : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300")}
                >
                  Class Progress
                </button>
              </div>
              
              {activeTab === 'roster' && (
                <input
                  type="text"
                  placeholder="Filter students..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                />
              )}
            </div>

            {activeTab === 'roster' ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 bg-slate-50/50 dark:bg-slate-900/50 uppercase border-b border-slate-100 dark:border-slate-700">
                    <tr>
                      <th className="px-5 py-4 font-bold">Name</th>
                      <th className="px-5 py-4 font-bold">Class / Time</th>
                      <th className="px-5 py-4 font-bold text-center">Progress</th>
                      <th className="px-5 py-4 font-bold text-center">Attendance</th>
                      <th className="px-5 py-4 font-bold">Status</th>
                      <th className="px-5 py-4 font-bold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map((student) => (
                      <tr key={student.id} className="border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors group cursor-pointer" onClick={() => navigate('StudentProfile', student)}>
                        <td className="px-5 py-4 font-bold text-slate-900 dark:text-white">
                          <div className="flex flex-col">
                            <span>{student.name}</span>
                            <span className="text-xs font-normal text-slate-500">{student.location}</span>
                          </div>
                        </td>
                        <td className="px-5 py-4 text-slate-500">
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-700 dark:text-slate-300">{student.classGroup}</span>
                            <span className="text-xs">{student.timing} ({student.portal})</span>
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-2 justify-center">
                            <span className="w-8 text-right font-bold text-slate-700 dark:text-slate-300">{student.progress}%</span>
                            <div className="w-20 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                              <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${student.progress}%` }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4 text-center text-slate-700 dark:text-slate-300 font-bold">
                          {student.attendance}%
                        </td>
                        <td className="px-5 py-4">
                          <span className={cn(
                            "px-3 py-1 text-xs font-bold rounded-full",
                            student.risk === 'On Track' && "bg-emerald-50 text-emerald-600 border border-emerald-100",
                            student.risk === 'Watch' && "bg-amber-50 text-amber-600 border border-amber-100",
                            student.risk === 'At Risk' && "bg-rose-50 text-rose-600 border border-rose-100"
                          )}>
                            {student.risk}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-right">
                          <ChevronRight className="w-5 h-5 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-6">
                <h3 className="text-sm font-medium text-slate-500 mb-6">Average Class Progress (Last 4 Weeks)</h3>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={progressData}>
                      <defs>
                        <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4338CA" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#4338CA" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} domain={[0, 100]} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        itemStyle={{ color: '#4338CA', fontWeight: 600 }}
                      />
                      <Area type="monotone" dataKey="progress" stroke="#4338CA" strokeWidth={3} fillOpacity={1} fill="url(#colorProgress)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar panels */}
        <div className="space-y-6">
          {/* AI Summary Card */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-900 dark:text-indigo-100 p-6 rounded-2xl h-full flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs font-bold text-indigo-500 uppercase">Weekly Insights</span>
              <span className="text-xs text-indigo-400">12.04.24</span>
            </div>
            <div className="font-sans text-sm space-y-4 flex-1">
              <div className="bg-white/50 dark:bg-slate-900/50 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800">
                <span className="block font-bold mb-1">Status: Excellent</span>
                Avg class progress 81% (+4%), attendance 88%, 5 HW pending review.
              </div>
              <div className="bg-white/50 dark:bg-slate-900/50 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800">
                <span className="block font-bold mb-1">Recommendation</span>
                Focus next week: Integration reteach for Class 2.
              </div>
            </div>
            <button onClick={() => navigate('AIAssistant')} className="w-full mt-6 py-3 bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-md hover:bg-indigo-700 transition-all hover:shadow-lg">
              Open Assistant
            </button>
          </div>

          {/* Hotlist */}
          <div className="bg-white dark:bg-slate-800 shadow-sm rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
            <div className="border-b border-slate-100 dark:border-slate-700 pb-4 mb-4">
              <span className="text-sm font-bold block">Active Hotlist</span>
            </div>
            <div className="space-y-4">
              {HOTLIST.map((item, i) => (
                <div key={i} className="flex gap-3 items-start bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{item.student}</p>
                    <p className="text-sm text-slate-500 mt-1">{item.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
