import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Lang = "en" | "bn";

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  "nav.home": { en: "Home", bn: "হোম" },
  "nav.services": { en: "Services", bn: "সেবাসমূহ" },
  "nav.projects": { en: "Projects", bn: "প্রজেক্টস" },
  "nav.skills": { en: "Skills", bn: "দক্ষতা" },
  "nav.about": { en: "About", bn: "সম্পর্কে" },
  "nav.contact": { en: "Contact", bn: "যোগাযোগ" },
  "nav.hire": { en: "Hire Me", bn: "আমাকে নিয়োগ করুন" },

  // Hero
  "hero.badge": { en: "Available for hire", bn: "নিয়োগের জন্য উপলব্ধ" },
  "hero.greeting": { en: "Hi, I'm", bn: "হ্যালো, আমি" },
  "hero.tagline": {
    en: "Web Developer • Discord Developer • SA-MP Developer • Graphics Designer",
    bn: "ওয়েব ডেভেলপার • ডিসকর্ড ডেভেলপার • SA-MP ডেভেলপার • গ্রাফিক্স ডিজাইনার",
  },
  "hero.bio": {
    en: "I build fast websites, Discord automation, SA-MP systems, and clean visual designs.",
    bn: "আমি দ্রুত ওয়েবসাইট, ডিসকর্ড অটোমেশন, SA-MP সিস্টেম এবং পরিচ্ছন্ন ভিজ্যুয়াল ডিজাইন তৈরি করি।",
  },
  "hero.services": { en: "View Services", bn: "সেবা দেখুন" },
  "hero.work": { en: "My Work", bn: "আমার কাজ" },
  "hero.scroll": { en: "Scroll", bn: "স্ক্রল" },

  // Trust badges
  "trust.fast": { en: "Fast Delivery", bn: "দ্রুত ডেলিভারি" },
  "trust.fast.desc": { en: "Quick turnaround times", bn: "দ্রুত কাজ সম্পন্ন" },
  "trust.code": { en: "Clean Code", bn: "পরিষ্কার কোড" },
  "trust.code.desc": { en: "Maintainable & scalable", bn: "রক্ষণাবেক্ষণযোগ্য ও স্কেলেবল" },
  "trust.support": { en: "Friendly Support", bn: "বন্ধুত্বপূর্ণ সাপোর্ট" },
  "trust.support.desc": { en: "Always here to help", bn: "সবসময় সাহায্যের জন্য আছি" },
  "trust.secure": { en: "Secure & Reliable", bn: "নিরাপদ ও নির্ভরযোগ্য" },
  "trust.secure.desc": { en: "Built with best practices", bn: "সেরা পদ্ধতিতে তৈরি" },

  // Section headings
  "section.services": { en: "Services", bn: "সেবাসমূহ" },
  "section.services.sub": { en: "What I can build for you", bn: "আমি আপনার জন্য কী তৈরি করতে পারি" },
  "section.services.sub2": { en: "Premium solutions for your digital needs", bn: "আপনার ডিজিটাল প্রয়োজনের জন্য প্রিমিয়াম সমাধান" },
  "section.projects": { en: "Featured Projects", bn: "বিশেষ প্রজেক্ট" },
  "section.projects.sub": { en: "Some of my recent work", bn: "আমার সাম্প্রতিক কিছু কাজ" },
  "section.projects.sub2": { en: "A selection of my recent work", bn: "আমার সাম্প্রতিক কাজের সংকলন" },
  "section.skills": { en: "Skills & Tools", bn: "দক্ষতা ও টুলস" },
  "section.skills.sub": { en: "Technologies I work with", bn: "যে প্রযুক্তিগুলো আমি ব্যবহার করি" },
  "section.skills.sub2": { en: "Technologies and tools I use daily", bn: "যে প্রযুক্তি ও টুল আমি প্রতিদিন ব্যবহার করি" },
  "section.testimonials": { en: "What Clients Say", bn: "ক্লায়েন্টরা কী বলেন" },
  "section.testimonials.sub": { en: "Trusted by clients worldwide", bn: "বিশ্বজুড়ে ক্লায়েন্টদের বিশ্বাসভাজন" },
  "section.howIWork": { en: "How I Work", bn: "আমি কীভাবে কাজ করি" },
  "section.howIWork.sub": { en: "A streamlined process for great results", bn: "দুর্দান্ত ফলাফলের জন্য সুবিন্যস্ত প্রক্রিয়া" },
  "section.faq": { en: "FAQ", bn: "প্রশ্নোত্তর" },
  "section.faq.sub": { en: "Common questions answered", bn: "সাধারণ প্রশ্নের উত্তর" },
  "section.comparison": { en: "Service Comparison", bn: "সেবা তুলনা" },
  "section.comparison.sub": { en: "Compare features across services", bn: "সেবাগুলোর মধ্যে ফিচার তুলনা করুন" },
  "section.strengths": { en: "Why Choose Me", bn: "কেন আমাকে বেছে নেবেন" },
  "section.strengths.sub": { en: "What makes my service different", bn: "আমার সেবা কেন আলাদা" },
  "contact.response": { en: "Usually replies within a few hours", bn: "সাধারণত কয়েক ঘণ্টার মধ্যে উত্তর দেন" },

  // CTA
  "cta.title": { en: "Ready to start your project?", bn: "আপনার প্রজেক্ট শুরু করতে প্রস্তুত?" },
  "cta.subtitle": { en: "Let's build something amazing together.", bn: "চলুন একসাথে অসাধারণ কিছু তৈরি করি।" },
  "cta.quote": { en: "Request Quote", bn: "কোটেশন চান" },

  // View buttons
  "btn.viewAll": { en: "View All Projects", bn: "সব প্রজেক্ট দেখুন" },
  "btn.viewDetails": { en: "View Details", bn: "বিস্তারিত দেখুন" },
  "btn.requestQuote": { en: "Request Quote", bn: "কোটেশন চান" },
  "btn.sendMessage": { en: "Send Message", bn: "মেসেজ পাঠান" },
  "btn.sending": { en: "Sending...", bn: "পাঠানো হচ্ছে..." },

  // About page
  "about.title": { en: "About", bn: "সম্পর্কে" },
  "about.intro": {
    en: "I'm a freelance developer and designer who loves building digital products that solve real problems. From websites to Discord bots, SA-MP servers to brand designs — I bring ideas to life with clean code and sharp visuals.",
    bn: "আমি একজন ফ্রিল্যান্স ডেভেলপার ও ডিজাইনার যিনি সত্যিকারের সমস্যা সমাধান করে এমন ডিজিটাল পণ্য তৈরি করতে ভালোবাসেন। ওয়েবসাইট থেকে ডিসকর্ড বট, SA-MP সার্ভার থেকে ব্র্যান্ড ডিজাইন — আমি পরিষ্কার কোড ও তীক্ষ্ণ ভিজ্যুয়ালের মাধ্যমে ধারণাকে বাস্তবে রূপ দিই।",
  },
  "about.journey": { en: "My Journey", bn: "আমার যাত্রা" },
  "about.whyMe": { en: "Why Clients Choose Me", bn: "ক্লায়েন্টরা কেন আমাকে বেছে নেন" },

  // About stats
  "stat.projects": { en: "Projects Delivered", bn: "সম্পন্ন প্রজেক্ট" },
  "stat.clients": { en: "Happy Clients", bn: "সন্তুষ্ট ক্লায়েন্ট" },
  "stat.experience": { en: "Years Experience", bn: "বছরের অভিজ্ঞতা" },
  "stat.technologies": { en: "Technologies", bn: "প্রযুক্তি" },

  // About reasons
  "reason.1": { en: "Fast turnaround without compromising quality", bn: "গুণমান বজায় রেখে দ্রুত কাজ সম্পন্ন" },
  "reason.2": { en: "Clean, maintainable, well-documented code", bn: "পরিষ্কার, রক্ষণাবেক্ষণযোগ্য, সুন্দরভাবে ডকুমেন্টেড কোড" },
  "reason.3": { en: "Transparent communication throughout", bn: "সর্বত্র স্বচ্ছ যোগাযোগ" },
  "reason.4": { en: "Post-delivery support included", bn: "ডেলিভারি-পরবর্তী সাপোর্ট অন্তর্ভুক্ত" },
  "reason.5": { en: "Fair pricing with flexible payment", bn: "নমনীয় পেমেন্ট সহ ন্যায্য মূল্য" },

  // Timeline
  "timeline.2019": { en: "Started Coding", bn: "কোডিং শুরু" },
  "timeline.2019.desc": { en: "Began learning web development and SA-MP scripting.", bn: "ওয়েব ডেভেলপমেন্ট ও SA-MP স্ক্রিপ্টিং শেখা শুরু করি।" },
  "timeline.2020": { en: "First Freelance Projects", bn: "প্রথম ফ্রিল্যান্স প্রজেক্ট" },
  "timeline.2020.desc": { en: "Started taking on clients for websites and Discord bots.", bn: "ওয়েবসাইট ও ডিসকর্ড বটের জন্য ক্লায়েন্ট নেওয়া শুরু করি।" },
  "timeline.2021": { en: "Expanded Services", bn: "সেবা সম্প্রসারণ" },
  "timeline.2021.desc": { en: "Added graphics design and SA-MP development to my services.", bn: "আমার সেবায় গ্রাফিক্স ডিজাইন ও SA-MP ডেভেলপমেন্ট যোগ করি।" },
  "timeline.2022": { en: "Growing Client Base", bn: "ক্লায়েন্ট বৃদ্ধি" },
  "timeline.2022.desc": { en: "Built a reputation for quality work and reliable delivery.", bn: "মানসম্মত কাজ ও নির্ভরযোগ্য ডেলিভারির জন্য সুনাম তৈরি করি।" },
  "timeline.2023": { en: "Premium Development", bn: "প্রিমিয়াম ডেভেলপমেন্ট" },
  "timeline.2023.desc": { en: "Focused on premium, high-quality solutions for discerning clients.", bn: "বিচক্ষণ ক্লায়েন্টদের জন্য প্রিমিয়াম, উচ্চমানের সমাধানে মনোনিবেশ করি।" },
  "timeline.2024": { en: "Full-Stack Expertise", bn: "ফুল-স্ট্যাক দক্ষতা" },
  "timeline.2024.desc": { en: "Mastered modern frameworks and expanded into full-stack development.", bn: "আধুনিক ফ্রেমওয়ার্ক আয়ত্ত করি এবং ফুল-স্ট্যাক ডেভেলপমেন্টে সম্প্রসারিত হই।" },

  // Contact
  "contact.title": { en: "Get In Touch", bn: "যোগাযোগ করুন" },
  "contact.sub": { en: "Let's discuss your project", bn: "আপনার প্রজেক্ট নিয়ে আলোচনা করি" },
  "contact.quick": { en: "Quick Contact", bn: "দ্রুত যোগাযোগ" },
  "contact.name": { en: "Your Name", bn: "আপনার নাম" },
  "contact.email": { en: "Email Address", bn: "ইমেইল ঠিকানা" },
  "contact.service": { en: "Select Service", bn: "সেবা নির্বাচন করুন" },
  "contact.budget": { en: "Budget Range", bn: "বাজেট পরিসর" },
  "contact.message": { en: "Tell me about your project...", bn: "আপনার প্রজেক্ট সম্পর্কে বলুন..." },
  "contact.sent": { en: "Message sent!", bn: "মেসেজ পাঠানো হয়েছে!" },
  "contact.sentDesc": { en: "I'll get back to you as soon as possible.", bn: "যত তাড়াতাড়ি সম্ভব উত্তর দেব।" },
  "contact.fast": { en: "Fast response", bn: "দ্রুত উত্তর" },
  "contact.moderate": { en: "Moderate response", bn: "মাঝারি উত্তর" },

  // Services
  "service.web": { en: "Web Development", bn: "ওয়েব ডেভেলপমেন্ট" },
  "service.web.desc": { en: "Landing pages, business websites, and full-stack features with auth, dashboards, and forms.", bn: "ল্যান্ডিং পেজ, বিজনেস ওয়েবসাইট এবং অথ, ড্যাশবোর্ড ও ফর্ম সহ ফুল-স্ট্যাক ফিচার।" },
  "service.discord": { en: "Discord Development", bn: "ডিসকর্ড ডেভেলপমেন্ট" },
  "service.discord.desc": { en: "Custom bots with moderation, tickets, logging, and full server setup with automation.", bn: "মডারেশন, টিকেট, লগিং সহ কাস্টম বট এবং অটোমেশন সহ সম্পূর্ণ সার্ভার সেটআপ।" },
  "service.samp": { en: "SA-MP Development", bn: "SA-MP ডেভেলপমেন্ট" },
  "service.samp.desc": { en: "Gameplay systems, admin tools, bug fixes, and performance tuning for SA-MP servers.", bn: "SA-MP সার্ভারের জন্য গেমপ্লে সিস্টেম, অ্যাডমিন টুল, বাগ ফিক্স এবং পারফরম্যান্স টিউনিং।" },
  "service.design": { en: "Graphics Design", bn: "গ্রাফিক্স ডিজাইন" },
  "service.design.desc": { en: "YouTube thumbnails, banners, logo design, and complete brand kits.", bn: "ইউটিউব থাম্বনেইল, ব্যানার, লোগো ডিজাইন এবং সম্পূর্ণ ব্র্যান্ড কিট।" },
  "service.digital": { en: "Digital Subscription Assistance", bn: "ডিজিটাল সাবস্ক্রিপশন সহায়তা" },
  "service.digital.desc": { en: "Official subscription purchase assistance and setup guidance.", bn: "অফিসিয়াল সাবস্ক্রিপশন ক্রয় সহায়তা ও সেটআপ গাইডেন্স।" },
  "service.digital.disclaimer": {
    en: "I do not sell or share third-party account credentials. I only provide official purchase guidance and setup assistance.",
    bn: "আমি তৃতীয় পক্ষের অ্যাকাউন্ট ক্রেডেনশিয়াল বিক্রি বা শেয়ার করি না। আমি শুধুমাত্র অফিসিয়াল ক্রয় গাইডেন্স ও সেটআপ সহায়তা প্রদান করি।",
  },

  // Process steps
  "process.1": { en: "Discovery", bn: "আলোচনা" },
  "process.1.desc": { en: "We discuss your needs, goals, and vision for the project.", bn: "আমরা আপনার প্রয়োজন, লক্ষ্য এবং প্রজেক্টের ভিশন নিয়ে আলোচনা করি।" },
  "process.2": { en: "Planning", bn: "পরিকল্পনা" },
  "process.2.desc": { en: "I create a detailed plan with timelines and deliverables.", bn: "আমি টাইমলাইন ও ডেলিভারেবল সহ বিস্তারিত পরিকল্পনা তৈরি করি।" },
  "process.3": { en: "Development", bn: "ডেভেলপমেন্ট" },
  "process.3.desc": { en: "Building your project with regular updates and feedback.", bn: "নিয়মিত আপডেট ও ফিডব্যাক সহ আপনার প্রজেক্ট তৈরি করি।" },
  "process.4": { en: "Delivery", bn: "ডেলিভারি" },
  "process.4.desc": { en: "Final review, testing, and handover with full support.", bn: "চূড়ান্ত পর্যালোচনা, টেস্টিং এবং সম্পূর্ণ সাপোর্ট সহ হ্যান্ডওভার।" },

  // FAQs
  "faq.1.q": { en: "How long does a typical project take?", bn: "একটি সাধারণ প্রজেক্টে কত সময় লাগে?" },
  "faq.1.a": { en: "Depends on complexity. Simple websites: 3-7 days. Discord bots: 2-5 days. Complex projects: 1-3 weeks.", bn: "জটিলতার উপর নির্ভর করে। সাধারণ ওয়েবসাইট: ৩-৭ দিন। ডিসকর্ড বট: ২-৫ দিন। জটিল প্রজেক্ট: ১-৩ সপ্তাহ।" },
  "faq.2.q": { en: "What payment methods do you accept?", bn: "আপনি কোন পেমেন্ট পদ্ধতি গ্রহণ করেন?" },
  "faq.2.a": { en: "I accept various payment methods including mobile banking and digital wallets. Details shared after discussion.", bn: "আমি মোবাইল ব্যাংকিং ও ডিজিটাল ওয়ালেট সহ বিভিন্ন পেমেন্ট পদ্ধতি গ্রহণ করি। আলোচনার পর বিস্তারিত জানানো হয়।" },
  "faq.3.q": { en: "Do you provide ongoing support?", bn: "আপনি কি চলমান সাপোর্ট দেন?" },
  "faq.3.a": { en: "Yes! I offer post-delivery support and maintenance packages for all projects.", bn: "হ্যাঁ! আমি সব প্রজেক্টের জন্য ডেলিভারি-পরবর্তী সাপোর্ট ও মেইনটেন্যান্স প্যাকেজ অফার করি।" },
  "faq.4.q": { en: "Can I see progress during development?", bn: "ডেভেলপমেন্ট চলাকালীন আমি কি অগ্রগতি দেখতে পারি?" },
  "faq.4.a": { en: "Absolutely. I provide regular updates and previews throughout the development process.", bn: "অবশ্যই। আমি ডেভেলপমেন্ট প্রক্রিয়া জুড়ে নিয়মিত আপডেট ও প্রিভিউ প্রদান করি।" },

  // Projects
  "project.problem": { en: "Problem", bn: "সমস্যা" },
  "project.solution": { en: "Solution", bn: "সমাধান" },
  "project.stack": { en: "Stack", bn: "স্ট্যাক" },
  "project.outcome": { en: "Outcome", bn: "ফলাফল" },

  // Footer
  "footer.quickLinks": { en: "Quick Links", bn: "দ্রুত লিংক" },
  "footer.connect": { en: "Connect", bn: "সংযোগ" },
  "footer.rights": { en: "All rights reserved.", bn: "সর্বস্বত্ব সংরক্ষিত।" },
  "footer.terms": { en: "Terms", bn: "শর্তাবলী" },
  "footer.privacy": { en: "Privacy", bn: "গোপনীয়তা" },
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      return (localStorage.getItem("lang") as Lang) || "en";
    } catch {
      return "en";
    }
  });

  const handleSetLang = useCallback((l: Lang) => {
    setLang(l);
    try { localStorage.setItem("lang", l); } catch {}
  }, []);

  const t = useCallback((key: string) => {
    return translations[key]?.[lang] || translations[key]?.en || key;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
