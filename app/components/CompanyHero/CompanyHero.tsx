'use client';

import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Network,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import Image from 'next/image';
import styles from './CompanyHero.module.scss';
import profileImage from '../../../public/yabes.jpg';
import { useI18n } from '../i18n';

type HeroTarget = 'about' | 'skills' | 'experience' | 'projects' | 'contact';

interface CompanyHeroProps {
  onNavigate: (target: HeroTarget) => void;
}

const slides = [
  {
    labelKey: 'hero.slide.ai.label',
    titleKey: 'hero.slide.ai.title',
    descriptionKey: 'hero.slide.ai.description',
    icon: <BrainCircuit size={28} />,
  },
  {
    labelKey: 'hero.slide.web.label',
    titleKey: 'hero.slide.web.title',
    descriptionKey: 'hero.slide.web.description',
    icon: <Cpu size={28} />,
  },
  {
    labelKey: 'hero.slide.cloud.label',
    titleKey: 'hero.slide.cloud.title',
    descriptionKey: 'hero.slide.cloud.description',
    icon: <Cloud size={28} />,
  },
];

const metrics = [
  { value: '7+', labelKey: 'hero.metric.projects' },
  { value: '3', labelKey: 'hero.metric.services' },
  { value: '2024+', labelKey: 'hero.metric.delivery' },
];

const technologies = ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Laravel', 'PostgreSQL', 'Firebase', 'WordPress'];

const techNodes = [
  { label: 'AI Layer', value: 'workflow' },
  { label: 'API Core', value: 'integration' },
  { label: 'Cloud Ready', value: 'deploy' },
];

const CompanyHero: React.FC<CompanyHeroProps> = ({ onNavigate }) => {
  const { t } = useI18n();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  const goToSlide = (direction: 'next' | 'prev') => {
    setActiveSlide((current) => {
      if (direction === 'next') return (current + 1) % slides.length;
      return current === 0 ? slides.length - 1 : current - 1;
    });
  };

  const slide = slides[activeSlide];

  return (
    <section className={styles.hero}>
      <Image
        src={profileImage}
        alt="Yabes Elkana Zega"
        priority
        fill
        className={styles.backgroundImage}
        sizes="100vw"
      />

      <div className={styles.overlay} />

      <div className={styles.heroContent}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <ShieldCheck size={16} />
            {t('hero.eyebrow')}
          </p>

          <h1>{t('hero.title')}</h1>

          <p className={styles.lead}>
            {t('hero.lead')}
          </p>

          <div className={styles.actions}>
            <button type="button" className={styles.primaryAction} onClick={() => onNavigate('contact')}>
              {t('hero.cta.primary')}
              <ArrowRight size={18} />
            </button>
            <button type="button" className={styles.secondaryAction} onClick={() => onNavigate('projects')}>
              {t('hero.cta.secondary')}
            </button>
          </div>

          <div className={styles.techStack} aria-label="Technology stack">
            {technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.systemPanel}>
        <div className={styles.systemHeader}>
          <Code2 size={18} />
          <span>{t('hero.system')}</span>
        </div>
        <div className={styles.systemNodes}>
          {techNodes.map((node) => (
            <div key={node.label}>
              <strong>{node.label}</strong>
              <span>{node.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.networkLine}>
          <Network size={18} />
          <span>{t('hero.network')}</span>
        </div>
      </div>

      <div className={styles.sliderPanel} aria-live="polite">
        <div className={styles.sliderHeader}>
          <span className={styles.slideIcon}>{slide.icon}</span>
          <div>
            <p>{t(slide.labelKey)}</p>
            <strong>{String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</strong>
          </div>
        </div>

        <div className={styles.slideBody} key={slide.titleKey}>
          <h2>{t(slide.titleKey)}</h2>
          <p>{t(slide.descriptionKey)}</p>
        </div>

        <div className={styles.sliderControls}>
          <button type="button" onClick={() => goToSlide('prev')} aria-label="Previous slide">
            <ChevronLeft size={18} />
          </button>
          <div className={styles.dots}>
            {slides.map((item, index) => (
              <button
                key={item.labelKey}
                type="button"
                className={index === activeSlide ? styles.activeDot : ''}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${t(item.labelKey)}`}
              />
            ))}
          </div>
          <button type="button" onClick={() => goToSlide('next')} aria-label="Next slide">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className={styles.metrics}>
        {metrics.map((metric) => (
          <div key={metric.labelKey}>
            <strong>{metric.value}</strong>
            <span>{t(metric.labelKey)}</span>
          </div>
        ))}
        <div className={styles.process}>
          <Workflow size={20} />
          <span>{t('hero.process')}</span>
        </div>
      </div>
    </section>
  );
};

export default CompanyHero;
