import React, { useState } from 'react';
import { 
  Filter, BrainCircuit, ListOrdered, Search, ChevronDown, 
  AlertTriangle, AlertCircle, CheckCircle2, User, BookOpen, 
  MessageSquare, Calendar, Target, ArrowRight, MoreHorizontal,
  FileText, Sparkles
} from 'lucide-react';
import { cn } from '../lib/utils';
import { View } from '../components/Layout';
import { Student } from '../types';

interface HotlistProps {
  navigate: (view: View, student?: Student) => void;
}

export function Hotlist({ navigate }: HotlistProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Dummy data for hotlist
  const hotlistData = [
    {
      id: '1',
      name: 'Yug',
      subject: 'Mathematics',
      weaknesses: ['Subtraction', 'Place Value'],
      riskLevel: 'High',
      priorityScore: 92,
      lastFollowUp: '2 days ago',
      recommendedAction: 'Schedule a reteaching session',
      status: 'Pending',
    },
    {
      id: '2',
      name: 'Tharun',
      subject: 'English',
      weaknesses: ['Handwriting', 'Incomplete Homework'],
      riskLevel: 'Medium',
      priorityScore: 65,
      lastFollowUp: '5 days ago',
      recommendedAction: 'Assign guided practice',
      status: 'In Progress',
    },
    {
      id: '3',
      name: 'Nidhi',
      subject: 'Science',
      weaknesses: ['Fractions', 'Conceptual Gap'],
      riskLevel: 'High',
      priorityScore: 88,
      lastFollowUp: '1 day ago',
      recommendedAction: 'Send intervention worksheet',
      status: 'Pending',
    },
    {
      id: '4',
      name: 'Aisha',
      subject: 'Mathematics',
      weaknesses: ['Time Management'],
      riskLevel: 'Low',
      priorityScore: 35,
      lastFollowUp: '1 week ago',
      recommendedAction: 'Confidence-building exercises',
      status: 'Resolved',
    }
  ];

  const getRiskBadge = (level: string) => {
    switch (level) {
      case 'High':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800"><AlertTriangle className="w-3.5 h-3.5" /> High</span>;
      case 'Medium':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border border-orange-200 dark:border-orange-800"><AlertCircle className="w-3.5 h-3.5" /> Medium</span>;
      case 'Low':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800"><CheckCircle2 className="w-3.5 h-3.5" /> Low</span>;
      default:
        return null;
    }
  };

  const getPriorityColor = (score: number) => {
    if (score >= 80) return 'bg-red-500';
    if (score >= 60) return 'bg-orange-500';
    return 'bg-green-500';
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">Hotlist & Prioritization</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-3xl">
          Automatically identify students who require immediate attention using AI-powered academic risk analysis.
        </p>
      </div>

      {/* Workflow Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col h-full">
          <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
            <Filter className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">Filter Students</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 flex-1">
            Allow tutors to narrow students using multiple filters including Subject, Class, Grade, Batch, Time Zone, Attendance, Performance, and Urgency Level.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col h-full">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">AI Risk Analysis</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 flex-1">
            The AI continuously evaluates every student using Homework completion, Exam scores, Concept mastery, Learning trends, and Missed deadlines to generate a priority score.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col h-full">
          <div className="w-10 h-10 rounded-lg bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
            <ListOrdered className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">Generate Hotlist</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 flex-1">
            Automatically rank students according to academic priority. Students with recurring issues or declining performance appear at the top of the list.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Table Area */}
        <div className="flex-1 space-y-4">
          
          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search student name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <Filter className="w-4 h-4" /> Filters
              </button>
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <ListOrdered className="w-4 h-4" /> Sort: Highest Risk <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 font-medium border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="px-6 py-4">Student</th>
                    <th className="px-6 py-4">Weakness Tags</th>
                    <th className="px-6 py-4 text-center">Risk Level</th>
                    <th className="px-6 py-4">Priority Score</th>
                    <th className="px-6 py-4">Recommended Action</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                  {hotlistData.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase())).map((student) => (
                    <tr key={student.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                            {student.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 dark:text-white">{student.name}</div>
                            <div className="text-xs text-slate-500">{student.subject}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1.5">
                          {student.weaknesses.map((tag, idx) => (
                            <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        {getRiskBadge(student.riskLevel)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-slate-900 dark:text-white w-6">{student.priorityScore}</span>
                          <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden w-24">
                            <div 
                              className={cn("h-full rounded-full", getPriorityColor(student.priorityScore))}
                              style={{ width: `${student.priorityScore}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors rounded-lg text-xs font-medium border border-indigo-200 dark:border-indigo-800/50">
                          {student.recommendedAction}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            title="View Profile"
                            className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors"
                          >
                            <User className="w-4 h-4" />
                          </button>
                          <button 
                            title="Schedule Session"
                            className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg transition-colors"
                          >
                            <Calendar className="w-4 h-4" />
                          </button>
                          <button 
                            title="Message"
                            className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                          >
                            <MessageSquare className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  
                  {hotlistData.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-6 py-12 text-center">
                        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                          <Target className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">🎉 Excellent!</h3>
                        <p className="text-slate-500">No students currently require urgent intervention matching your search.</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* AI Insights Panel */}
        <div className="w-full lg:w-80 space-y-4">
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-xl p-5 text-white shadow-sm border border-indigo-800">
            <div className="flex items-center gap-2 mb-4 text-indigo-300">
              <Sparkles className="w-5 h-5" />
              <h3 className="font-bold">AI Insights</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/10">
                <div className="text-xs text-indigo-200 mb-1">Immediate Attention</div>
                <div className="font-bold text-lg">2 Students</div>
                <div className="text-xs text-indigo-200 mt-1 flex justify-between">
                  <span>Yug, Nidhi</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/10">
                <div className="text-xs text-indigo-200 mb-1">Most Common Weakness</div>
                <div className="font-bold">Fractions & Subtraction</div>
                <div className="text-xs text-indigo-200 mt-1">Affecting 3 students across classes</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/10">
                <div className="text-xs text-indigo-200 mb-1">Subject Requiring Revision</div>
                <div className="font-bold">Mathematics</div>
                <div className="text-xs text-indigo-200 mt-1">Overall performance drop of 4% this week</div>
              </div>
            </div>
          </div>
          
          {/* Quick Actions Panel */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all text-sm font-medium text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-slate-400" />
                  Generate Progress Reports
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all text-sm font-medium text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  Bulk Schedule Revision
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
