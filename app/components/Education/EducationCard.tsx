// components/Education/EducationCard.tsx
import React from 'react';
import { EducationCardProps } from '../../../types/education.types';
import styles from './Education.module.scss';

const EducationCard: React.FC<EducationCardProps> = ({ education, index }) => {
  const getEducationIcon = (type: string) => {
    switch (type) {
      case 'degree':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 14L21 9L12 4L3 9L12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 14L18.16 10.83C18.69 11.88 19 13.06 19 14.34V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'bootcamp':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
            <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
            <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case 'certification':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 3H8C9.1 3 10 3.9 10 5V19C10 20.1 9.1 21 8 21H2V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 3H16C14.9 3 14 3.9 14 5V19C14 20.1 14.9 21 16 21H22V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
    }
  };

  const getTypeDisplayName = (type: string) => {
    switch (type) {
      case 'degree':
        return 'Bachelor Degree';
      case 'bootcamp':
        return 'Bootcamp';
      case 'certification':
        return 'Certification';
      case 'course':
        return 'Course';
      default:
        return type;
    }
  };

  return (
    <div 
      className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      <div className={styles.timelineIcon}>
        {getEducationIcon(education.type)}
      </div>
      
      <div className={styles.educationCard}>
        <div className={styles.cardHeader}>
          <div className={styles.degreeInfo}>
            <h3 className={styles.degree}>{education.degree}</h3>
            <p className={styles.institution}>{education.institution}</p>
          </div>
          <div className={styles.period}>
            <span className={styles.periodText}>{education.period}</span>
            {education.gpa && (
              <span className={styles.gpa}>GPA: {education.gpa}</span>
            )}
          </div>
        </div>
        
        <div className={styles.cardContent}>
          {education.description && (
            <p className={styles.description}>{education.description}</p>
          )}
          
          {education.achievements && education.achievements.length > 0 && (
            <div className={styles.achievements}>
              <h4 className={styles.achievementsTitle}>Key Achievements:</h4>
              <ul className={styles.achievementsList}>
                {education.achievements.map((achievement, i) => (
                  <li key={i} className={styles.achievementItem}>
                    <span className={styles.achievementIcon}>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {education.skills && education.skills.length > 0 && (
            <div className={styles.skills}>
              <h4 className={styles.skillsTitle}>Skills Gained:</h4>
              <div className={styles.skillTags}>
                {education.skills.map((skill, i) => (
                  <span key={i} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className={styles.cardFooter}>
          <div className={styles.completedDate}>
            <span className={styles.completedLabel}>Completed:</span>
            <span className={styles.completedValue}>{education.completedDate}</span>
          </div>
          <div className={styles.educationType}>
            <span className={`${styles.typeTag} ${styles[education.type]}`}>
              {getTypeDisplayName(education.type)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;