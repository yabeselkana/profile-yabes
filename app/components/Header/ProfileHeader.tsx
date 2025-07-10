// ProfileHeader.tsx
'use client';
import React, { useState, useRef, ChangeEvent } from 'react';
import { Phone, Mail, Linkedin, MapPin, Camera, Edit3, Upload, X, Download } from 'lucide-react';
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
  title = "Web Developer",
  location = "Bandung Jawa Barat, Indonesia",
  phone = "082163990631",
  email = "yabeszega1997@gmail.com",
  linkedinUrl = "https://linkedin.com/in/yabes-zega",
  linkedinUsername = "yabes-zega",
  initialProfilePhoto = '/yabes.jpg',
  initialBackgroundPhoto = '/bg.jpg',
  cvUrl = '/CV YABES ELKANA ZEGA.pdf',
  cvFileName = 'Yabes_Elkana_Zega_CV.pdf',
}) => {
  const [profilePhoto, setProfilePhoto] = useState<string | null>(initialProfilePhoto);
  const [backgroundPhoto, setBackgroundPhoto] = useState<string | null>(initialBackgroundPhoto);
  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(false);
  const [isEditingBackground, setIsEditingBackground] = useState<boolean>(false);

  const profileInputRef = useRef<HTMLInputElement>(null);
  const backgroundInputRef = useRef<HTMLInputElement>(null);

  const handleProfilePhotoChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          setProfilePhoto(result);
        }
      };
      reader.readAsDataURL(file);
    }
    setIsEditingProfile(false);
  };

  const handleBackgroundPhotoChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          setBackgroundPhoto(result);
        }
      };
      reader.readAsDataURL(file);
    }
    setIsEditingBackground(false);
  };

  const removeProfilePhoto = (): void => {
    setProfilePhoto(null);
    setIsEditingProfile(false);
  };

  const removeBackgroundPhoto = (): void => {
    setBackgroundPhoto(null);
    setIsEditingBackground(false);
  };

  const handleEditProfileToggle = (): void => {
    setIsEditingProfile(!isEditingProfile);
  };

  const handleEditBackgroundToggle = (): void => {
    setIsEditingBackground(!isEditingBackground);
  };

  const triggerProfileUpload = (): void => {
    profileInputRef.current?.click();
  };

  const triggerBackgroundUpload = (): void => {
    backgroundInputRef.current?.click();
  };

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
      {/* Background Section */}
      <div className={styles.backgroundSection}>
        {/* Background Image or Gradient */}
        {backgroundPhoto ? (
          <div
            className={styles.backgroundImage}
            style={{ backgroundImage: `url(${backgroundPhoto})` }}
          >
            <div className={styles.backgroundOverlay}></div>
          </div>
        ) : (
          <div className={styles.backgroundGradient}>
            <div className={styles.backgroundOverlay}></div>
          </div>
        )}

        {/* Background Photo Controls */}
        <div className={styles.backgroundControls}>
          <button
            onClick={handleEditBackgroundToggle}
            className={styles.controlButton}
            type="button"
            aria-label="Edit background photo"
          >
            <Edit3 size={20} />
          </button>
        </div>

        {/* Background Edit Menu */}
        {isEditingBackground && (
          <div className={styles.editMenu}>
            <button
              onClick={triggerBackgroundUpload}
              className={styles.menuItem}
              type="button"
            >
              <Upload size={16} />
              Upload Photo
            </button>
            {backgroundPhoto && (
              <button
                onClick={removeBackgroundPhoto}
                className={`${styles.menuItem} ${styles.removeItem}`}
                type="button"
              >
                <X size={16} />
                Remove Photo
              </button>
            )}
          </div>
        )}
      </div>

      {/* Profile Content */}
      <div className={styles.profileContent}>
        {/* Profile Photo Section */}
        <div className={styles.profilePhotoWrapper}>
          <div className={styles.profilePhotoContainer}>
            <div className={styles.profilePhoto}>
              {profilePhoto ? (
                <img
                  src={profilePhoto}
                  alt={`${name} profile picture`}
                  className={styles.profileImage}
                />
              ) : (
                <div className={styles.profileInitials}>
                  {getInitials(name)}
                </div>
              )}
            </div>

            {/* Profile Photo Controls */}
            <div className={styles.profilePhotoOverlay}>
              <button
                onClick={handleEditProfileToggle}
                className={styles.photoControlButton}
                type="button"
                aria-label="Edit profile photo"
              >
                <Camera size={20} />
              </button>
            </div>

            {/* Profile Edit Menu */}
            {isEditingProfile && (
              <div className={styles.profileEditMenu}>
                <button
                  onClick={triggerProfileUpload}
                  className={styles.menuItem}
                  type="button"
                >
                  <Upload size={16} />
                  Upload Photo
                </button>
                {profilePhoto && (
                  <button
                    onClick={removeProfilePhoto}
                    className={`${styles.menuItem} ${styles.removeItem}`}
                    type="button"
                  >
                    <X size={16} />
                    Remove Photo
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Profile Info Section */}
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

      {/* Hidden File Inputs */}
      <input
        ref={profileInputRef}
        type="file"
        accept="image/*"
        onChange={handleProfilePhotoChange}
        className={styles.hiddenInput}
        aria-label="Upload profile photo"
      />
      <input
        ref={backgroundInputRef}
        type="file"
        accept="image/*"
        onChange={handleBackgroundPhotoChange}
        className={styles.hiddenInput}
        aria-label="Upload background photo"
      />
    </div>
  );
};

export default ProfileHeader;