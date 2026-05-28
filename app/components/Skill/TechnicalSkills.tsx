'use client';

import React from 'react';
import { Braces, BrainCircuit, Database, GitBranch, Layers3, ServerCog } from 'lucide-react';
import styles from './TechnicalSkills.module.scss';
import { useI18n } from '../i18n';

const TechnicalSkills = () => {
  const { t } = useI18n();

  const skillGroups = [
    {
      title: 'Frontend Engineering',
      description: t('skills.frontend.description'),
      icon: <Layers3 size={22} />,
      tools: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Vue.js', 'React Native'],
      workflow: 'UI architecture, component structure, responsive layout',
    },
    {
      title: 'Backend & Data',
      description: t('skills.backend.description'),
      icon: <ServerCog size={22} />,
      tools: ['PHP', 'Laravel', 'Express.js', 'Lumen API', 'PostgreSQL', 'REST API'],
      workflow: 'API design, database flow, integration planning',
    },
    {
      title: 'AI & Automation',
      description: t('skills.ai.description'),
      icon: <BrainCircuit size={22} />,
      tools: ['AI Workflow', 'Prompt Planning', 'Automation Logic', 'Documentation', 'Reporting'],
      workflow: 'Process mapping, AI-assisted flow, practical implementation',
    },
  ];

  const capabilityHighlights = [
    { label: 'System Thinking', icon: <GitBranch size={18} /> },
    { label: 'Clean Code Structure', icon: <Braces size={18} /> },
    { label: 'Data-Driven Apps', icon: <Database size={18} /> },
  ];

  return (
    <section className={styles.technicalSkills}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>{t('skills.eyebrow')}</span>
          <h2 className={styles.title}>{t('skills.title')}</h2>
          <p className={styles.subtitle}>
            {t('skills.subtitle')}
          </p>
        </div>

        <div className={styles.highlightRow}>
          {capabilityHighlights.map((item) => (
            <div key={item.label} className={styles.highlightItem}>
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.skillsGrid}>
          {skillGroups.map((group) => (
            <article key={group.title} className={styles.skillCategory}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>{group.icon}</div>
                <div>
                  <h3 className={styles.categoryTitle}>{group.title}</h3>
                  <p className={styles.categoryDescription}>{group.description}</p>
                </div>
              </div>

              <div className={styles.workflowBox}>
                <span>{t('skills.focus')}</span>
                <strong>{group.workflow}</strong>
              </div>

              <div className={styles.skillsList}>
                {group.tools.map((tool) => (
                  <span key={tool} className={styles.skillChip}>{tool}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.techFlow}>
          <div>
            <span>01</span>
            <strong>{t('skills.flow.analyze')}</strong>
            <p>{t('skills.flow.analyze.text')}</p>
          </div>
          <div>
            <span>02</span>
            <strong>{t('skills.flow.design')}</strong>
            <p>{t('skills.flow.design.text')}</p>
          </div>
          <div>
            <span>03</span>
            <strong>{t('skills.flow.build')}</strong>
            <p>{t('skills.flow.build.text')}</p>
          </div>
          <div>
            <span>04</span>
            <strong>{t('skills.flow.improve')}</strong>
            <p>{t('skills.flow.improve.text')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
