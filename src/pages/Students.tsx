import React from 'react';
import { STUDENTS } from '../data';
import { View } from '../components/Layout';
import { Student } from '../types';
import { cn } from '../lib/utils';
import { ChevronRight, Calendar, Video, MapPin } from 'lucide-react';

interface StudentsProps {
  navigate: (view: View, student?: Student) => void;
}

export function Students({ navigate }: StudentsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-900 dark:border-white mb-8">
        <h1 className="text-5xl font-serif italic tracking-tight">Student Roster</h1>
        <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">Total Enrolled: {STUDENTS.length}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {STUDENTS.map(student => (
          <div 
            key={student.id}
            onClick={() => navigate('StudentProfile', student)}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 cursor-pointer hover:border-slate-900 dark:hover:border-white transition-all group flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 flex items-center justify-center font-bold text-lg">
                  {student.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{student.name}</h3>
                  <p className="text-xs text-slate-500">{student.classGroup}</p>
                </div>
              </div>
              <span className={cn(
                "px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md",
                student.risk === 'On Track' && "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
                student.risk === 'Watch' && "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
                student.risk === 'At Risk' && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
              )}>
                {student.risk}
              </span>
            </div>

            <div className="space-y-2 mb-5">
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                <span className="truncate">{student.timing}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <Video className="w-3.5 h-3.5" />
                <span>{student.portal}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>{student.location}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-slate-500">Progress</span>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{student.progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className={cn("h-full rounded-full", student.progress < 60 ? "bg-red-500" : "bg-indigo-500")}
                  style={{ width: `${student.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
