'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Bot,
  Check,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  ServerCog,
} from 'lucide-react';
import styles from './About.module.scss';
import { useI18n } from '../i18n';

const strengths = [
  'AI-ready workflow',
  'Web application',
  'API integration',
  'Database design',
  'Responsive interface',
  'Technical documentation',
];

const timeline = [
  {
    meta: '01 / Foundation',
    value: 'Fullstack',
    title: 'Web Development',
    descriptionKey: 'about.timeline.fullstack',
  },
  {
    meta: '02 / Systems',
    value: 'API',
    title: 'Connected Platform',
    descriptionKey: 'about.timeline.api',
  },
  {
    meta: '03 / AI',
    value: 'Automation',
    title: 'Workflow Upgrade',
    descriptionKey: 'about.timeline.ai',
  },
  {
    meta: '04 / Delivery',
    value: 'Launch',
    title: 'Practical Implementation',
    descriptionKey: 'about.timeline.delivery',
  },
];

const AboutMe: React.FC = () => {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      title: 'AI Workflow',
      description: t('about.service.ai'),
      icon: <Bot size={24} />,
    },
    {
      title: 'Web Systems',
      description: t('about.service.web'),
      icon: <Layers3 size={24} />,
    },
    {
      title: 'API Integration',
      description: t('about.service.api'),
      icon: <ServerCog size={24} />,
    },
    {
      title: 'Cloud Planning',
      description: t('about.service.cloud'),
      icon: <Cloud size={24} />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.aboutSection} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.serviceStrip} aria-label="IT consulting services">
          {services.map((service) => (
            <article key={service.title} className={styles.serviceItem}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}<span /></h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.visualWrap}>
            <div className={styles.visualAccent} />
            <div className={styles.techVisual}>
              <div className={styles.windowBar}>
                <span />
                <span />
                <span />
              </div>
              <div className={styles.visualHeader}>
                <Code2 size={22} />
                <div>
                  <strong>Yabes Tech Stack</strong>
                  <small>AI, Web, API, Data</small>
                </div>
              </div>
              <div className={styles.diagram}>
                <div>
                  <Bot size={18} />
                  <span>AI Layer</span>
                </div>
                <div>
                  <Code2 size={18} />
                  <span>Frontend</span>
                </div>
                <div>
                  <ServerCog size={18} />
                  <span>Backend</span>
                </div>
                <div>
                  <Database size={18} />
                  <span>Database</span>
                </div>
              </div>
              <div className={styles.codeBlock}>
                <span>const solution = analyze(requirements);</span>
                <span>build(system).connect(api).improve();</span>
              </div>
            </div>
          </div>

          <div className={styles.copy}>
            <p className={styles.eyebrow}>{t('about.eyebrow')}</p>
            <h2>{t('about.title')}</h2>
            <h3>{t('about.subtitle')}</h3>
            <p className={styles.description}>
              {t('about.description.one')}
            </p>

            <div className={styles.strengthGrid}>
              {strengths.map((item) => (
                <span key={item}>
                  <Check size={15} />
                  {item}
                </span>
              ))}
            </div>

            <p className={styles.description}>
              {t('about.description.two')}
            </p>

            <div className={styles.actions}>
              <a href="#projects" className={styles.primaryAction}>
                {t('about.portfolio')}
                <ArrowRight size={16} />
              </a>
              <a href="/CV%20YABES%20ELKANA%20ZEGA.pdf" className={styles.secondaryAction}>
                {t('about.downloadCv')}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.timeline}>
          {timeline.map((item) => (
            <article key={item.meta} className={styles.timelineItem}>
              <span className={styles.timelineMeta}>{item.meta}</span>
              <strong>{item.value}</strong>
              <h3>{item.title}<span /></h3>
              <p>{t(item.descriptionKey)}</p>
            </article>
          ))}
        </div>

        <div className={styles.processLine}>
          <GitBranch size={18} />
          <span>{t('about.process')}</span>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
