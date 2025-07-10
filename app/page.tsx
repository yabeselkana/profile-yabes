'use client';

import React, { useState, useEffect } from 'react';
import styles from './components/page.module.scss';
import ProfileHeader from './components/Header/ProfileHeader';
import ProjectExperience from './components/Experience/ProjectExperience';
import AboutMe from './components/About/About';
import TechnicalSkills from './components/Skill/TechnicalSkills';
import NotableProjects from './components/NobtableProjects/NotableProjects';
import Education from './components/Education/Education';

type SectionKey = 'about' | 'skills' | 'experience' | 'education' | 'projects';

interface SectionConfig {
  label: string;
  icon: string;
  component: React.ReactNode;
}

export default function Home() {
  const [selectedSection, setSelectedSection] = useState<SectionKey>('about');
  const [isLoading, setIsLoading] = useState(false);

  const sectionConfigs: Record<SectionKey, SectionConfig> = {
    about: {
      label: '👤 About Me',
      icon: '👤',
      component: <AboutMe />
    },
    skills: {
      label: '💻 Technical Skills',
      icon: '💻',
      component: <TechnicalSkills />
    },
    experience: {
      label: '💼 Work Experience',
      icon: '💼',
      component: <ProjectExperience />
    },
    education: {
      label: '🎓 Education',
      icon: '🎓',
      component: <Education />
    },
    projects: {
      label: '🚀 Notable Projects',
      icon: '🚀',
      component: <NotableProjects />
    }
  };

  const handleSectionChange = (section: SectionKey) => {
    if (section === selectedSection) return;
    
    setIsLoading(true);
    
    // Simulate smooth transition
    setTimeout(() => {
      setSelectedSection(section);
      setIsLoading(false);
    }, 200);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const sections = Object.keys(sectionConfigs) as SectionKey[];
      const currentIndex = sections.indexOf(selectedSection);
      
      if (event.key === 'ArrowLeft' && currentIndex > 0) {
        handleSectionChange(sections[currentIndex - 1]);
      } else if (event.key === 'ArrowRight' && currentIndex < sections.length - 1) {
        handleSectionChange(sections[currentIndex + 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedSection]);

  // Smooth scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedSection]);

  return (
    <div className={styles.container}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape} style={{ top: '10%', left: '10%' }}></div>
        <div className={styles.floatingShape} style={{ top: '20%', right: '15%' }}></div>
        <div className={styles.floatingShape} style={{ bottom: '15%', left: '20%' }}></div>
        <div className={styles.floatingShape} style={{ bottom: '25%', right: '10%' }}></div>
      </div>

      <header className={styles.header}>
        <ProfileHeader />
      </header>

      <main className={styles.main}>
        {/* Enhanced Tabs Navigation */}
        <nav className={styles.tabNav} role="tablist">
          {Object.entries(sectionConfigs).map(([key, config]) => (
            <button
              key={key}
              role="tab"
              aria-selected={selectedSection === key}
              aria-controls={`panel-${key}`}
              data-tab={key}
              className={`${styles.tabButton} ${
                selectedSection === key ? styles.activeTab : ''
              }`}
              onClick={() => handleSectionChange(key as SectionKey)}
              disabled={isLoading}
            >
              <span className={styles.tabIcon}>{config.icon}</span>
              <span className={styles.tabLabel}>{config.label}</span>
            </button>
          ))}
        </nav>

        {/* Enhanced Tab Content */}
        <section 
          className={`${styles.tabContent} ${isLoading ? styles.contentLoading : ''}`}
          role="tabpanel"
          id={`panel-${selectedSection}`}
          aria-labelledby={`tab-${selectedSection}`}
        >
          {isLoading ? (
            <div className={styles.loadingContainer}>
              <div className={styles.loader}></div>
              <p className={styles.loadingText}>Loading {sectionConfigs[selectedSection].label}...</p>
            </div>
          ) : (
            <div className={styles.contentWrapper}>
              {sectionConfigs[selectedSection].component}
            </div>
          )}
        </section>

        {/* Section Indicator */}
        <div className={styles.sectionIndicator}>
          <div className={styles.indicatorDots}>
            {Object.keys(sectionConfigs).map((key, index) => (
              <button
                key={key}
                className={`${styles.dot} ${
                  selectedSection === key ? styles.activeDot : ''
                }`}
                onClick={() => handleSectionChange(key as SectionKey)}
                aria-label={`Go to ${sectionConfigs[key as SectionKey].label}`}
              />
            ))}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2025 Yabes Elkana Zega</p>
          <div className={styles.footerLinks}>
            <span className={styles.footerHint}>
              Use ← → arrow keys to navigate
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}