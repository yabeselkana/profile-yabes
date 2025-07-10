'use client';

import React from 'react';
import styles from './ProjectExperience.module.scss';
import Image from 'next/image';
import image1 from '../../../public/Experience/sf.png';
import image2 from '../../../public/Experience/carbon-clear.png';  
import image3 from '../../../public/Experience/digital-miners.png';
import image4 from '../../../public/Experience/sa.png';
import image5 from '../../../public/Experience/anamanambas.png';
import image6 from '../../../public/Experience/trip-teles.png';
import image7 from '../../../public/Experience/cisl.png'; 

 

const projects = [
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
    link: 'https://trip-tales-six.vercel.app/',
    status: 'in-progress',
  }
];

const ProjectExperience = () => {
  return (
    <section className={styles.projectSection}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.cardGrid}>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardLink}
          >
            <div className={styles.card}>
              {project.status === 'in-progress' && (
                <span className={styles.badge}>In Progress</span>
              )}
              
              {/* Flip Container - Only this part flips */}
              <div className={styles.flipContainer}>
                {/* Image Face (Front) */}
                <div className={styles.imageFace}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Description Face (Back) */}
                <div className={styles.descriptionFace}>
                  <div className={styles.descriptionContent}>
                    <p className={styles.description}>{project.description}</p>
                    <div className={styles.techList}>
                      {project.technologies.map((tech, i) => (
                        <span key={i} className={styles.tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Static Content - Always visible at bottom */}
              <div className={styles.cardContent}>
                <h3>{project.name}</h3>
                <p className={styles.meta}>{project.company} • {project.date}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectExperience;