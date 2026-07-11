import React, { useState } from 'react';
import { TIMETABLE } from '../data';
import { Clock, Users, Video, Link as LinkIcon, FileText, CheckCircle2, ChevronDown, Calendar as CalendarIcon, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

export function Timetable() {
  const [expandedId, setExpandedId] = useState<string | null>('t1');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-8">
        <h1 className="text-4xl font-serif font-bold tracking-tight text-slate-900 dark:text-white">Schedule</h1>
      </div>

      <div className="max-w-4xl space-y-4">
        {TIMETABLE.map((cls, idx) => {
          const isExpanded = expandedId === cls.id;
          const isToday = idx === 0; // Just mock the first one as "Today"

          return (
            <div 
              key={cls.id} 
              className={cn(
                "bg-white dark:bg-slate-800 rounded-2xl shadow-sm border transition-all overflow-hidden",
                isToday ? "border-indigo-200 dark:border-indigo-500/50 ring-2 ring-indigo-50 dark:ring-indigo-500/20" : "border-slate-100 dark:border-slate-700"
              )}
            >
              <div 
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors"
                onClick={() => setExpandedId(isExpanded ? null : cls.id)}
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className={cn(
                    "w-16 h-16 rounded-xl flex flex-col items-center justify-center shrink-0 shadow-inner",
                    isToday ? "bg-indigo-600 text-white" : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400"
                  )}>
                    <span className="text-xs font-bold uppercase tracking-wider">{cls.dayStr.split(' ')[0]}</span>
                    <span className="text-lg font-black leading-none mt-1">{isToday ? "TODAY" : cls.timeStr.split(':')[0]}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">{cls.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 mt-1">
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {cls.timeStr}</span>
                      <span className="flex items-center gap-1.5"><Video className="w-3.5 h-3.5" /> {cls.platform}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-4 border-t border-slate-100 dark:border-slate-700 pt-3 sm:border-0 sm:pt-0">
                  {isToday && <span className="px-3 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-400 text-xs font-bold rounded-full uppercase tracking-wider">Up Next</span>}
                  <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform", isExpanded && "rotate-180")} />
                </div>
              </div>

              {isExpanded && (
                <div className="p-5 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/30">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Main Info */}
                    <div className="md:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Agenda</h4>
                        <p className="text-slate-800 dark:text-slate-200 font-medium">{cls.agenda}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                          <span className="text-xs text-slate-500 block mb-1">Topic Today</span>
                          <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-400">{cls.topicToday}</span>
                        </div>
                        {cls.previousTopic && (
                          <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                            <span className="text-xs text-slate-500 block mb-1">Previous Topic</span>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{cls.previousTopic}</span>
                          </div>
                        )}
                      </div>

                      {cls.resources.length > 0 && (
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Linked Resources</h4>
                          <div className="flex flex-wrap gap-2">
                            {cls.resources.map((res, i) => (
                              <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-indigo-300 cursor-pointer transition-colors">
                                <FileText className="w-3.5 h-3.5 text-indigo-500" />
                                {res}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Actions & Controls */}
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <div className="flex items-center justify-between text-sm mb-4">
                          <span className="text-slate-500 flex items-center gap-1.5"><Users className="w-4 h-4" /> Class Size</span>
                          <span className="font-bold text-slate-900 dark:text-white">{cls.classSize} students</span>
                        </div>
                        <div className="flex items-center justify-between text-sm mb-4">
                          <span className="text-slate-500 flex items-center gap-1.5"><Clock className="w-4 h-4" /> Duration</span>
                          <span className="font-bold text-slate-900 dark:text-white">{cls.duration}</span>
                        </div>
                        
                        {cls.meetingLink && (
                          <a href={`https://${cls.meetingLink}`} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 py-2 mb-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
                            <Video className="w-4 h-4" /> Join Meeting
                          </a>
                        )}
                        
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            showToast("Added to calendar");
                          }}
                          className="w-full flex items-center justify-center gap-2 py-2 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        >
                          <CalendarIcon className="w-4 h-4" /> Add to calendar
                        </button>
                      </div>

                      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Attendance Controls</h4>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-slate-700 dark:text-slate-300">Mark all present</span>
                          <button className="text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 p-1.5 rounded transition-colors">
                            <CheckCircle2 className="w-5 h-5" />
                          </button>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-2 italic">* Individual marking available during active class.</p>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-4 right-4 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 animate-in slide-in-from-bottom-5">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <p className="text-sm font-medium">{toastMessage}</p>
        </div>
      )}
    </div>
  );
}
