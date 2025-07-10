
import React from 'react';
import styles from './TechnicalSkills.module.scss';


const TechnicalSkills = () => {
  const frontendSkills = [
    { name: 'HTML', level: 90, color: '#e34f26' },
    { name: 'CSS', level: 85, color: '#1572b6' },
    { name: 'SCSS', level: 80, color: '#cf649a' },
    { name: 'JavaScript', level: 85, color: '#f7df1e' },
    { name: 'TypeScript', level: 75, color: '#3178c6' },
    { name: 'jQuery', level: 70, color: '#0769ad' },
    { name: 'Vue.js', level: 80, color: '#4fc08d' },
    { name: 'React.js', level: 85, color: '#61dafb' },
    { name: 'React Native', level: 75, color: '#61dafb' }
  ];

  const backendSkills = [
    { name: 'PHP', level: 85, color: '#777bb4' },
    { name: 'Laravel', level: 80, color: '#ff2d20' },
    { name: 'Express.js', level: 75, color: '#000000' },
    { name: 'API Lumen', level: 70, color: '#e74c3c' },
    { name: 'PostgreSQL', level: 80, color: '#336791' }
  ];

  interface Skill {
    name: string;
    level: number;
    color: string;
  }

  const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => (
    <div 
      className={styles.skillCard}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        '--skill-color': skill.color,
        '--skill-level': `${skill.level}%`
      } as React.CSSProperties}
    >
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillLevel}>{skill.level}%</span>
      </div>
      <div className={styles.skillBar}>
        <div 
          className={styles.skillProgress}
          style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
        />
      </div>
    </div>
  );

  return (
    <section className={styles.technicalSkills}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.titleText}>Technical Skills</span>
          <div className={styles.titleUnderline}></div>
        </h2>
        
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <div className={styles.categoryIcon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className={styles.categoryTitle}>Frontend</h3>
            </div>
            <div className={styles.skillsList}>
              {frontendSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
              <div className={styles.categoryIcon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
                  <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className={styles.categoryTitle}>Backend & Database</h3>
            </div>
            <div className={styles.skillsList}>
              {backendSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;