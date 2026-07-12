import React, { useState } from 'react';
import { Layout, View } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Students } from './pages/Students';
import { StudentProfile } from './pages/StudentProfile';
import { Timetable } from './pages/Timetable';
import { Analytics } from './pages/Analytics';
import { Forum } from './pages/Forum';
import { AIAssistant } from './pages/AIAssistant';
import { Hotlist } from './pages/Hotlist';
import { Landing } from './pages/Landing';
import { Student } from './types';
import { BookOpen } from 'lucide-react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState<View>('Dashboard');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const navigate = (view: View, student?: Student) => {
    setCurrentView(view);
    if (student) setSelectedStudent(student);
  };

  if (!isLoggedIn) {
    return <Landing onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <Layout currentView={currentView} navigate={navigate} onLogout={() => setIsLoggedIn(false)}>
      {currentView === 'Dashboard' && <Dashboard navigate={navigate} />}
      {currentView === 'Timetable' && <Timetable />}
      {currentView === 'Students' && <Students navigate={navigate} />}
      {currentView === 'StudentProfile' && selectedStudent && <StudentProfile student={selectedStudent} navigate={navigate} />}
      {currentView === 'Analytics' && <Analytics />}
      {currentView === 'Hotlist' && <Hotlist navigate={navigate} />}
      {currentView === 'Forum' && <Forum />}
      {currentView === 'AIAssistant' && <AIAssistant />}
    </Layout>
  );
}
