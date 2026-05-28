'use client';

import React, { FormEvent, useState } from 'react';
import { Mail, MessageCircle, MessageSquare, Phone, Send, Sparkles } from 'lucide-react';
import styles from './Contact.module.scss';
import { useI18n } from '../i18n';

const email = 'yabeszega1997@gmail.com';
const phone = '082163990631';
const whatsappNumber = '6282163990631';
const submitCooldownMs = 30000;

const buildWhatsappUrl = (message: string) => {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const Contact = () => {
  const { t } = useI18n();
  const [status, setStatus] = useState('');
  const [lastSubmitAt, setLastSubmitAt] = useState(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const senderEmail = String(formData.get('email') || '').trim();
    const topic = String(formData.get('topic') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const website = String(formData.get('website') || '').trim();
    const now = Date.now();

    if (website) {
      setStatus(t('contact.status.spam'));
      return;
    }

    if (message.length < 20) {
      setStatus(t('contact.status.short'));
      return;
    }

    if (now - lastSubmitAt < submitCooldownMs) {
      const secondsLeft = Math.ceil((submitCooldownMs - (now - lastSubmitAt)) / 1000);
      setStatus(t('contact.status.wait', { seconds: secondsLeft }));
      return;
    }

    const whatsappMessage = [
      t('wa.formIntro'),
      '',
      `${t('wa.name')}: ${name}`,
      `${t('wa.email')}: ${senderEmail}`,
      `${t('wa.topic')}: ${topic}`,
      '',
      `${t('wa.message')}: ${message}`,
    ].join('\n');

    window.open(buildWhatsappUrl(whatsappMessage), '_blank', 'noopener,noreferrer');
    setLastSubmitAt(now);
    setStatus(t('contact.status.opening'));
  };

  const quickWhatsappMessage = [
    t('wa.quick'),
  ].join('\n');

  return (
    <>
      <section className={styles.contactSection}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>
            <Sparkles size={16} />
            {t('contact.eyebrow')}
          </p>
          <h2>{t('contact.title')}</h2>
          <p>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className={styles.contactGrid}>
          <aside className={styles.infoPanel}>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <Mail size={20} />
              </span>
              <div>
                <strong>{t('contact.email')}</strong>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <Phone size={20} />
              </span>
              <div>
                <strong>{t('contact.whatsapp')}</strong>
                <a href={buildWhatsappUrl(quickWhatsappMessage)} target="_blank" rel="noopener noreferrer">
                  {phone}
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <MessageSquare size={20} />
              </span>
              <div>
                <strong>{t('contact.bestFor')}</strong>
                <p>{t('contact.bestForText')}</p>
              </div>
            </div>
          </aside>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldGroup}>
              <label htmlFor="name">{t('contact.name')}</label>
              <input id="name" name="name" type="text" placeholder={t('contact.name.placeholder')} required />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="email">{t('contact.email')}</label>
              <input id="email" name="email" type="email" placeholder={t('contact.email.placeholder')} required />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="topic">{t('contact.topic')}</label>
              <select id="topic" name="topic" defaultValue={t('contact.topic.website')}>
                <option>{t('contact.topic.website')}</option>
                <option>{t('contact.topic.consultation')}</option>
                <option>{t('contact.topic.collaboration')}</option>
                <option>{t('contact.topic.feedback')}</option>
              </select>
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder={t('contact.message.placeholder')}
                required
              />
            </div>

            <div className={styles.honeypot} aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <button className={styles.submitButton} type="submit">
              {t('contact.submit')}
              <Send size={18} />
            </button>

            {status && <p className={styles.status}>{status}</p>}
          </form>
        </div>
      </section>

      <a
        href={buildWhatsappUrl(quickWhatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappChat}
        aria-label="Chat Yabes Tech on WhatsApp"
      >
        <MessageCircle size={28} />
        <span>{t('contact.chat')}</span>
      </a>
    </>
  );
};

export default Contact;
