// types/education.types.ts

export interface Education {
    id: number;
    degree: string;
    institution: string;
    period: string;
    gpa?: string;
    completedDate: string;
    type: 'degree' | 'bootcamp' | 'certification' | 'course';
    description?: string;
    achievements?: string[];
    skills?: string[];
    location?: string;
    honors?: string[];
    coursework?: string[];
    thesis?: {
      title: string;
      advisor: string;
      description: string;
    };
  }
  
  export interface EducationCardProps {
    education: Education;
    index: number;
  }
  
  export interface EducationTimelineProps {
    educations: Education[];
  }
  
  export type EducationType = 'degree' | 'bootcamp' | 'certification' | 'course';
  
  export interface EducationStats {
    totalEducations: number;
    degreeCount: number;
    bootcampCount: number;
    certificationCount: number;
    averageGpa?: number;
  }