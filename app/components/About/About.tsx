// AboutMe.tsx
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Code, Users, Zap, Award, Coffee, Heart, ArrowRight } from 'lucide-react';
import styles from './About.module.scss';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AboutMe: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    { name: 'Frontend Development', level: 90, icon: <Code size={20} /> },
    { name: 'Team Collaboration', level: 85, icon: <Users size={20} /> },
    { name: 'Problem Solving', level: 88, icon: <Zap size={20} /> },
    { name: 'Project Management', level: 80, icon: <Award size={20} /> },
  ];

  const achievements: Achievement[] = [
    {
      title: 'Web Developer',
      description: 'Currently working at PT Senja Solusi',
      icon: <Code size={24} />
    },
    {
      title: 'Modern Tech Stack',
      description: 'Skilled in latest web technologies',
      icon: <Zap size={24} />
    },
    {
      title: 'Team Player',
      description: 'Experience in collaborative environments',
      icon: <Users size={24} />
    }
  ];

  const personalTraits = [
    'Creative Problem Solver',
    'Continuous Learner',
    'Detail Oriented',
    'Passionate Developer'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSkillHover = (index: number): void => {
    setActiveSkill(index);
  };

  const handleSkillLeave = (): void => {
    setActiveSkill(null);
  };

  return (
    <section 
      ref={sectionRef}
      className={`${styles.aboutSection} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            About Me
            <span className={styles.titleAccent}>.</span>
          </h2>
          <div className={styles.titleUnderline}></div>
        </div>

        {/* Main Content */}
        <div className={styles.contentGrid}>
          {/* Introduction */}
          <div className={styles.introSection}>
            <div className={styles.introContent}>
              <div className={styles.introIcon}>
                <Coffee size={32} />
              </div>
              <p className={styles.introText}>
                I am currently working as a <span className={styles.highlight}>Web Developer</span> at{' '}
                <span className={styles.company}>PT Senja Solusi</span>, specializing in web application development.
                I am skilled in modern web technologies and have experience building responsive, 
                high-performance web applications.
              </p>
              <div className={styles.workStyle}>
                <div className={styles.workStyleItem}>
                  <div className={styles.workStyleIcon}>
                    <Users size={20} />
                  </div>
                  <span>Team Collaboration</span>
                </div>
                <div className={styles.workStyleItem}>
                  <div className={styles.workStyleIcon}>
                    <Zap size={20} />
                  </div>
                  <span>Independent Work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className={styles.skillsSection}>
            <h3 className={styles.sectionTitle}>
              <Zap size={24} />
              Core Skills
            </h3>
            <div className={styles.skillsList}>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`${styles.skillItem} ${
                    activeSkill === index ? styles.active : ''
                  }`}
                  onMouseEnter={() => handleSkillHover(index)}
                  onMouseLeave={handleSkillLeave}
                >
                  <div className={styles.skillHeader}>
                    <div className={styles.skillIcon}>
                      {skill.icon}
                    </div>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillPercentage}>{skill.level}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div
                      className={styles.skillProgress}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className={styles.achievementsSection}>
            <h3 className={styles.sectionTitle}>
              <Award size={24} />
              Achievements
            </h3>
            <div className={styles.achievementsList}>
              {achievements.map((achievement, index) => (
                <div key={index} className={styles.achievementItem}>
                  <div className={styles.achievementIcon}>
                    {achievement.icon}
                  </div>
                  <div className={styles.achievementContent}>
                    <h4 className={styles.achievementTitle}>{achievement.title}</h4>
                    <p className={styles.achievementDescription}>{achievement.description}</p>
                  </div>
                  <ArrowRight size={16} className={styles.achievementArrow} />
                </div>
              ))}
            </div>
          </div>

          {/* Personal Traits */}
          <div className={styles.traitsSection}>
            <h3 className={styles.sectionTitle}>
              <Heart size={24} />
              What Drives Me
            </h3>
            <div className={styles.traitsList}>
              {personalTraits.map((trait, index) => (
                <div key={index} className={styles.traitItem}>
                  <div className={styles.traitDot}></div>
                  <span className={styles.traitText}>{trait}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Let's Build Something Amazing Together!</h3>
            <p className={styles.ctaText}>
              I'm always excited to work on new projects and collaborate with creative minds.
            </p>
            <button className={styles.ctaButton}>
              Get In Touch
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;