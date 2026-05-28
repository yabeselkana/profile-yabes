'use client';

// components/Projects/NotableProjects.tsx
import React from 'react';
import styles from './NotableProjects.module.scss';
import { useI18n } from '../i18n';

const NotableProjects = () => {
  const { t } = useI18n();

  const projectsData = [
    {
      id: 1,
      title: "Air Pollution Detection System",
      description: "Advanced Arduino-based system with real-time sound notifications and data logging for comprehensive air quality monitoring and environmental health assessment.",
      tags: ["Arduino", "IoT", "Environmental", "Hardware"],
      icon: "pollution",
      status: t('status.completed'),
      year: "2022",
      type: "hardware"
    },
    {
      id: 2,
      title: "IoT Smart Garbage Cans",
      description: "Intelligent smartphone-integrated waste management system featuring real-time monitoring, automated collection scheduling, and smart city integration capabilities.",
      tags: ["IoT", "Mobile App", "Smart City", "Sensors"],
      icon: "iot",
      status: t('status.completed'),
      year: "2023",
      type: "iot"
    }
  ];

  const githubProjects = [
    {
      title: 'My Film',
      description: 'PHP-based film project repository from GitHub. Added as a personal code project showcase.',
      tags: ['PHP', 'Web App'],
      url: 'https://github.com/yabeselkana/my-film',
      year: '2026',
    },
    {
      title: 'Library System',
      description: 'Full-stack library application split into frontend and backend repositories.',
      tags: ['JavaScript', 'Frontend', 'Backend'],
      url: 'https://github.com/yabeselkana/FE_perpus',
      secondaryUrl: 'https://github.com/yabeselkana/BE_perpus',
      year: '2025',
    },
    {
      title: 'Article Platform',
      description: 'Article application with separate React frontend and backend service repositories.',
      tags: ['React', 'JavaScript', 'API'],
      url: 'https://github.com/yabeselkana/React_Articel_FE',
      secondaryUrl: 'https://github.com/yabeselkana/React_Articel_Be',
      year: '2024',
    },
    {
      title: 'HireJob App',
      description: 'Job hiring application with Next.js frontend and Express backend repositories.',
      tags: ['Next.js', 'Express.js', 'JavaScript'],
      url: 'https://github.com/yabeselkana/FE_Nextjs_Hirejob',
      secondaryUrl: 'https://github.com/yabeselkana/BE_Hirejob',
      year: '2024',
    },
    {
      title: 'Blanja E-Commerce',
      description: 'E-commerce project with React frontend and Express backend repositories.',
      tags: ['React', 'Express.js', 'E-Commerce'],
      url: 'https://github.com/yabeselkana/React_Blanja_FE',
      secondaryUrl: 'https://github.com/yabeselkana/Express_Blanja_BE',
      year: '2024',
    },
    {
      title: 'Recipe Mobile App',
      description: 'Recipe application using React Native with a supporting backend repository.',
      tags: ['React Native', 'Backend', 'Mobile'],
      url: 'https://github.com/yabeselkana/React_Native_Recipe',
      secondaryUrl: 'https://github.com/yabeselkana/BackEnd_Recipe',
      year: '2024',
    },
    {
      title: 'Blog Lumen API',
      description: 'Blog API project built with Laravel Lumen for backend service practice.',
      tags: ['PHP', 'Laravel Lumen', 'API'],
      url: 'https://github.com/yabeselkana/Blog_Laravel_lumen_Api',
      year: '2024',
    },
    {
      title: 'Profile Website',
      description: 'Personal profile and portfolio website repository deployed as a public web project.',
      tags: ['SCSS', 'Portfolio', 'Web'],
      url: 'https://github.com/yabeselkana/profile-yabes',
      demoUrl: 'https://yabes.vercel.app',
      year: '2025',
    },
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
            {t('innovation.title')}
          </h2>
          <p className={styles.subtitle}>
            {t('innovation.subtitle')}
          </p>
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

        <div className={styles.githubSection}>
          <div className={styles.githubHeader}>
            <h3 className={styles.githubTitle}>{t('innovation.github')}</h3>
            <a
              href="https://github.com/yabeselkana"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubProfileLink}
            >
              {t('innovation.github.view')}
            </a>
          </div>

          <div className={styles.githubGrid}>
            {githubProjects.map((project) => (
              <article key={project.title} className={styles.githubCard}>
                <div className={styles.githubCardHeader}>
                  <h4>{project.title}</h4>
                  <span>{project.year}</span>
                </div>
                <p>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.githubActions}>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {t('innovation.repo')}
                  </a>
                  {project.secondaryUrl && (
                    <a href={project.secondaryUrl} target="_blank" rel="noopener noreferrer">
                      {t('innovation.backend')}
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      {t('innovation.demo')}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotableProjects;
