import { Student, TimetableClass, ForumPost } from './types';

export const TUTOR = {
  name: "Ananya Rao",
  studio: "Rao's Learning Studio, Bengaluru, India",
  subjects: "Mathematics & Science",
  role: "Tutor / Admin",
  lastLogin: "yesterday, 8:42 PM"
};

export const STUDENTS: Student[] = [
  { id: '1', name: 'Shil Mehta', timezone: 'IST', portal: 'Zoom', timing: 'Mon/Wed/Fri 5:00 PM', agenda: 'Integration revision', location: 'Bengaluru', classGroup: 'Class 2', progress: 94, attendance: 96, lastHomework: 'Submitted', risk: 'On Track' },
  { id: '2', name: 'Anil Kumar', timezone: 'IST', portal: 'Google Meet', timing: 'Mon/Wed/Fri 5:00 PM', agenda: 'Problem-solving drills', location: 'Bengaluru', classGroup: 'Class 2', progress: 88, attendance: 92, lastHomework: 'Submitted', risk: 'On Track' },
  { id: '3', name: 'Arjun Nair', timezone: 'IST', portal: 'Zoom', timing: 'Mon/Wed/Fri 5:00 PM', agenda: 'Chapter review', location: 'Kochi', classGroup: 'Class 2', progress: 85, attendance: 90, lastHomework: 'Submitted', risk: 'On Track' },
  { id: '4', name: 'Ram Verma', timezone: 'IST', portal: 'Zoom', timing: 'Mon/Wed/Fri 5:00 PM', agenda: 'Trigonometry re-teach', location: 'Bengaluru', classGroup: 'Class 2', progress: 54, attendance: 71, lastHomework: 'Late', risk: 'At Risk' },
  { id: '5', name: 'Shyam Iyer', timezone: 'IST', portal: 'Google Meet', timing: 'Mon/Wed/Fri 5:00 PM', agenda: 'Integration basics', location: 'Chennai', classGroup: 'Class 2', progress: 58, attendance: 68, lastHomework: 'Missing', risk: 'At Risk' },
  { id: '6', name: 'Priya Sharma', timezone: 'IST', portal: 'Zoom', timing: 'Tue/Thu 6:30 PM', agenda: 'Algebra practice', location: 'Bengaluru', classGroup: 'Class 1', progress: 79, attendance: 85, lastHomework: 'Submitted', risk: 'Watch' },
  { id: '7', name: 'Neha Gupta', timezone: 'IST', portal: 'Google Meet', timing: 'Tue/Thu 6:30 PM', agenda: 'Geometry proofs', location: 'Pune', classGroup: 'Class 1', progress: 82, attendance: 88, lastHomework: 'Submitted', risk: 'On Track' },
  { id: '8', name: 'Karan Singh', timezone: 'IST', portal: 'Zoom', timing: 'Tue/Thu 6:30 PM', agenda: 'Physics numericals', location: 'Delhi', classGroup: 'Class 1', progress: 63, attendance: 74, lastHomework: 'Late', risk: 'Watch' },
  { id: '9', name: 'Aisha Khan', timezone: 'IST', portal: 'Zoom', timing: 'Tue/Thu 6:30 PM', agenda: 'Chemistry equations', location: 'Hyderabad', classGroup: 'Class 1', progress: 90, attendance: 94, lastHomework: 'Submitted', risk: 'On Track' },
  { id: '10', name: 'Rohan Das', timezone: 'GMT+4', portal: 'Google Meet', timing: 'Sat 11:00 AM', agenda: 'Calculus intro', location: 'Dubai', classGroup: 'Class 2', progress: 76, attendance: 80, lastHomework: 'Submitted', risk: 'Watch' },
  { id: '11', name: 'Meera Joshi', timezone: 'IST', portal: 'Zoom', timing: 'Sat 11:00 AM', agenda: 'Statistics', location: 'Bengaluru', classGroup: 'Class 2', progress: 91, attendance: 95, lastHomework: 'Submitted', risk: 'On Track' },
  { id: '12', name: 'Dev Patel', timezone: 'GMT-5', portal: 'Google Meet', timing: 'Sun 9:00 AM', agenda: 'Trigonometry', location: 'New Jersey', classGroup: 'Class 1', progress: 48, attendance: 62, lastHomework: 'Missing', risk: 'At Risk' },
];

export const TIMETABLE: TimetableClass[] = [
  { id: 't1', dayStr: 'Mon / Wed / Fri', timeStr: '5:00-6:00 PM IST', title: 'CLASS 2 (Grade 10 Math)', agenda: 'Integration & Trigonometry revision', topicToday: 'Definite integrals', previousTopic: 'Integration by substitution', duration: '60 min', classSize: 7, platform: 'Zoom', meetingLink: 'zoom.us/j/98211234', resources: ['Integration Techniques.pdf', 'Trig Identities Cheatsheet.pdf', 'forum thread "Integration doubts"'] },
  { id: 't2', dayStr: 'Tue / Thu', timeStr: '6:30-7:30 PM IST', title: 'CLASS 1 (Grade 9 Science + Math)', agenda: 'Algebra & Physics numericals', topicToday: 'Linear equations', previousTopic: 'Polynomials', duration: '60 min', classSize: 4, platform: 'Google Meet', meetingLink: 'meet.google.com/abc-defg-hij', resources: ['Algebra Worksheet.pdf', 'Physics Numericals Set 3.pptx'] },
  { id: 't3', dayStr: 'Sat', timeStr: '11:00 AM-12:00 PM', title: 'Mixed batch (Rohan, Meera)', agenda: 'Calculus intro', topicToday: 'Calculus intro', previousTopic: '', duration: '60 min', classSize: 2, platform: 'Google Meet', meetingLink: '', resources: [] },
  { id: 't4', dayStr: 'Sun', timeStr: '9:00-10:00 AM', title: 'Dev Patel 1:1 (GMT-5)', agenda: 'Trigonometry re-teach', topicToday: 'Trigonometry re-teach', previousTopic: '', duration: '60 min', classSize: 1, platform: 'Google Meet', meetingLink: '', resources: [] },
];

export const FORUM_POSTS: ForumPost[] = [
  { id: 'p1', author: 'Ananya Rao', tags: ['Math', 'Grade 10', 'Integration'], body: 'Sharing my updated Integration Techniques worksheet (v3). Works well for substitution practice.', attachment: 'Integration Techniques.pdf', helpfulCount: 6, commentCount: 3 },
  { id: 'p2', author: 'Vikram Menon', tags: ['Science', 'Grade 9', 'Physics'], body: 'Any good visual for Newton\'s laws numericals? My batch struggles with free-body diagrams.', attachment: 'Physics Numericals Set 3.pptx', helpfulCount: 4, commentCount: 5 },
  { id: 'p3', author: 'Ananya Rao', tags: ['Math', 'Grade 10', 'Trigonometry', 'Exam'], body: 'Revision test paper for quadrant-based trig ratios. Feedback welcome.', attachment: 'Trig Revision Test.pdf', helpfulCount: 9, commentCount: 7 },
  { id: 'p4', author: 'Sana Kapoor', tags: ['Math', 'Grade 9', 'Algebra'], body: 'Discussion: best sequence to teach polynomials before linear equations?', helpfulCount: 2, commentCount: 8 }
];

export const HOTLIST = [
  { student: 'Ram Verma', reason: 'Accuracy dropped 78% -> 54% in Trigonometry & Integration; skips multi-step problems.' },
  { student: 'Dev Patel', reason: 'Missed last 2 homeworks; attendance 62%; Trigonometry scores falling.' },
  { student: 'Shyam Iyer', reason: 'Inconsistent homework; weak in Integration; slow on application questions.' }
];

export const NOTIFICATIONS = [
  { id: 'n1', text: 'Homework review pending for 5 submissions', time: 'today', read: false },
  { id: 'n2', text: 'Class 2 revision test scheduled Friday 5 PM', time: 'today', read: false },
  { id: 'n3', text: 'Ram Verma flagged At Risk by AI Assistant', time: 'yesterday', read: false },
  { id: 'n4', text: 'Monthly parent report ready for Class 1', time: 'yesterday', read: false }
];

export const AI_SCRIPTS: Record<string, string> = {
  "Analyze Class 2": `**Performance summary** (last 4 weeks of assessments, homework, participation, revision tests).
*   **Performing consistently:** Shil (>90%, strong concepts, active), Anil (on-time, improving speed), Arjun (good across chapters, occasional revision).
*   **Needing attention:** Ram (Trig & Integration; accuracy 78%->54%; skips multi-step problems), Shyam (weak Trig & Integration; inconsistent HW; slow on application questions).`,
  
  "Homework & Attendance Insights": `*   **Homework completion:** 68% submitted / 18% late / 14% missing. 
*   **Attendance dipping for:** Ram (71%), Dev (62%), Shyam (68%). 
*   **Correlation:** the 3 at-risk students all show declining attendance AND rising missed homework. 
*   **Recommended actions:** Recommend automated reminders + guardian note.`,
  
  "Test Performance Analysis": `*   **Commonly missed concepts across Class 2:** quadrant sign rules in trig (missed by 60%), substitution setup in integration (missed by 45%), interpreting definite-integral limits (missed by 40%). 
*   **Recommended actions:** Suggest a targeted 2-session reteach + formative quiz.`,
  
  "Revision Plan": `Generate a 1-week plan: 
*   Day1: Trig identities (guided)
*   Day2: substitution drills (20 problems)
*   Day3: definite integrals + limits
*   Day4: mixed quiz
*   Day5: word problems
*   Day6: review weak spots
*   Day7: assessment. 
*   **Expected improvement:** +12-15% accuracy for Ram if followed.`,
  
  "Predict At-Risk Students": `**At risk:** 
*   Ram (score drop + skipped multi-step + attendance 71%)
*   Dev (2 missed HW + 62% attendance + falling trig)
*   Shyam (inconsistent HW + weak integration). 
**Watch:** Priya, Karan, Rohan. 
*   **Explain WHY:** (See individual student profiles for deep-dive).`,
  
  "Teaching Recommendations": `*   Use visual quadrant diagrams for Ram
*   Scaffold multi-step problems
*   Pair Shyam with worked examples before independent practice
*   Give Dev a fixed 1:1 slot and guardian check-in.`,

  "Weekly Summary": `**This week:** avg class progress 81% (+4), attendance 88%, 5 HW pending review, 3 at-risk (Ram, Dev, Shyam). 
**Wins:** Class 1 up to 82%. 
**Focus next week:** Integration reteach for Class 2. Offer "Generate parent summary" and "Set monitoring alert" buttons.`
};
