import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.profileSection}>
          <div className={styles.avatar}>
            <span className={styles.initials}>YZ</span>
          </div>
          <div className={styles.headerInfo}>
            <h1 className={styles.name}>Yabes Elkana Zega</h1>
            <p className={styles.title}>Web Developer</p>
            <p className={styles.location}>Jakarta Pusat, DKI Jakarta</p>
          </div>
        </div>
        
        <div className={styles.contact}>
          <div className={styles.contactItem}>
            <span>📞</span>
            <a href="tel:082163990631">082163990631</a>
          </div>
          <div className={styles.contactItem}>
            <span>✉️</span>
            <a href="mailto:yabeszega1997@gmail.com">yabeszega1997@gmail.com</a>
          </div>
          <div className={styles.contactItem}>
            <span>💼</span>
            <a href="https://www.linkedin.com/in/yabeselkanazega" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>About Me</h2>
          <p>
            I am currently working as a Web Developer at PT Senja Solusi, specializing in web application development. 
            I am skilled in modern web technologies and have experience building responsive, high-performance web applications. 
            I can work both independently and as part of a team.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Technical Skills</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3>Frontend</h3>
              <div className={styles.skills}>
                <span className={styles.skill}>HTML</span>
                <span className={styles.skill}>CSS</span>
                <span className={styles.skill}>SCSS</span>
                <span className={styles.skill}>JavaScript</span>
                <span className={styles.skill}>TypeScript</span>
                <span className={styles.skill}>jQuery</span>
                <span className={styles.skill}>Vue.js</span>
                <span className={styles.skill}>React.js</span>
                <span className={styles.skill}>React Native</span>
              </div>
            </div>
            
            <div className={styles.skillCategory}>
              <h3>Backend & Database</h3>
              <div className={styles.skills}>
                <span className={styles.skill}>PHP</span>
                <span className={styles.skill}>Laravel</span>
                <span className={styles.skill}>Express.js</span>
                <span className={styles.skill}>API Lumen</span>
                <span className={styles.skill}>PostgreSQL</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Work Experience</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>Apr 2024 - Present</div>
              <div className={styles.timelineContent}>
                <h3>Web Developer - PT. Senja Solusi</h3>
                <ul>
                  <li>Created website SWISFROM from Swiss</li>
                  <li>Developed Carbon Clear website</li>
                  <li>Built Gomining website</li>
                  <li>Created Schlossatelier website from Swiss</li>
                  <li>Managing Anambas-Fondation website from Riau</li>
                  <li>Managing ELC (English Language Center) website</li>
                  <li>Managing CISL website</li>
                </ul>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>Jan 2017 - Jul 2018</div>
              <div className={styles.timelineContent}>
                <h3>IT Support - CV. POINT</h3>
                <ul>
                  <li>Designed company website</li>
                  <li>Created and inspected wireless networks</li>
                  <li>Maintained client-server systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Education</h2>
          <div className={styles.education}>
            <div className={styles.educationItem}>
              <h3>Bachelor's in Computer Engineering</h3>
              <p>Universitas Pembangunan Panca Budi Medan</p>
              <p>GPA: 3.38/4.00 • Apr 2022</p>
            </div>
            <div className={styles.educationItem}>
              <h3>Fullstack Web and Mobile Development</h3>
              <p>Pijar Camp • Jun 2023</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Notable Projects</h2>
          <div className={styles.projects}>
            <div className={styles.project}>
              <h3>Air Pollution Detection System</h3>
              <p>Arduino-based system with sound notifications for air quality monitoring</p>
            </div>
            <div className={styles.project}>
              <h3>IoT Smart Garbage Cans</h3>
              <p>Smartphone-integrated smart waste management system</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Yabes Elkana Zega. All rights reserved.</p>
      </footer>
    </div>
  );
}