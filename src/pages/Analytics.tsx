import React, { useState } from 'react';
import { Download, CheckCircle2 } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function Analytics() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const performanceData = [
    { name: 'Week 1', Class2: 68, Class1: 74 },
    { name: 'Week 2', Class2: 71, Class1: 76 },
    { name: 'Week 3', Class2: 74, Class1: 79 },
    { name: 'Week 4', Class2: 78, Class1: 82 },
  ];

  const attendanceData = [
    { name: 'Shil', value: 96 },
    { name: 'Meera', value: 95 },
    { name: 'Aisha', value: 94 },
    { name: 'Anil', value: 92 },
    { name: 'Arjun', value: 90 },
    { name: 'Neha', value: 88 },
    { name: 'Priya', value: 85 },
    { name: 'Rohan', value: 80 },
    { name: 'Karan', value: 74 },
    { name: 'Ram', value: 71 },
    { name: 'Shyam', value: 68 },
    { name: 'Dev', value: 62 },
  ];

  const hwData = [
    { name: 'Submitted', value: 68 },
    { name: 'Late', value: 18 },
    { name: 'Missing', value: 14 }
  ];
  const HW_COLORS = ['#4338CA', '#F59E0B', '#EF4444'];

  const difficultyData = [
    { name: 'Trigonometry', error: 34 },
    { name: 'Integration', error: 29 },
    { name: 'Calculus', error: 21 },
    { name: 'Algebra', error: 12 },
    { name: 'Statistics', error: 8 }
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-4xl font-serif font-bold tracking-tight text-slate-900 dark:text-white">Analytics Overview</h1>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => showToast("Report exported")}
            className="px-6 h-10 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-bold text-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            Export PDF
          </button>
          <button 
            onClick={() => showToast("Report exported")}
            className="px-8 h-10 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full text-sm font-bold hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Export Excel
          </button>
        </div>
      </div>

      {/* Institution Wide Report Card */}
      <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 rounded-3xl shadow-lg border border-indigo-800 relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 mb-8 pb-6 border-b border-white/10">
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-300 block mb-2">Institution-Wide Report Card</span>
          <h2 className="text-3xl font-serif font-bold text-white">Overall Review</h2>
        </div>
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-200/60 block mb-2">01 / TOTAL ENROLLED</span>
            <p className="text-4xl font-bold">12 <span className="text-sm font-normal text-indigo-200">students</span></p>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-200/60 block mb-2">02 / AVG ATTENDANCE</span>
            <p className="text-4xl font-bold">88%</p>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-200/60 block mb-2">03 / AVG PROGRESS</span>
            <p className="text-4xl font-bold">76%</p>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-pink-400 block mb-2">04 / AT RISK FLAGGED</span>
            <p className="text-4xl font-bold text-pink-400">3 <span className="text-sm font-normal text-pink-300">students</span></p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Trends */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-6">Performance Trends (4 weeks)</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <YAxis domain={[60, 100]} axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend iconType="circle" />
                <Line type="monotone" dataKey="Class2" name="Class 2 (Gr 10)" stroke="#4338CA" strokeWidth={3} dot={{r: 4, fill: '#4338CA'}} />
                <Line type="monotone" dataKey="Class1" name="Class 1 (Gr 9)" stroke="#0D9488" strokeWidth={3} dot={{r: 4, fill: '#0D9488'}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Homework Completion */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-6">Homework Completion Rate</h3>
          <div className="h-72 flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={hwData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {hwData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={HW_COLORS[index % HW_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-8">
              <span className="text-3xl font-bold text-slate-900 dark:text-white">68%</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Submitted</span>
            </div>
          </div>
        </div>

        {/* Student Attendance */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-slate-900 dark:text-white">Student Attendance Distribution</h3>
            <div className="text-xs font-medium text-slate-500">
              Avg: Class 2 = <span className="text-slate-900 dark:text-white">84%</span> | Class 1 = <span className="text-slate-900 dark:text-white">82%</span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <YAxis domain={[50, 100]} axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="value" name="Attendance %" fill="#4338CA" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Difficulty Analysis */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-6">Difficulty Analysis by Chapter (% Errors)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={difficultyData} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#334155" opacity={0.2} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fontSize: 11, fill: '#64748b'}} width={80} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none' }} />
                <Bar dataKey="error" fill="#0D9488" radius={[0, 4, 4, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Teacher Workload */}
        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
          <div className="border-b border-slate-200 dark:border-slate-700 pb-4 mb-6">
            <span className="text-sm font-bold block">Teacher Workload Dashboard</span>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="border-l-2 border-indigo-200 dark:border-indigo-800 pl-4">
              <span className="text-4xl font-serif font-bold text-slate-900 dark:text-white block">8</span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-1 block">Classes / Wk</span>
            </div>
            <div className="border-l-2 border-indigo-200 dark:border-indigo-800 pl-4">
              <span className="text-4xl font-serif font-bold text-slate-900 dark:text-white block">12</span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-1 block">Students</span>
            </div>
            <div className="border-l-2 border-pink-400 pl-4">
              <span className="text-4xl font-serif font-bold text-pink-500 block">5</span>
              <span className="text-xs font-bold uppercase tracking-widest text-pink-400 mt-1 block">HW to Review</span>
            </div>
            <div className="border-l-2 border-indigo-200 dark:border-indigo-800 pl-4">
              <span className="text-4xl font-serif font-bold text-slate-900 dark:text-white block">~14</span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-1 block">Hours / Wk</span>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Average prep time per class is currently running at <strong className="font-sans font-bold text-slate-900 dark:text-white">45 minutes</strong>.
            </p>
          </div>
        </div>
      </div>

      {toastMessage && (
        <div className="fixed bottom-4 right-4 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 animate-in slide-in-from-bottom-5">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <p className="text-sm font-medium">{toastMessage}</p>
        </div>
      )}
    </div>
  );
}
