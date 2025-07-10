// components/Education/Education.tsx
import React from 'react';
import styles from './Education.module.scss';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor's in Computer Engineering",
      institution: "Universitas Pembangunan Panca Budi Medan",
      period: "2018 - 2022",
      gpa: "3.38/4.00",
      completedDate: "Apr 2022",
      type: "degree",
      description: "Focused on software engineering, database systems, and computer networks. Developed strong foundation in programming languages and system design.",
      achievements: [
        "Dean's List for 2 semesters",
        "Final project: Web-based Inventory Management System",
        "Active member of Computer Engineering Student Association"
      ]
    },
    {
      id: 2,
      degree: "Fullstack Web and Mobile Development",
      institution: "Pijar Camp",
      period: "Jun 2023",
      completedDate: "Jun 2023",
      type: "bootcamp",
      description: "Intensive bootcamp covering modern web and mobile development technologies including React, Node.js, and React Native.",
      achievements: [
        "Built 5+ full-stack applications",
        "Mastered modern JavaScript frameworks",
        "Collaborated on team projects using Agile methodology"
      ]
    }
  ];

  const getEducationIcon = (type: string) => {
    if (type === 'degree') {
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14L21 9L12 4L3 9L12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 14L18.16 10.83C18.69 11.88 19 13.06 19 14.34V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    } else {
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );
    }
  };

  return (
    <section className={styles.educationSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleIcon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 10V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V10M22 10L18 14L16 12L12 16L8 12L6 14L2 10M22 10V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className={styles.titleText}>Education</span>
          </h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.timeline}>
          {educationData.map((edu, index) => (
            <div 
              key={edu.id} 
              className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className={styles.timelineIcon}>
                {getEducationIcon(edu.type)}
              </div>
              
              <div className={styles.educationCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.degreeInfo}>
                    <h3 className={styles.degree}>{edu.degree}</h3>
                    <p className={styles.institution}>{edu.institution}</p>
                  </div>
                  <div className={styles.period}>
                    <span className={styles.periodText}>{edu.period}</span>
                    {edu.gpa && (
                      <span className={styles.gpa}>GPA: {edu.gpa}</span>
                    )}
                  </div>
                </div>
                
                <div className={styles.cardContent}>
                  <p className={styles.description}>{edu.description}</p>
                  
                  <div className={styles.achievements}>
                    <h4 className={styles.achievementsTitle}>Key Achievements:</h4>
                    <ul className={styles.achievementsList}>
                      {edu.achievements.map((achievement, i) => (
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
                </div>
                
                <div className={styles.cardFooter}>
                  <div className={styles.completedDate}>
                    <span className={styles.completedLabel}>Completed:</span>
                    <span className={styles.completedValue}>{edu.completedDate}</span>
                  </div>
                  <div className={styles.educationType}>
                    <span className={`${styles.typeTag} ${styles[edu.type]}`}>
                      {edu.type === 'degree' ? 'Bachelor Degree' : 'Bootcamp'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;