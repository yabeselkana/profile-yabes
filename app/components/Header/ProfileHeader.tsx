// ProfileHeader.tsx
'use client';
import React from 'react';
import { Phone, Mail, Linkedin, MapPin, Download, ShieldCheck, Workflow, MonitorSmartphone } from 'lucide-react';
import styles from './ProfileHeader.module.scss';

interface ProfileHeaderProps {
  name?: string;
  title?: string;
  location?: string;
  phone?: string;
  email?: string;
  linkedinUrl?: string;
  linkedinUsername?: string;
  initialProfilePhoto?: string;
  initialBackgroundPhoto?: string;
  cvUrl?: string;
  cvFileName?: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name = "Yabes Elkana Zega",
  title = "IT Consultant & Web Developer",
  location = "Bandung Jawa Barat, Indonesia",
  phone = "082163990631",
  email = "yabeszega1997@gmail.com",
  linkedinUrl = "https://linkedin.com/in/yabes-zega",
  linkedinUsername = "yabes-zega",
  initialProfilePhoto = '/yabes.png',
  initialBackgroundPhoto,
  cvUrl = '/CV YABES ELKANA ZEGA.pdf',
  cvFileName = 'Yabes_Elkana_Zega_CV.pdf',
}) => {
  const handleDownloadCV = (): void => {
    if (cvUrl) {
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = cvFileName || 'CV.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Get initials from name
  const getInitials = (fullName: string): string => {
    return fullName
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.backgroundSection}>
        {initialBackgroundPhoto ? (
          <div
            className={styles.backgroundImage}
            style={{ backgroundImage: `url(${initialBackgroundPhoto})` }}
          >
            <div className={styles.backgroundOverlay}></div>
          </div>
        ) : (
          <div className={styles.backgroundGradient}>
            <div className={styles.backgroundOverlay}></div>
          </div>
        )}
        <div className={styles.heroPattern}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Lead Consultant</p>
          <h2>Technical partner for planning and delivery.</h2>
        </div>
      </div>

      <div className={styles.profileContent}>
        <div className={styles.profilePhotoWrapper}>
          <div className={styles.profilePhotoContainer}>
            <div className={styles.profilePhoto}>
              {initialProfilePhoto ? (
                <img
                  src={initialProfilePhoto}
                  alt={`${name} profile picture`}
                  className={styles.profileImage}
                />
              ) : (
                <div className={styles.profileInitials}>
                  {getInitials(name)}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.profileInfo}>
          <div className={styles.profileDetails}>
            <h1 className={styles.profileName}>
              {name}
            </h1>
            <p className={styles.profileTitle}>
              {title}
            </p>
            <div className={styles.profileLocation}>
              <MapPin size={18} />
              {location}
            </div>
          </div>

          <div className={styles.serviceHighlights}>
            <span>
              <ShieldCheck size={17} />
              System Planning
            </span>
            <span>
              <Workflow size={17} />
              Web Development
            </span>
            <span>
              <MonitorSmartphone size={17} />
              Responsive UI
            </span>
          </div>

          {/* Contact Information */}
          <div className={styles.contactGrid}>
            <a
              href={`tel:${phone}`}
              className={`${styles.contactCard} ${styles.phoneCard}`}
              aria-label={`Call ${phone}`}
            >
              <div className={styles.contactIcon}>
                <Phone size={20} />
              </div>
              <div className={styles.contactInfo}>
                <p className={styles.contactLabel}>Phone</p>
                <p className={styles.contactValue}>{phone}</p>
              </div>
            </a>

            <a
              href={`mailto:${email}`}
              className={`${styles.contactCard} ${styles.emailCard}`}
              aria-label={`Email ${email}`}
            >
              <div className={styles.contactIcon}>
                <Mail size={20} />
              </div>
              <div className={styles.contactInfo}>
                <p className={styles.contactLabel}>Email</p>
                <p className={styles.contactValue}>{email}</p>
              </div>
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contactCard} ${styles.linkedinCard}`}
              aria-label={`LinkedIn profile ${linkedinUsername}`}
            >
              <div className={styles.contactIcon}>
                <Linkedin size={20} />
              </div>
              <div className={styles.contactInfo}>
                <p className={styles.contactLabel}>LinkedIn</p>
                <p className={styles.contactValue}>{linkedinUsername}</p>
              </div>
            </a>

          </div>
          <div className={styles.cvCardWrapper}>
            <button
              onClick={handleDownloadCV}
              className={`${styles.contactCards} ${styles.cvCards}`}
              aria-label="Download CV"
              type="button"
            >
              <div className={styles.contactIcon}>
                <Download size={20} />
              </div>
              <div className={styles.contactInfo}>
                <p className={styles.contactValue}>Download CV</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
