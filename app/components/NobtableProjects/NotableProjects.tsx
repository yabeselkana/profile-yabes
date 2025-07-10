// components/Projects/NotableProjects.tsx
import React from 'react';
import styles from './NotableProjects.module.scss';

const NotableProjects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Air Pollution Detection System",
      description: "Advanced Arduino-based system with real-time sound notifications and data logging for comprehensive air quality monitoring and environmental health assessment.",
      tags: ["Arduino", "IoT", "Environmental", "Hardware"],
      icon: "pollution",
      status: "Completed",
      year: "2022",
      type: "hardware"
    },
    {
      id: 2,
      title: "IoT Smart Garbage Cans",
      description: "Intelligent smartphone-integrated waste management system featuring real-time monitoring, automated collection scheduling, and smart city integration capabilities.",
      tags: ["IoT", "Mobile App", "Smart City", "Sensors"],
      icon: "iot",
      status: "Completed",
      year: "2023",
      type: "iot"
    }
  ];

  const getProjectIcon = (iconType: string) => {
    if (iconType === 'pollution') {
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.09 6.26L18 5L16.74 10.74L22 12L16.74 13.26L18 19L13.09 17.74L12 22L10.91 17.74L6 19L7.26 13.26L2 12L7.26 10.74L6 5L10.91 6.26L12 2Z" fill="currentColor"/>
        </svg>
      );
    } else {
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    }
  };

  const getTagClass = (tag: string) => {
    const tagLower = tag.toLowerCase();
    if (tagLower.includes('arduino') || tagLower.includes('hardware') || tagLower.includes('environmental')) {
      return 'hardware';
    } else if (tagLower.includes('iot') || tagLower.includes('mobile') || tagLower.includes('smart')) {
      return 'iot';
    }
    return '';
  };

  return (
    <section className={styles.notableProjectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleHighlight}>Notable</span> Projects
          </h2>
          <p className={styles.subtitle}>
            Innovative solutions combining hardware and software technologies
          </p>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.projects}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.project}>
              <div className={`${styles.projectIcon} ${styles[project.type]}`}>
                {getProjectIcon(project.icon)}
              </div>
              
              <h3 className={styles.projectTitle}>{project.title}</h3>
              
              <p className={styles.projectDescription}>
                {project.description}
              </p>
              
              <div className={styles.projectTags}>
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className={`${styles.tag} ${styles[getTagClass(tag)]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className={styles.projectFooter}>
                <div className={styles.projectStatus}>
                  <div className={styles.statusDot}></div>
                  <span className={styles.statusText}>{project.status}</span>
                </div>
                <div className={styles.projectYear}>{project.year}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.floatingElements}>
          <div className={styles.floatingIcon}></div>
          <div className={styles.floatingIcon}></div>
          <div className={styles.floatingIcon}></div>
        </div>
      </div>
    </section>
  );
};

export default NotableProjects;