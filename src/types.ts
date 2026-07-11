export type RiskStatus = 'On Track' | 'Watch' | 'At Risk';

export interface Student {
  id: string;
  name: string;
  timezone: string;
  portal: string;
  timing: string;
  agenda: string;
  location: string;
  classGroup: string;
  progress: number;
  attendance: number;
  lastHomework: string;
  risk: RiskStatus;
}

export interface TimetableClass {
  id: string;
  dayStr: string;
  timeStr: string;
  title: string;
  agenda: string;
  topicToday: string;
  previousTopic: string;
  duration: string;
  classSize: number;
  platform: string;
  meetingLink: string;
  resources: string[];
}

export interface ForumPost {
  id: string;
  author: string;
  tags: string[];
  body: string;
  attachment?: string;
  helpfulCount: number;
  commentCount: number;
}
