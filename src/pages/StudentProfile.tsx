import React, { useState } from 'react';
import { View } from '../components/Layout';
import { Student } from '../types';
import { ArrowLeft, Download, User, Phone, BookOpen, Clock, FileText, AlertCircle, Calendar } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '../lib/utils';

interface StudentProfileProps {
  student: Student;
  navigate: (view: View) => void;
}

export function StudentProfile({ student, navigate }: StudentProfileProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'log'>('overview');
  const [showReport, setShowReport] = useState(false);

  // Generate some realistic dummy data based on student performance
  const isRam = student.name === 'Ram Verma';
  const isShil = student.name === 'Shil Mehta';
  
  const examHistory = isRam 
    ? [{ name: 'Test 1', score: 78 }, { name: 'Test 2', score: 66 }, { name: 'Test 3', score: 58 }, { name: 'Rev Test', score: 54 }]
    : isShil 
      ? [{ name: 'Test 1', score: 92 }, { name: 'Test 2', score: 95 }, { name: 'Test 3', score: 96 }, { name: 'Rev Test', score: 94 }]
      : [{ name: 'Test 1', score: 75 }, { name: 'Test 2', score: 78 }, { name: 'Test 3', score: 72 }, { name: 'Rev Test', score: 76 }];

  const hwData = isRam
    ? [{ name: 'Done', value: 6 }, { name: 'Late', value: 2 }, { name: 'Missing', value: 2 }]
    : isShil
      ? [{ name: 'Done', value: 10 }, { name: 'Late', value: 0 }, { name: 'Missing', value: 0 }]
      : [{ name: 'Done', value: 8 }, { name: 'Late', value: 1 }, { name: 'Missing', value: 1 }];

  const mistakeData = isRam
    ? [{ name: 'Trig Ratios', error: 32 }, { name: 'Identities', error: 28 }, { name: 'Integration', error: 22 }, { name: 'Limits', error: 12 }, { name: 'Area', error: 6 }]
    : isShil
      ? [{ name: 'Calc errors', error: 8 }, { name: 'Time', error: 2 }]
      : [{ name: 'Concept A', error: 15 }, { name: 'Concept B', error: 10 }];

  const COLORS = ['#10B981', '#F59E0B', '#EF4444'];

  const attendanceArr = isRam ? ['P','P','A','P','A','P','P','A'] : ['P','P','P','P','P','P','P','P'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-6 pb-6 border-b border-slate-900 dark:border-white mb-8">
        <button onClick={() => navigate('Students')} className="w-10 h-10 border border-slate-900 dark:border-white flex items-center justify-center hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <span className="text-[10px] uppercase tracking-widest font-bold opacity-50 block mb-1">Student Profile</span>
          <h1 className="text-5xl font-serif italic tracking-tight">{student.name}</h1>
          <p className="text-sm text-slate-500 mt-2 font-mono uppercase tracking-widest">{student.classGroup} • {student.location}</p>
        </div>
        <div className="ml-auto">
          <button 
            onClick={() => setShowReport(true)}
            className="flex items-center gap-2 px-6 py-3 border border-slate-900 dark:border-white text-[10px] uppercase tracking-widest font-bold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors"
          >
            <FileText className="w-4 h-4" />
            Parent Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Personal & Snapshot */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <User className="w-4 h-4 text-indigo-500" /> Personal Details
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                <span className="text-slate-500">Grade/Board</span>
                <span className="font-medium text-slate-900 dark:text-white">Grade 10 CBSE</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                <span className="text-slate-500">Joined</span>
                <span className="font-medium text-slate-900 dark:text-white">Jan 2025</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                <span className="text-slate-500">Guardian</span>
                <span className="font-medium text-slate-900 dark:text-white">{isRam ? 'Mr. S. Verma' : 'Guardian Name'}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-500"><Phone className="w-4 h-4 inline mr-1" /></span>
                <span className="font-medium text-slate-900 dark:text-white">+91-98XXXXXX21</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Academic Overview</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-500">Overall Progress</span>
                  <span className="font-bold text-slate-900 dark:text-white">{student.progress}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full">
                  <div className={cn("h-full rounded-full", student.progress < 60 ? "bg-red-500" : "bg-indigo-500")} style={{ width: `${student.progress}%` }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-500">Attendance</span>
                  <span className="font-bold text-slate-900 dark:text-white">{student.attendance}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full">
                  <div className={cn("h-full rounded-full", student.attendance < 75 ? "bg-amber-500" : "bg-emerald-500")} style={{ width: `${student.attendance}%` }}></div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Risk Status</span>
                  <span className={cn(
                    "px-3 py-1 text-xs font-bold uppercase rounded-md",
                    student.risk === 'On Track' && "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
                    student.risk === 'Watch' && "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
                    student.risk === 'At Risk' && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                  )}>
                    {student.risk}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-5 border border-amber-200 dark:border-amber-900/50">
            <h3 className="font-semibold text-amber-900 dark:text-amber-400 mb-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> Teacher Notes
            </h3>
            <p className="text-sm text-amber-800 dark:text-amber-200/80 leading-relaxed">
              {isRam 
                ? "Understands single-step problems but loses confidence on multi-step questions. Needs guided practice on identities. Responds well to visual explanations." 
                : isShil 
                  ? "Strong conceptual grasp; ready for advanced application problems." 
                  : "Good participation in class."}
            </p>
          </div>
        </div>

        {/* Right Column: Tabs & Data */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden h-full">
            <div className="flex border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
              {['overview', 'analytics', 'log'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={cn(
                    "px-6 py-4 text-sm font-semibold whitespace-nowrap transition-colors border-b-2",
                    activeTab === tab 
                      ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400" 
                      : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                  )}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Exam History & Marks</h4>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={examHistory}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                          <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                          <Tooltip contentStyle={{ borderRadius: '8px' }} />
                          <Line type="monotone" dataKey="score" stroke="#4338CA" strokeWidth={3} dot={{r: 4, fill: '#4338CA'}} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 flex items-center justify-between">
                      Recent Attendance
                      <span className="text-xs font-normal text-slate-500">Last 8 classes</span>
                    </h4>
                    <div className="flex gap-2">
                      {attendanceArr.map((status, i) => (
                        <div key={i} className={cn(
                          "flex-1 py-2 text-center rounded text-sm font-bold",
                          status === 'P' ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                        )}>
                          {status}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Homework Completion</h4>
                    <div className="h-48 relative">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={hwData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {hwData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                        <span className="text-2xl font-bold">{isRam ? '6/10' : '10/10'}</span>
                        <span className="text-xs text-slate-500">Completed</span>
                      </div>
                    </div>
                    <div className="flex justify-center gap-4 mt-4 text-xs">
                      <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Submitted</div>
                      <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-amber-500"></div> Late</div>
                      <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500"></div> Missing</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Mistake Analysis (% errors)</h4>
                    <div className="h-56">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={mistakeData} layout="vertical" margin={{ left: 20 }}>
                          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#334155" opacity={0.2} />
                          <XAxis type="number" hide />
                          <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#64748b'}} width={80} />
                          <Tooltip cursor={{fill: 'transparent'}} />
                          <Bar dataKey="error" fill="#0D9488" radius={[0, 4, 4, 0]} barSize={20} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'log' && (
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
                  {[
                    { date: '09 Apr', topic: 'Definite integrals', understanding: 'Low', hw: '10 problems', followUp: 'Re-teach limits interpretation.' },
                    { date: '02 Apr', topic: 'Trig identities', understanding: 'Medium', hw: 'Identities worksheet', followUp: 'Quiz next class.' },
                    { date: '26 Mar', topic: 'Height & distance word problems', understanding: 'Low', hw: '8 problems', followUp: 'One-on-one session.' },
                  ].map((log, i) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-slate-900 dark:text-white text-sm">{log.topic}</h4>
                          <span className="text-xs text-slate-500 font-medium px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-full">{log.date}</span>
                        </div>
                        <div className="space-y-1 text-xs">
                          <p><span className="text-slate-500">Understanding:</span> <span className={cn("font-medium", log.understanding === 'Low' ? "text-red-500" : "text-amber-500")}>{log.understanding}</span></p>
                          <p><span className="text-slate-500">HW assigned:</span> <span className="text-slate-700 dark:text-slate-300">{log.hw}</span></p>
                          <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-700">
                            <span className="text-slate-500 block mb-1">Follow-up:</span>
                            <span className="text-indigo-600 dark:text-indigo-400 font-medium">{log.followUp}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Parent Report Modal (Dummy) */}
      {showReport && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col border border-slate-200 dark:border-slate-700">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-indigo-50 dark:bg-indigo-900/20">
              <div>
                <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-100">Progress Report: {student.name}</h2>
                <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-1">Generated {new Date().toLocaleDateString()}</p>
              </div>
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center shadow-sm">
                <FileText className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-6 bg-slate-50/50 dark:bg-slate-900 flex-1">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <p className="text-xs text-slate-500 mb-1 font-medium">Avg Progress</p>
                  <p className="text-xl font-bold">{student.progress}%</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <p className="text-xs text-slate-500 mb-1 font-medium">Attendance</p>
                  <p className="text-xl font-bold">{student.attendance}%</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <p className="text-xs text-slate-500 mb-1 font-medium">Status</p>
                  <p className="text-lg font-bold text-red-500">{student.risk}</p>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">AI Synthesis Summary</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {student.name} has shown dedication but is currently struggling with foundational concepts in Trigonometry and Integration. Attendance has dropped slightly in recent weeks. A targeted revision plan has been generated to reinforce basic identities and substitution methods.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">Next Steps for Guardian</h3>
                <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Ensure completion of assigned homework on time.</li>
                  <li>Review the 1-week revision plan (attached separately).</li>
                  <li>Schedule a brief 10-minute sync with the tutor next week.</li>
                </ul>
              </div>
            </div>
            
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex justify-end gap-3">
              <button 
                onClick={() => setShowReport(false)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                Close
              </button>
              <button 
                onClick={() => {
                  alert('Report downloaded successfully!');
                  setShowReport(false);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg text-sm font-medium transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" /> Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
