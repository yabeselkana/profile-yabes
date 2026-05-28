'use client';

import React, { useEffect, useState } from 'react';
import styles from './ProjectExperience.module.scss';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useI18n } from '../i18n';
import image1 from '../../../public/Experience/sf.png';
import image2 from '../../../public/Experience/carbon-clear.png';  
import image3 from '../../../public/Experience/digital-miners.png';
import image4 from '../../../public/Experience/sa.png';
import image5 from '../../../public/Experience/anamanambas.png';
import image6 from '../../../public/Experience/trip-teles.png';
import image7 from '../../../public/Experience/cisl.png'; 

 

type Project = {
  name: string;
  company: string;
  date: string;
  description: string;
  technologies: string[];
  image?: StaticImageData;
  link?: string;
  status?: 'in-progress';
  visualLabel?: string;
};

const projects: Project[] = [
  {
    name: 'SWISFROM',
    company: 'PT. Senja Solusi',
    date: '2025',
    description: 'Created website SWISFROM for a Swiss-based company with multilingual support. Features modern design, responsive layout, and seamless user experience across multiple languages.',
    technologies: ['WordPress', 'SCSS'],
    image: image1,
    link: 'https://swissfrom.ch',
    status: 'in-progress',
  },
  {
    name: 'Carbon Clear',
    company: 'PT. Senja Solusi',
    date: '2024',
    description: 'Developed environmental awareness website focused on carbon offsetting. Includes interactive carbon calculator, educational content, and user engagement features.',
    technologies: ['WordPress', 'SCSS'],
    image: image2,
    link: 'https://carbonclear.eu/',
  },
  {
    name: 'Gomining',
    company: 'PT. Senja Solusi',
    date: '2025',
    description: 'Built Gomining website featuring staking dashboards and crypto content. Includes real-time data visualization, user authentication, and responsive design.',
    technologies: ['Vue.js', 'TypeScript', 'SCSS'],
    image: image3,
    link: 'https://gomining.com',
  },
  {
    name: 'Schlossatelier',
    company: 'PT. Senja Solusi',
    date: '2024',
    description: 'Created a luxury product website for a Swiss client. Features elegant design, product showcase, and premium user experience with attention to detail.',
    technologies: ['WordPress', 'SCSS'],
    image: image4,
    link: 'https://schlossatelier.ch',
    status: 'in-progress',
  },
  {
    name: 'Anambas Fondation',
    company: 'PT. Senja Solusi',
    date: '2024',
    description: 'Managing NGO website focused on marine and environmental conservation. Includes donation system, project galleries, and educational resources.',
    technologies: ['WordPress', 'SCSS'],
    image: image5,
    link: 'https://www.anambasfoundation.org/',
  },
  {
    name: 'Converse International School of Language (CISL)',
    company: 'PT. Senja Solusi',
    date: '2024',
    description: 'Developed a language school website with a focus on user experience and multilingual support. Features course catalogs, student portal, and interactive learning tools.',
    technologies: ['WordPress', 'SCSS'],
    image: image7,
    link: 'https://cisl.edu/'
  },
  {
    name: 'Trip Tales',
    company: 'PT. Senja Solusi',
    date: '2025',
    description: 'Developing a ticket booking platform that allows users to search, compare, and purchase travel tickets with a seamless and responsive user experience. Features real-time search and secure payment integration.',
    technologies: ['React', 'SCSS', 'Firebase'],
    image: image6,
    link: 'https://triptales.dk/',
    status: 'in-progress',
  },
  {
    name: 'StarHockey',
    company: 'PT. Senja Solusi',
    date: '2024',
    description: 'Delivered and maintained a WordPress-based website listed in the CV project experience, focused on responsive pages and reliable content presentation.',
    technologies: ['WordPress', 'SCSS', 'Website Maintenance'],
    visualLabel: 'Sports Website',
  },
  {
    name: 'Hanseatic Healthcare',
    company: 'PT. Senja Solusi',
    date: '2024',
    description: 'Worked on a healthcare website project with structured content pages, responsive layouts, and WordPress-based publishing workflow.',
    technologies: ['WordPress', 'SCSS', 'Healthcare Website'],
    visualLabel: 'Healthcare Platform',
  },
  {
    name: 'Auswanderer',
    company: 'PT. Senja Solusi',
    date: '2024',
    description: 'Developed and maintained a WordPress website for international content delivery with focus on clean layout, content structure, and usability.',
    technologies: ['WordPress', 'SCSS', 'Content Website'],
    visualLabel: 'International Website',
  },
  {
    name: 'English Language Center (ELC)',
    company: 'PT. Senja Solusi',
    date: '2024',
    description: 'Built and maintained an education-oriented website for language learning information, responsive presentation, and user-friendly content access.',
    technologies: ['WordPress', 'SCSS', 'Education Website'],
    visualLabel: 'Education Website',
  },
  {
    name: 'Company Website',
    company: 'CV. POINT',
    date: '2017',
    description: 'Designed a company website while working in IT support, alongside wireless network inspection and client-server system checking.',
    technologies: ['Company Website', 'Network Support', 'Client-Server'],
    visualLabel: 'IT Support Project',
  }
];

const ProjectExperience = () => {
  const { t } = useI18n();
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveProject((current) => (current + 1) % projects.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  const goToProject = (direction: 'next' | 'prev') => {
    setActiveProject((current) => {
      if (direction === 'next') return (current + 1) % projects.length;
      return current === 0 ? projects.length - 1 : current - 1;
    });
  };

  const project = projects[activeProject];

  const projectVisual = (
    <div className={styles.imagePanel}>
      {project.status === 'in-progress' && (
        <span className={styles.badge}>In Progress</span>
      )}
      {project.image ? (
        <Image
          src={project.image}
          alt={project.name}
          fill
          className={styles.image}
          sizes="(max-width: 860px) 100vw, 50vw"
          priority={activeProject === 0}
        />
      ) : (
        <div className={styles.placeholderVisual}>
          <span>{String(activeProject + 1).padStart(2, '0')}</span>
          <strong>{project.visualLabel || 'Website Project'}</strong>
          <small>{project.company}</small>
        </div>
      )}
    </div>
  );

  const projectDetails = (
    <div className={styles.contentPanel}>
      <span className={styles.projectMeta}>
        {String(activeProject + 1).padStart(2, '0')} / {project.date}
      </span>
      <div className={styles.titleLine}>
        <h3>{project.name}</h3>
        {project.link && <ArrowUpRight size={18} />}
      </div>
      <p className={styles.company}>{project.company}</p>
      <p className={styles.description}>{project.description}</p>

      <ul className={styles.techList}>
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
          {t('projects.open')}
          <ArrowUpRight size={16} />
        </a>
      )}
    </div>
  );

  return (
    <section className={styles.projectSection}>
      <div className={styles.headerRow}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>{t('projects.title')}</h2>
          <p className={styles.subtitle}>
            {t('projects.subtitle')}
          </p>
        </div>

        <div className={styles.sliderControls} aria-label="Project slider controls">
          <button type="button" onClick={() => goToProject('prev')} aria-label="Previous project">
            <ChevronLeft size={20} />
          </button>
          <span>{String(activeProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
          <button type="button" onClick={() => goToProject('next')} aria-label="Next project">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className={styles.sliderShell}>
        <article className={styles.projectSlide} key={project.name}>
          {projectVisual}
          {projectDetails}
        </article>

        <div className={styles.dots} aria-label="Select featured project">
          {projects.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={index === activeProject ? styles.activeDot : ''}
              onClick={() => setActiveProject(index)}
              aria-label={`Show ${item.name}`}
            />
          ))}
        </div>

        <div className={styles.thumbnailRail}>
          {projects.slice(0, 6).map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={index === activeProject ? styles.activeThumb : ''}
              onClick={() => setActiveProject(index)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item.name}</strong>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectExperience;
