'use client';

import React from 'react';
import styles from './components/page.module.scss';
import CompanyHero from './components/CompanyHero/CompanyHero';
import ProjectExperience from './components/Experience/ProjectExperience';
import AboutMe from './components/About/About';
import TechnicalSkills from './components/Skill/TechnicalSkills';
import NotableProjects from './components/NobtableProjects/NotableProjects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import { I18nProvider, Locale, useI18n } from './components/i18n';

type SectionKey = 'hero' | 'about' | 'skills' | 'experience' | 'education' | 'projects' | 'contact';

const navItems: Array<{ key: SectionKey; labelKey: string }> = [
  { key: 'hero', labelKey: 'nav.home' },
  { key: 'about', labelKey: 'nav.company' },
  { key: 'skills', labelKey: 'nav.technology' },
  { key: 'experience', labelKey: 'nav.caseStudies' },
  { key: 'education', labelKey: 'nav.credentials' },
  { key: 'projects', labelKey: 'nav.innovation' },
  { key: 'contact', labelKey: 'nav.contact' },
];

const HomeContent = () => {
  const { locale, setLocale, t } = useI18n();

  const scrollToSection = (section: SectionKey) => {
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className={styles.container}>
      <nav className={styles.topNav} aria-label="Main navigation">
        <button
          type="button"
          className={styles.brand}
          onClick={() => scrollToSection('hero')}
        >
          <span className={styles.brandMark}>YZ</span>
          <span>
            <strong>Yabes Tech</strong>
            <small>{t('brand.subtitle')}</small>
          </span>
        </button>

        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              className={styles.navLink}
              onClick={() => scrollToSection(item.key)}
            >
              {t(item.labelKey)}
            </button>
          ))}
        </div>

        <div className={styles.navActions}>
          <div className={styles.localeSwitch} aria-label="Language selector">
            {(['en', 'id'] as Locale[]).map((item) => (
              <button
                key={item}
                type="button"
                className={locale === item ? styles.activeLocale : ''}
                onClick={() => setLocale(item)}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            className={styles.navCta}
            onClick={() => scrollToSection('contact')}
          >
            {t('nav.startProject')}
          </button>
        </div>
      </nav>

      <section id="hero" className={styles.heroSection}>
        <CompanyHero onNavigate={scrollToSection} />
      </section>

      <main className={styles.main}>
        <section id="about" className={`${styles.pageSection} ${styles.companySection}`}>
          <AboutMe />
        </section>

        <section id="skills" className={styles.pageSection}>
          <TechnicalSkills />
        </section>

        <section id="experience" className={`${styles.pageSection} ${styles.caseStudiesSection}`}>
          <ProjectExperience />
        </section>

        <section id="projects" className={styles.pageSection}>
          <NotableProjects />
        </section>

        <section id="education" className={`${styles.pageSection} ${styles.altSection}`}>
          <Education />
        </section>

        <section id="contact" className={styles.pageSection}>
          <Contact />
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2026 Yabes Tech Consulting</p>
          <span className={styles.footerHint}>{t('footer.tagline')}</span>
        </div>
      </footer>
    </div>
  );
};

export default function Home() {
  return (
    <I18nProvider>
      <HomeContent />
    </I18nProvider>
  );
}
