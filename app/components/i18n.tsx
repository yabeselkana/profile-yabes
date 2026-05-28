'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Locale = 'en' | 'id';

type Dictionary = Record<string, string>;

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    'nav.home': 'Home',
    'nav.company': 'Company',
    'nav.technology': 'Technology',
    'nav.caseStudies': 'Case Studies',
    'nav.credentials': 'Credentials',
    'nav.innovation': 'Innovation',
    'nav.contact': 'Contact',
    'nav.startProject': 'Start Project',
    'brand.subtitle': 'IT, AI & Web Consultant',
    'footer.tagline': 'IT, AI & Web Technology',

    'hero.eyebrow': 'IT, AI & Web Technology Consultant',
    'hero.title': 'Build Smart Digital Systems.',
    'hero.lead': 'IT, AI, and web solutions for modern business operations.',
    'hero.cta.primary': 'Discuss Project',
    'hero.cta.secondary': 'View Work',
    'hero.system': 'Technology System',
    'hero.network': 'Connected stack for web, AI, and operations',
    'hero.metric.projects': 'Delivered web projects',
    'hero.metric.services': 'Core service areas',
    'hero.metric.delivery': 'Active client delivery',
    'hero.process': 'Strategy, build, launch, improve',
    'hero.slide.ai.label': 'AI Automation',
    'hero.slide.ai.title': 'Automate smarter workflows.',
    'hero.slide.ai.description': 'AI-assisted flows for content, reports, and operations.',
    'hero.slide.web.label': 'Web Platforms',
    'hero.slide.web.title': 'Build reliable web systems.',
    'hero.slide.web.description': 'Fast websites, dashboards, and scalable frontend apps.',
    'hero.slide.cloud.label': 'Cloud Ready',
    'hero.slide.cloud.title': 'Plan clean integrations.',
    'hero.slide.cloud.description': 'API, database, and deployment flow built to grow.',

    'skills.eyebrow': 'Technology Capability',
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Technology stack for building structured websites, applications, APIs, and AI workflows.',
    'skills.frontend.description': 'Modern responsive interfaces that are clean and maintainable.',
    'skills.backend.description': 'APIs, databases, and data structure for business applications.',
    'skills.ai.description': 'AI-assisted digital workflows for repeated operational processes.',
    'skills.focus': 'Focus',
    'skills.flow.analyze': 'Analyze',
    'skills.flow.analyze.text': 'Understand needs, processes, and main problems.',
    'skills.flow.design': 'Design',
    'skills.flow.design.text': 'Plan system structure, UI, data, and integrations.',
    'skills.flow.build': 'Build',
    'skills.flow.build.text': 'Develop applications with maintainable components.',
    'skills.flow.improve': 'Improve',
    'skills.flow.improve.text': 'Evaluate, optimize, and grow the next features.',

    'about.service.ai': 'Design AI-assisted workflows for repeated business processes.',
    'about.service.web': 'Build fast, responsive, and maintainable websites and web apps.',
    'about.service.api': 'Connect frontend, backend, database, and external services cleanly.',
    'about.service.cloud': 'Prepare deployment structure, data flow, and technical documentation.',
    'about.eyebrow': 'About Company',
    'about.title': 'A Few Words About Yabes Tech',
    'about.subtitle': 'IT consulting driven by practical technology',
    'about.description.one': 'Yabes Tech Consulting helps design and build digital systems for business needs: websites, web apps, API integration, databases, and AI-ready workflows.',
    'about.description.two': 'The focus is simple: understand the need, define a clear technical structure, then build products that are clean, responsive, and ready to improve.',
    'about.portfolio': 'Portfolio',
    'about.downloadCv': 'Download CV',
    'about.timeline.fullstack': 'Frontend, backend, and database for business application needs.',
    'about.timeline.api': 'API structure and integration so data can flow between systems.',
    'about.timeline.ai': 'AI usage to speed up workflows and technical documentation.',
    'about.timeline.delivery': 'Build, check, and improve products step by step.',
    'about.process': 'Analyze requirements, design structure, build product, improve system.',

    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Selected web projects delivered across company profiles, education platforms, booking systems, and digital product websites.',
    'projects.open': 'Open Project',

    'innovation.title': 'Notable Projects',
    'innovation.subtitle': 'Innovative solutions combining hardware and software technologies',
    'innovation.github': 'GitHub Projects',
    'innovation.github.view': 'View GitHub Profile',
    'innovation.repo': 'Repository',
    'innovation.backend': 'Backend',
    'innovation.demo': 'Live Demo',
    'status.completed': 'Completed',

    'education.title': 'Education',
    'education.achievements': 'Key Achievements:',
    'education.completed': 'Completed:',
    'education.gpa': 'GPA',
    'education.degree': 'Bachelor Degree',

    'contact.eyebrow': 'Consultation & Feedback',
    'contact.title': 'Tell me what can be improved',
    'contact.subtitle': 'Send suggestions, project ideas, or IT consultation requests. The form prepares a WhatsApp message so the conversation can start faster.',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.bestFor': 'Best for',
    'contact.bestForText': 'Website improvement, system planning, frontend development, and practical IT consultation.',
    'contact.name': 'Name',
    'contact.name.placeholder': 'Your name',
    'contact.email.placeholder': 'your@email.com',
    'contact.topic': 'Topic',
    'contact.topic.website': 'Website suggestion',
    'contact.topic.consultation': 'IT consultation',
    'contact.topic.collaboration': 'Project collaboration',
    'contact.topic.feedback': 'Technical feedback',
    'contact.message': 'Suggestion',
    'contact.message.placeholder': 'Write your suggestion or project need...',
    'contact.submit': 'Send to WhatsApp',
    'contact.status.opening': 'WhatsApp is opening with your message ready to send.',
    'contact.status.spam': 'Spam detected. Message was not sent.',
    'contact.status.short': 'Please write a clearer message before sending.',
    'contact.status.wait': 'Please wait {seconds} seconds before sending another message.',
    'contact.chat': 'WhatsApp Chat',
    'wa.quick': 'Hello Yabes Tech, I want to consult about a website, AI, or digital system.',
    'wa.formIntro': 'Hello Yabes Tech, I want to send a message from the website.',
    'wa.name': 'Name',
    'wa.email': 'Email',
    'wa.topic': 'Topic',
    'wa.message': 'Message',
  },
  id: {
    'nav.home': 'Beranda',
    'nav.company': 'Perusahaan',
    'nav.technology': 'Teknologi',
    'nav.caseStudies': 'Studi Kasus',
    'nav.credentials': 'Kredensial',
    'nav.innovation': 'Inovasi',
    'nav.contact': 'Kontak',
    'nav.startProject': 'Mulai Proyek',
    'brand.subtitle': 'Konsultan IT, AI & Web',
    'footer.tagline': 'Teknologi IT, AI & Web',

    'hero.eyebrow': 'Konsultan Teknologi IT, AI & Web',
    'hero.title': 'Bangun Sistem Digital Cerdas.',
    'hero.lead': 'Solusi IT, AI, dan web untuk operasional bisnis modern.',
    'hero.cta.primary': 'Diskusi Proyek',
    'hero.cta.secondary': 'Lihat Karya',
    'hero.system': 'Sistem Teknologi',
    'hero.network': 'Stack terhubung untuk web, AI, dan operasional',
    'hero.metric.projects': 'Project web selesai',
    'hero.metric.services': 'Area layanan utama',
    'hero.metric.delivery': 'Delivery aktif',
    'hero.process': 'Strategi, bangun, rilis, tingkatkan',
    'hero.slide.ai.label': 'Otomasi AI',
    'hero.slide.ai.title': 'Otomasi workflow lebih cerdas.',
    'hero.slide.ai.description': 'Alur berbantu AI untuk konten, laporan, dan operasional.',
    'hero.slide.web.label': 'Platform Web',
    'hero.slide.web.title': 'Bangun sistem web yang andal.',
    'hero.slide.web.description': 'Website, dashboard, dan aplikasi frontend yang scalable.',
    'hero.slide.cloud.label': 'Siap Cloud',
    'hero.slide.cloud.title': 'Rancang integrasi yang rapi.',
    'hero.slide.cloud.description': 'API, database, dan deployment flow yang siap berkembang.',

    'skills.eyebrow': 'Kapabilitas Teknologi',
    'skills.title': 'Keahlian Teknis',
    'skills.subtitle': 'Stack teknologi untuk membangun website, aplikasi, API, dan workflow AI yang lebih terstruktur.',
    'skills.frontend.description': 'Interface modern yang responsif, rapi, dan mudah dikembangkan.',
    'skills.backend.description': 'API, database, dan struktur data untuk kebutuhan aplikasi bisnis.',
    'skills.ai.description': 'Workflow digital berbantu AI untuk proses operasional berulang.',
    'skills.focus': 'Fokus',
    'skills.flow.analyze': 'Analisis',
    'skills.flow.analyze.text': 'Memahami kebutuhan, proses, dan masalah utama.',
    'skills.flow.design': 'Desain',
    'skills.flow.design.text': 'Menyusun struktur sistem, UI, data, dan integrasi.',
    'skills.flow.build': 'Bangun',
    'skills.flow.build.text': 'Mengembangkan aplikasi dengan komponen yang maintainable.',
    'skills.flow.improve': 'Tingkatkan',
    'skills.flow.improve.text': 'Evaluasi, optimasi, dan pengembangan fitur lanjutan.',

    'about.service.ai': 'Merancang alur kerja yang bisa dibantu AI untuk proses bisnis yang berulang.',
    'about.service.web': 'Membangun website dan aplikasi web yang cepat, responsif, dan mudah dirawat.',
    'about.service.api': 'Menghubungkan frontend, backend, database, dan layanan eksternal secara rapi.',
    'about.service.cloud': 'Menyiapkan struktur deployment, data flow, dan dokumentasi teknis.',
    'about.eyebrow': 'Tentang Perusahaan',
    'about.title': 'Sedikit Tentang Yabes Tech',
    'about.subtitle': 'Konsultasi IT berbasis teknologi praktis',
    'about.description.one': 'Yabes Tech Consulting membantu merancang dan membangun sistem digital untuk kebutuhan bisnis: website, aplikasi web, integrasi API, database, dan workflow yang siap ditingkatkan dengan AI.',
    'about.description.two': 'Fokusnya sederhana: memahami kebutuhan, menyusun struktur teknis yang jelas, lalu membangun produk yang rapi, responsif, dan dapat dikembangkan lagi.',
    'about.portfolio': 'Portfolio',
    'about.downloadCv': 'Unduh CV',
    'about.timeline.fullstack': 'Frontend, backend, dan database untuk kebutuhan aplikasi bisnis.',
    'about.timeline.api': 'Struktur API dan integrasi agar data dapat mengalir antar sistem.',
    'about.timeline.ai': 'Pemanfaatan AI untuk mempercepat proses dan dokumentasi kerja.',
    'about.timeline.delivery': 'Membangun, mengecek, dan meningkatkan produk secara bertahap.',
    'about.process': 'Analisis kebutuhan, desain struktur, bangun produk, tingkatkan sistem.',

    'projects.title': 'Project Pilihan',
    'projects.subtitle': 'Pilihan project web untuk company profile, platform edukasi, sistem booking, dan website produk digital.',
    'projects.open': 'Buka Project',

    'innovation.title': 'Project Lainnya',
    'innovation.subtitle': 'Solusi inovatif yang menggabungkan teknologi hardware dan software',
    'innovation.github': 'Project GitHub',
    'innovation.github.view': 'Lihat Profil GitHub',
    'innovation.repo': 'Repository',
    'innovation.backend': 'Backend',
    'innovation.demo': 'Live Demo',
    'status.completed': 'Selesai',

    'education.title': 'Pendidikan',
    'education.achievements': 'Pencapaian Utama:',
    'education.completed': 'Selesai:',
    'education.gpa': 'IPK',
    'education.degree': 'Sarjana',

    'contact.eyebrow': 'Konsultasi & Masukan',
    'contact.title': 'Ceritakan yang bisa ditingkatkan',
    'contact.subtitle': 'Kirim saran, ide project, atau kebutuhan konsultasi IT. Form ini menyiapkan pesan WhatsApp agar percakapan bisa dimulai lebih cepat.',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.bestFor': 'Cocok untuk',
    'contact.bestForText': 'Pengembangan website, perencanaan sistem, frontend development, dan konsultasi IT praktis.',
    'contact.name': 'Nama',
    'contact.name.placeholder': 'Nama kamu',
    'contact.email.placeholder': 'email@kamu.com',
    'contact.topic': 'Topik',
    'contact.topic.website': 'Saran website',
    'contact.topic.consultation': 'Konsultasi IT',
    'contact.topic.collaboration': 'Kolaborasi project',
    'contact.topic.feedback': 'Masukan teknis',
    'contact.message': 'Saran',
    'contact.message.placeholder': 'Tulis saran atau kebutuhan project...',
    'contact.submit': 'Kirim ke WhatsApp',
    'contact.status.opening': 'WhatsApp sedang dibuka dengan pesan yang siap dikirim.',
    'contact.status.spam': 'Spam terdeteksi. Pesan tidak dikirim.',
    'contact.status.short': 'Tulis pesan yang lebih jelas sebelum mengirim.',
    'contact.status.wait': 'Tunggu {seconds} detik sebelum mengirim pesan lagi.',
    'contact.chat': 'Chat WhatsApp',
    'wa.quick': 'Halo Yabes Tech, saya ingin konsultasi tentang website, AI, atau sistem digital.',
    'wa.formIntro': 'Halo Yabes Tech, saya ingin mengirim pesan dari website.',
    'wa.name': 'Nama',
    'wa.email': 'Email',
    'wa.topic': 'Topik',
    'wa.message': 'Pesan',
  },
};

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, values?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const savedLocale = window.localStorage.getItem('locale');
    if (savedLocale === 'id' || savedLocale === 'en') {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem('locale', nextLocale);
    document.documentElement.lang = nextLocale;
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<I18nContextValue>(() => ({
    locale,
    setLocale,
    t: (key, values) => {
      let text = dictionaries[locale][key] || dictionaries.en[key] || key;
      if (values) {
        Object.entries(values).forEach(([name, value]) => {
          text = text.replaceAll(`{${name}}`, String(value));
        });
      }
      return text;
    },
  }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used inside I18nProvider');
  }
  return context;
};
