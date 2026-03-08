// ============================================================
// CENTRAL CONTENT CONFIG — Edit all site content here
// ============================================================

export const siteConfig = {
  name: "Shahriar Burhan",
  tagline: "Web Developer • Discord Developer • SA-MP Developer • Graphics Designer",
  shortBio: "I build fast websites, Discord automation, SA-MP systems, and clean visual designs.",
  profileImage: "/images/profile-styled.jpg",
  profileImageAlt: "Shahriar Burhan",
  showProfileImage: true,
};

export const socialLinks = {
  discord: { url: "https://discord.gg/wAdhm2R3a", label: "Discord", username: "Burhan10" },
  telegram: { url: "https://t.me/Ladka_ladkii", label: "Telegram" },
  facebook: { url: "https://www.facebook.com/bullavaii01", label: "Facebook" },
  whatsapp: { url: "https://wa.me/8801342133127", label: "WhatsApp" },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const trustBadges = [
  { icon: "Zap", title: "Fast Delivery", desc: "Quick turnaround times" },
  { icon: "Code2", title: "Clean Code", desc: "Maintainable & scalable" },
  { icon: "HeartHandshake", title: "Friendly Support", desc: "Always here to help" },
  { icon: "Shield", title: "Secure & Reliable", desc: "Built with best practices" },
];

export const skillCategories = [
  {
    title: "Web Development",
    skills: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "API Integration", level: 88 },
      { name: "SEO", level: 85 },
      { name: "Performance", level: 87 },
    ],
  },
  {
    title: "Discord Development",
    skills: [
      { name: "Custom Bots", level: 93 },
      { name: "Slash Commands", level: 90 },
      { name: "Moderation Systems", level: 88 },
      { name: "Ticket System", level: 92 },
      { name: "Logging", level: 85 },
      { name: "Role Automation", level: 87 },
    ],
  },
  {
    title: "SA-MP Development",
    skills: [
      { name: "Pawn Scripting", level: 90 },
      { name: "Server Systems", level: 88 },
      { name: "Commands", level: 92 },
      { name: "Optimization", level: 85 },
      { name: "Mapping Integration", level: 80 },
    ],
  },
  {
    title: "Graphics Design",
    skills: [
      { name: "Thumbnails", level: 88 },
      { name: "Banners", level: 90 },
      { name: "Logos", level: 85 },
      { name: "Brand Kits", level: 82 },
      { name: "UI Assets", level: 86 },
    ],
  },
];

export const services = [
  {
    id: "web",
    icon: "Globe",
    title: "Web Development",
    desc: "Landing pages, business websites, and full-stack features with auth, dashboards, and forms.",
    pricing: "Starting from $12",
    features: ["Landing Page / Business Website", "Full-stack features (auth, dashboard, forms)", "SEO & Performance Optimization", "Responsive Design"],
    category: "development",
  },
  {
    id: "discord",
    icon: "MessageSquare",
    title: "Discord Development",
    desc: "Custom bots with moderation, tickets, logging, and full server setup with automation.",
    pricing: "Starting from $10",
    features: ["Custom Bot Development", "Server Setup & Automation", "Moderation & Ticket Systems", "Role Automation & Logging"],
    category: "development",
  },
  {
    id: "samp",
    icon: "Gamepad2",
    title: "SA-MP Development",
    desc: "Gameplay systems, admin tools, bug fixes, and performance tuning for SA-MP servers.",
    pricing: "Starting from $10",
    features: ["Gameplay Systems", "Admin Tools", "Bug Fixes", "Performance Tuning"],
    category: "development",
  },
  {
    id: "design",
    icon: "Palette",
    title: "Graphics Design",
    desc: "YouTube thumbnails, banners, logo design, and complete brand kits.",
    pricing: "Starting from $20",
    features: ["YouTube Thumbnails", "Banners & Headers", "Logo / Brand Kit", "UI Assets"],
    category: "design",
  },
  {
    id: "digital",
    icon: "CreditCard",
    title: "Digital Subscription Assistance",
    desc: "Official subscription purchase assistance and setup guidance.",
    pricing: "Contact for quote",
    features: [
      "Official subscription purchase assistance",
      "Gift card / plan guidance (where available)",
      "Account setup + device login support",
      "Paid course enrollment guidance",
    ],
    disclaimer: "I do not sell or share third-party account credentials. I only provide official purchase guidance and setup assistance.",
    category: "other",
  },
];

export const projects = [
  {
    id: "1",
    title: "Next.js Business Website",
    tags: ["Next.js", "Tailwind", "SEO"],
    problem: "Client needed a fast, SEO-optimized business website that converts visitors.",
    solution: "Built a Next.js site with optimized metadata, responsive design, and fast load times.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    outcome: "95+ Lighthouse score, 3x increase in organic traffic.",
    gradient: "from-primary to-accent",
  },
  {
    id: "2",
    title: "Discord Ticket Bot",
    tags: ["Discord.js", "Node.js", "MongoDB"],
    problem: "Community needed an efficient support ticket system for their Discord server.",
    solution: "Custom bot with ticket creation, assignment, transcripts, and analytics.",
    stack: ["Discord.js", "Node.js", "MongoDB"],
    outcome: "Reduced response time by 60%, handled 500+ tickets/month.",
    gradient: "from-accent to-primary",
  },
  {
    id: "3",
    title: "Discord Moderation System",
    tags: ["Discord.js", "Auto-mod", "Logging"],
    problem: "Large server needed automated moderation with detailed logging.",
    solution: "Built a comprehensive moderation system with auto-mod, warns, and audit logs.",
    stack: ["Discord.js", "Node.js", "PostgreSQL"],
    outcome: "90% reduction in spam, full audit trail for all actions.",
    gradient: "from-primary to-glow",
  },
  {
    id: "4",
    title: "SA-MP Airdrop/Events System",
    tags: ["Pawn", "SA-MP", "Events"],
    problem: "Server needed an engaging event system to boost player retention.",
    solution: "Developed airdrop events with rewards, leaderboards, and scheduling.",
    stack: ["Pawn", "MySQL", "SA-MP SDK"],
    outcome: "40% increase in daily active players during events.",
    gradient: "from-accent to-primary",
  },
  {
    id: "5",
    title: "SA-MP Admin Tools Pack",
    tags: ["Pawn", "Admin", "Tools"],
    problem: "Server admins needed better tools for management and moderation.",
    solution: "Comprehensive admin toolkit with player management, bans, and teleports.",
    stack: ["Pawn", "SA-MP SDK", "MySQL"],
    outcome: "Streamlined admin workflow, reduced management time by 50%.",
    gradient: "from-primary to-accent",
  },
  {
    id: "6",
    title: "Branding/Thumbnail Design Pack",
    tags: ["Photoshop", "Illustrator", "Branding"],
    problem: "YouTuber needed a complete brand identity and thumbnail templates.",
    solution: "Designed logo, channel art, thumbnails, and a brand style guide.",
    stack: ["Photoshop", "Illustrator", "Figma"],
    outcome: "Consistent brand identity, 25% increase in click-through rate.",
    gradient: "from-accent to-primary",
  },
];

export const testimonials = [
  {
    name: "Alex M.",
    role: "YouTuber",
    text: "Shahriar delivered exactly what I needed — fast, professional, and great communication throughout.",
    rating: 5,
  },
  {
    name: "Jordan K.",
    role: "Discord Server Owner",
    text: "The bot works flawlessly. Best developer I've worked with for Discord projects. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sam R.",
    role: "SA-MP Server Admin",
    text: "Our server runs smoother than ever. The admin tools pack saved us hours of work every week.",
    rating: 5,
  },
  {
    name: "Lisa T.",
    role: "Small Business Owner",
    text: "My website looks incredible and loads super fast. Shahriar understood my vision perfectly from day one.",
    rating: 5,
  },
  {
    name: "Mike D.",
    role: "Gaming Community Manager",
    text: "The Discord setup was beyond what I expected. Automation, moderation, everything works seamlessly.",
    rating: 5,
  },
  {
    name: "Nadia H.",
    role: "Content Creator",
    text: "Amazing thumbnails and brand kit! My channel looks so much more professional now. Great turnaround time.",
    rating: 5,
  },
];

export const strengths = [
  { icon: "Rocket", title: "Fast Delivery", desc: "Projects delivered on time, every time" },
  { icon: "Gem", title: "Premium Design", desc: "Pixel-perfect, modern aesthetics" },
  { icon: "Code2", title: "Custom Development", desc: "Tailored solutions, not templates" },
  { icon: "LifeBuoy", title: "Reliable Support", desc: "Post-delivery care included" },
];

export const serviceComparison = [
  { feature: "Custom Design", web: true, discord: false, samp: false, design: true },
  { feature: "Performance Optimization", web: true, discord: true, samp: true, design: false },
  { feature: "Ongoing Support", web: true, discord: true, samp: true, design: false },
  { feature: "Source Code Included", web: true, discord: true, samp: true, design: true },
  { feature: "Revision Rounds", web: "2", discord: "2", samp: "1", design: "3" },
  { feature: "Delivery Time", web: "3-7 days", discord: "2-5 days", samp: "2-5 days", design: "1-3 days" },
];

export const aboutTimeline = [
  { year: "2019", title: "Started Coding", desc: "Began learning web development and SA-MP scripting." },
  { year: "2020", title: "First Freelance Projects", desc: "Started taking on clients for websites and Discord bots." },
  { year: "2021", title: "Expanded Services", desc: "Added graphics design and SA-MP development to my services." },
  { year: "2022", title: "Growing Client Base", desc: "Built a reputation for quality work and reliable delivery." },
  { year: "2023", title: "Premium Development", desc: "Focused on premium, high-quality solutions for discerning clients." },
  { year: "2024", title: "Full-Stack Expertise", desc: "Mastered modern frameworks and expanded into full-stack development." },
];

export const processSteps = [
  { step: 1, title: "Discovery", desc: "We discuss your needs, goals, and vision for the project." },
  { step: 2, title: "Planning", desc: "I create a detailed plan with timelines and deliverables." },
  { step: 3, title: "Development", desc: "Building your project with regular updates and feedback." },
  { step: 4, title: "Delivery", desc: "Final review, testing, and handover with full support." },
];

export const faqs = [
  { q: "How long does a typical project take?", a: "Depends on complexity. Simple websites: 3-7 days. Discord bots: 2-5 days. Complex projects: 1-3 weeks." },
  { q: "What payment methods do you accept?", a: "I accept various payment methods including mobile banking and digital wallets. Details shared after discussion." },
  { q: "Do you provide ongoing support?", a: "Yes! I offer post-delivery support and maintenance packages for all projects." },
  { q: "Can I see progress during development?", a: "Absolutely. I provide regular updates and previews throughout the development process." },
];

export const budgetRanges = [
  "Under $50",
  "$50 - $100",
  "$100 - $250",
  "$250 - $500",
  "$500+",
  "Not sure yet",
];
