import React, { useState } from 'react';
import { FORUM_POSTS } from '../data';
import { Search, Sparkles, MessageSquare, ThumbsUp, Paperclip, FileText, Send, User, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

export function Forum() {
  const [activeTab, setActiveTab] = useState<'feed' | 'resources' | 'chat'>('feed');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSummary, setShowSummary] = useState<string | null>(null);
  
  const filteredPosts = FORUM_POSTS.filter(p => 
    p.body.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <h1 className="text-4xl font-serif font-bold tracking-tight text-slate-900 dark:text-white">Forum</h1>
        
        <div className="relative w-full sm:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-10 py-3 border border-slate-100 dark:border-slate-700 rounded-full leading-5 bg-white dark:bg-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-colors shadow-sm"
            placeholder="Semantic search across posts & resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <Sparkles className="h-4 w-4 text-indigo-500 animate-pulse" />
            </div>
          )}
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex-1 flex flex-col overflow-hidden">
        <div className="flex border-b border-slate-100 dark:border-slate-700 px-4 pt-2">
          {['feed', 'resources', 'chat'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={cn(
                "px-4 py-3 text-sm font-bold whitespace-nowrap transition-colors border-b-2",
                activeTab === tab 
                  ? "border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400" 
                  : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              )}
            >
              {tab === 'feed' ? 'Discussion Feed' : tab === 'resources' ? 'Resource Repository' : 'Private Chats'}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50/50 dark:bg-slate-900/30">
          
          {activeTab === 'feed' && (
            <div className="max-w-3xl mx-auto space-y-6">
              {/* Compose Box */}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold shrink-0">
                    AR
                  </div>
                  <div className="flex-1">
                    <textarea 
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                      rows={2}
                      placeholder="Start a discussion, share a resource, ask a question..."
                    ></textarea>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                          <Paperclip className="w-3.5 h-3.5" /> Upload doc
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                          # Add Tags
                        </button>
                      </div>
                      <button className="px-4 py-1.5 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors">
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feed */}
              {filteredPosts.map(post => (
                <div key={post.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold shrink-0">
                      {post.author.split(' ').map(n=>n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{post.author}</h4>
                      <div className="flex gap-1.5 mt-0.5">
                        {post.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] font-medium px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed mb-4">{post.body}</p>
                  
                  {post.attachment && (
                    <div className="inline-flex items-center gap-2 p-3 pr-4 mb-4 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-lg">
                      <div className="p-2 bg-white dark:bg-slate-800 rounded-md shadow-sm">
                        <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <span className="text-sm font-medium text-indigo-900 dark:text-indigo-200">{post.attachment}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1.5 text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium">
                        <ThumbsUp className="w-4 h-4" /> {post.helpfulCount} Helpful
                      </button>
                      <button className="flex items-center gap-1.5 text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium">
                        <MessageSquare className="w-4 h-4" /> {post.commentCount} Comments
                      </button>
                    </div>
                    {post.commentCount > 5 && (
                      <button 
                        onClick={() => setShowSummary(showSummary === post.id ? null : post.id)}
                        className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline"
                      >
                        <Sparkles className="w-3.5 h-3.5" /> AI Summarize
                      </button>
                    )}
                  </div>

                  {showSummary === post.id && (
                    <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg border border-indigo-100 dark:border-indigo-800/50">
                      <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-semibold text-sm mb-2">
                        <Sparkles className="w-4 h-4" /> AI Thread Summary
                      </div>
                      <p className="text-sm text-indigo-900/80 dark:text-indigo-200 leading-relaxed">
                        General consensus favors starting with visual graphing of simple equations before introducing algebraic manipulation. 3 teachers shared success using the Desmos online tool as a bridge.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="max-w-4xl mx-auto space-y-4">
              {[
                { name: 'Integration Techniques.pdf', ver: 'v3', date: '2 days ago', uploader: 'Ananya Rao' },
                { name: 'Trig Cheatsheet.pdf', ver: 'v2', date: 'Last week', uploader: 'Ananya Rao' },
                { name: 'Physics Numericals Set 3.pptx', ver: 'v1', date: '1 month ago', uploader: 'Vikram Menon' }
              ].map((file, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-sm transition-shadow cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                        {file.name}
                        <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-[10px] rounded-full text-slate-500 font-medium">{file.ver}</span>
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">Uploaded by {file.uploader} • {file.date}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 transition-colors" />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'chat' && (
            <div className="max-w-4xl mx-auto h-full flex bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="w-1/3 border-r border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                <div className="p-4 border-b border-slate-200 dark:border-slate-700 font-semibold text-sm">Direct Messages</div>
                <div className="p-4 bg-white dark:bg-slate-800 border-l-2 border-indigo-500 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">VM</div>
                    <div>
                      <p className="font-semibold text-sm text-slate-900 dark:text-white">Vikram Menon</p>
                      <p className="text-xs text-slate-500 truncate">Thanks, that free-body diagra...</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">VM</div>
                  <span className="font-semibold text-sm">Vikram Menon</span>
                </div>
                <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-slate-50/50 dark:bg-slate-900/30">
                  <div className="flex justify-end">
                    <div className="bg-indigo-600 text-white rounded-2xl rounded-tr-sm px-4 py-2 text-sm max-w-[80%]">
                      Hey Vikram, did you get a chance to look at the new worksheet?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-2xl rounded-tl-sm px-4 py-2 text-sm max-w-[80%] shadow-sm">
                      Yes! Used it with Grade 9 today.
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-2xl rounded-tl-sm px-4 py-2 text-sm max-w-[80%] shadow-sm">
                      Thanks, that free-body diagram deck is great!
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Type a message..." 
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full pl-4 pr-12 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
