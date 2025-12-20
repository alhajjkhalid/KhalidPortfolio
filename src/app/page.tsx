'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { 
  Menu, X, ArrowUpRight, Github, Linkedin, Mail, Phone, 
  MapPin, Calendar, Briefcase, GraduationCap, Code, 
  TrendingUp, Users, Video, Database, Zap, Globe,
  ChevronDown, Send, ExternalLink
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: {
    transition: { staggerChildren: 0.1 }
  }
};

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
          <span className="gradient-text">K</span>
          <span className="text-white">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors link-underline"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-5 py-2.5 bg-[#c9a227] text-[#0a0a0b] text-sm font-semibold rounded-lg hover:bg-[#e4c85c] transition-colors"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass mt-2 mx-4 rounded-xl p-6"
        >
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

// Hero Section
function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />
        <motion.div 
          style={{ y }}
          className="absolute top-20 right-[10%] w-px h-40 bg-gradient-to-b from-transparent via-[#c9a227]/30 to-transparent"
        />
        <motion.div 
          style={{ y: useTransform(scrollY, [0, 500], [0, 100]) }}
          className="absolute bottom-40 left-[15%] w-px h-32 bg-gradient-to-b from-transparent via-[#c9a227]/20 to-transparent"
        />
      </div>

      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            variants={stagger}
            initial="initial"
            animate="animate"
            className="order-2 lg:order-1"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/20 text-[#c9a227] text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#c9a227] animate-pulse" />
                Open to Global Remote Opportunities
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Where <span className="gradient-text italic">Diverse Skills</span>
              <br />
              Become Your Edge
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed"
            >
              In a world of specialists, I&apos;ve built my career connecting dots others don&apos;t see. 
              From logistics to code, data to video — range isn&apos;t a weakness, it&apos;s my superpower.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-10">
              <a 
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a0a0b] font-semibold rounded-lg hover:bg-[#e4c85c] transition-all group"
              >
                View My Work
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#262629] text-white font-semibold rounded-lg hover:border-[#c9a227] hover:text-[#c9a227] transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#131316] border border-[#262629] flex items-center justify-center">
                  <span className="text-lg font-bold text-[#c9a227]">7+</span>
                </div>
                <div className="text-sm">
                  <p className="text-white font-medium">Years</p>
                  <p className="text-gray-500">Experience</p>
                </div>
              </div>
              <div className="w-px h-10 bg-[#262629]" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#131316] border border-[#262629] flex items-center justify-center">
                  <span className="text-lg font-bold text-[#c9a227]">8.5</span>
                </div>
                <div className="text-sm">
                  <p className="text-white font-medium">IELTS</p>
                  <p className="text-gray-500">Score</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-[#c9a227]/20 rounded-3xl rotate-3" />
              <div className="absolute -inset-4 border border-[#c9a227]/10 rounded-3xl -rotate-3" />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] animate-pulse-glow">
                <Image
                  src="/profile.jpg"
                  alt="Khalid Alhajj - Operations Manager & Full-Stack Developer"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 bottom-8 glass rounded-xl px-4 py-3"
              >
                <p className="text-xs text-gray-400 mb-1">Based in</p>
                <p className="text-sm font-semibold text-white flex items-center gap-1">
                  <MapPin size={14} className="text-[#c9a227]" />
                  Riyadh, Saudi Arabia
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} className="text-[#c9a227] animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="text-[#c9a227] text-sm font-medium uppercase tracking-widest mb-4 block">
            About Me
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            The Most Successful Problem-Solvers Are 
            <span className="gradient-text italic"> Generalists</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-12">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              In the book <em className="text-[#c9a227]">&quot;Range: How Generalists Triumph in a Specialized World,&quot;</em> David Epstein 
              argues that the most impactful innovators are those who draw from diverse experiences, not narrow expertise.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              That philosophy defines my career. With a Master&apos;s in Entrepreneurship, Full-Stack Web Development 
              certification, and 7+ years leading operations across logistics, tech education, and partnerships — 
              I&apos;ve built a unique toolkit for solving complex, cross-functional challenges.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              My diverse experience isn&apos;t a scattered path — it&apos;s a deliberate strategy. In the age of AI, 
              where narrow skills are easily automated, <strong className="text-white">adaptability and cross-domain thinking 
              are the real competitive advantages.</strong>
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Globe, label: 'Remote-Ready', desc: 'IELTS 8.5 • Fluent English & Arabic' },
              { icon: Zap, label: 'Adaptable', desc: 'Quick learner across domains' },
              { icon: TrendingUp, label: 'Results-Driven', desc: '25% enrollment boost at MERAKI' },
              { icon: Users, label: 'Leader', desc: 'Built & managed cross-functional teams' },
            ].map((item, i) => (
              <div 
                key={i}
                className="glass rounded-xl p-6 card-hover"
              >
                <item.icon className="w-8 h-8 text-[#c9a227] mb-4" />
                <h3 className="text-white font-semibold mb-2">{item.label}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Quote */}
        <motion.blockquote 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 relative"
        >
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c9a227] to-transparent rounded-full" />
          <p 
            className="text-2xl md:text-3xl text-gray-300 italic pl-8 max-w-4xl leading-relaxed"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            &quot;Breadth of training predicts breadth of transfer. The more contexts in which something is learned, 
            the more the learner creates abstract models.&quot;
          </p>
          <footer className="mt-4 pl-8 text-gray-500">
            — David Epstein, Range
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}

// Skills Section
function SkillsSection() {
  const skillClusters = [
    {
      title: 'Technical & Development',
      icon: Code,
      color: '#c9a227',
      skills: ['React', 'JavaScript', 'Node.js', 'HTML/CSS', 'Python', 'SQL', 'API Development']
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      color: '#22c55e',
      skills: ['Tableau', 'Data Analysis', 'Data Visualization', 'A/B Testing', 'SQL Queries', 'MVPs']
    },
    {
      title: 'Operations & Process',
      icon: TrendingUp,
      color: '#3b82f6',
      skills: ['Process Automation', 'BPMN', 'Zapier', 'Power Automate', 'CRM Systems', 'Logistics']
    },
    {
      title: 'Leadership & Strategy',
      icon: Users,
      color: '#ec4899',
      skills: ['Project Management', 'Team Building', 'Mentorship', 'Coaching', 'Strategic Planning']
    },
    {
      title: 'Creative & Media',
      icon: Video,
      color: '#f97316',
      skills: ['Video Production', 'Script Writing', 'Content Creation', 'Brand Storytelling']
    },
    {
      title: 'Business & Commerce',
      icon: Briefcase,
      color: '#8b5cf6',
      skills: ['E-commerce', 'Entrepreneurship', 'Partnership Management', 'Sales Strategy']
    },
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#262629] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a227] text-sm font-medium uppercase tracking-widest mb-4 block">
            Skills & Expertise
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Cross-Domain <span className="gradient-text italic">Capabilities</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My strength lies in connecting these different domains — seeing patterns and solutions 
            that specialists in any single area might miss.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillClusters.map((cluster, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 card-hover group"
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${cluster.color}15` }}
              >
                <cluster.icon size={28} style={{ color: cluster.color }} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{cluster.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cluster.skills.map((skill, j) => (
                  <span 
                    key={j}
                    className="px-3 py-1.5 text-sm rounded-lg bg-[#0a0a0b] text-gray-300 border border-[#262629]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection visualization */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">The Power of Range</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {['Technical', 'Operations', 'Creative', 'Business', 'Data'].map((domain, i) => (
              <span key={i} className="relative">
                <span className="text-[#c9a227] font-medium">{domain}</span>
                {i < 4 && <span className="text-gray-600 mx-2">+</span>}
              </span>
            ))}
            <span className="text-gray-600 mx-2">=</span>
            <span className="text-white font-bold">Unique Solutions</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      title: 'Shift Scheduler Tool',
      category: 'React Application',
      description: 'Developed a sophisticated scheduling algorithm tool with 5-shift and 6-shift modes, featuring rider assignment optimization, validation systems, and capacity management. Adopted company-wide across all Keeta KSA operations.',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'Algorithm Design'],
      impact: 'Improved operational efficiency across all regions',
      link: null,
      featured: true
    },
    {
      title: 'MERAKI Academy Website',
      category: 'Full-Stack Website',
      description: 'Built the complete website from scratch for the coding bootcamp, featuring enrollment systems, curriculum showcase, and optimized landing pages that boosted enrollments by 25%.',
      tech: ['React', 'Node.js', 'Responsive Design', 'SEO'],
      impact: '25% increase in bootcamp enrollments',
      link: 'https://www.meraki-academy.org',
      featured: true
    },
    {
      title: 'Partner Training Certification Program',
      category: 'Training Platform Proposal',
      description: 'Designed a comprehensive 17+ hour training program with 6 modules covering all operational aspects. Features multi-language support (English/Chinese), certification process, and scalable implementation roadmap.',
      tech: ['Curriculum Design', 'LMS', 'Video Production', 'Multi-language'],
      impact: 'Strategic initiative for partner scalability',
      link: null,
      featured: true
    },
    {
      title: 'Last Mile Delivery System',
      category: 'Operations Technology',
      description: 'Collaborated with IT to build a delivery management system enhancing tracking capabilities across Riyadh, Jeddah, and the Eastern Province.',
      tech: ['System Design', 'Logistics Tech', 'Cross-team Collaboration'],
      impact: 'Enhanced delivery tracking across 3 regions',
      link: null,
      featured: false
    },
    {
      title: 'Video Testimonials Production',
      category: 'Creative Production',
      description: 'Produced 3 professional testimonial videos from A to Z — lighting, scripting, filming, and editing. Demonstrated end-to-end creative capability.',
      tech: ['Videography', 'Script Writing', 'Video Editing', 'Lighting'],
      impact: 'Professional marketing assets',
      link: 'https://www.youtube.com/watch?v=o_r7O_2vTH8',
      featured: false
    },
    {
      title: 'West Region Compliance Dashboard',
      category: 'Compliance Tool',
      description: 'Built a compliance monitoring system for the west region operations, ensuring regulatory adherence and operational continuity.',
      tech: ['React', 'Data Visualization', 'Compliance Tracking'],
      impact: 'Streamlined compliance management',
      link: null,
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#c9a227] text-sm font-medium uppercase tracking-widest mb-4 block">
            Featured Work
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Projects That <span className="gradient-text italic">Connect Domains</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Each project showcases how combining technical skills with operational insight 
            and creative thinking leads to impactful solutions.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {projects.filter(p => p.featured).map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 md:p-10 card-hover group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <span className="text-[#c9a227] text-sm font-medium mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#c9a227] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, j) => (
                      <span 
                        key={j}
                        className="px-3 py-1 text-xs rounded-full bg-[#c9a227]/10 text-[#c9a227] border border-[#c9a227]/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp size={16} className="text-green-500" />
                    <span className="text-green-400">{project.impact}</span>
                  </div>
                </div>
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 border border-[#262629] rounded-lg text-gray-300 hover:border-[#c9a227] hover:text-[#c9a227] transition-colors shrink-0"
                  >
                    <ExternalLink size={18} />
                    View Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-xl p-6 card-hover group"
            >
              <span className="text-[#c9a227] text-xs font-medium mb-2 block">
                {project.category}
              </span>
              <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-[#c9a227] transition-colors">
                {project.title}
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-green-400">{project.impact}</span>
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#c9a227] transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Experience Section
function ExperienceSection() {
  const experiences = [
    {
      title: 'Partnership Management Manager',
      company: 'Keeta',
      location: 'Riyadh, Saudi Arabia',
      period: 'May 2025 - Present',
      current: true,
      highlights: [
        'Led successful market launch in the Southern Region, managing 3PL partnerships and rider operations across Jazan and Najran',
        'Developed and implemented a scheduling tool adopted company-wide across all KSA operations',
        'Build and maintain strategic 3PL partner relationships while ensuring compliance with company standards',
        'Managed Driver Card compliance across all KSA regions, ensuring regulatory adherence'
      ]
    },
    {
      title: 'Operations Manager',
      company: 'MERAKI Coding Academy',
      location: 'Riyadh, Saudi Arabia',
      period: 'Jun 2023 - Feb 2025',
      current: false,
      highlights: [
        'Increased job placements and enhanced graduate marketability through strategic overhaul of the Outcomes Phase',
        'Boosted bootcamp enrollments by 25% with the launch of an enrollment-optimized landing page',
        'Achieved significant improvement in operational efficiency by implementing instructional videos and automating recurring tasks',
        'Built the company website from scratch'
      ]
    },
    {
      title: 'Operations Manager',
      company: 'Kwick-Box',
      location: 'Riyadh, Saudi Arabia',
      period: 'Jun 2018 - Sep 2020',
      current: false,
      highlights: [
        'Collaborated with IT department to build the Last Mile Delivery Management system',
        'Designed warehouse plan and organizational structure for Riyadh, Jeddah, and Eastern Province',
        'Optimized logistics operations across multiple regions'
      ]
    },
    {
      title: 'Operations Supervisor',
      company: 'LogicMena',
      location: 'Riyadh, Saudi Arabia',
      period: 'Aug 2015 - May 2018',
      current: false,
      highlights: [
        'Built foundational expertise in logistics and operations management',
        'Gained frontline experience understanding ground-level operational challenges'
      ]
    }
  ];

  const education = [
    {
      degree: 'Full-Stack Web Development Bootcamp',
      school: 'MERAKI Academy',
      location: 'Amman, Jordan',
      period: 'Dec 2023 - May 2024'
    },
    {
      degree: 'M.Sc. in Entrepreneurship',
      school: 'Princess Sumaya University',
      location: 'Amman, Jordan',
      period: 'Nov 2020 - Oct 2022'
    },
    {
      degree: 'B.A. in E-Business & Commerce',
      school: 'University of Petra',
      location: 'Amman, Jordan',
      period: 'Sep 2010 - May 2014'
    }
  ];

  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#262629] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a227] text-sm font-medium uppercase tracking-widest mb-4 block">
            Career Journey
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Experience & <span className="gradient-text italic">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A deliberate path through diverse industries, building adaptable skills 
            that compound with each new challenge.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-[#c9a227]/10 flex items-center justify-center">
                <Briefcase size={20} className="text-[#c9a227]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative pl-8 border-l border-[#262629] hover:border-[#c9a227] transition-colors"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-[#0a0a0b] border-2 border-[#c9a227]" />
                  
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <p className="text-[#c9a227]">{exp.company}</p>
                    </div>
                    {exp.current && (
                      <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] mt-2 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-[#c9a227]/10 flex items-center justify-center">
                <GraduationCap size={20} className="text-[#c9a227]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="glass rounded-xl p-6 card-hover"
                >
                  <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                  <p className="text-[#c9a227] mb-3">{edu.school}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Insight Box */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 rounded-xl border border-[#c9a227]/20 bg-[#c9a227]/5"
            >
              <h4 className="text-lg font-semibold text-white mb-3">Why This Path Matters</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Combining a business foundation (E-Commerce) with strategic thinking (Entrepreneurship) 
                and technical execution (Full-Stack Development) creates a rare profile: someone who 
                understands the business problem, can design the solution, and has the skills to build it.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a227] text-sm font-medium uppercase tracking-widest mb-4 block">
            Get In Touch
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Let&apos;s Build <span className="gradient-text italic">Something Together</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Open to remote opportunities worldwide. Whether you need a problem-solver, 
            a builder, or someone who can wear multiple hats — let&apos;s talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:khaled.alhajj@gmail.com"
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:border-[#c9a227] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#c9a227]/10 flex items-center justify-center group-hover:bg-[#c9a227]/20 transition-colors">
                    <Mail size={20} className="text-[#c9a227]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-white">khaled.alhajj@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+966545589872"
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:border-[#c9a227] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#c9a227]/10 flex items-center justify-center group-hover:bg-[#c9a227]/20 transition-colors">
                    <Phone size={20} className="text-[#c9a227]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-white">+966 54 558 9872</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 glass rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-[#c9a227]/10 flex items-center justify-center">
                    <MapPin size={20} className="text-[#c9a227]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-white">Riyadh, Saudi Arabia</p>
                    <p className="text-xs text-[#c9a227]">Open to global remote work</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect Online</h4>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/khalidalhajj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:border-[#c9a227] hover:text-[#c9a227] transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/khalidalhajj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:border-[#c9a227] hover:text-[#c9a227] transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {submitted ? (
              <div className="glass rounded-2xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <Send size={32} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-gray-400">
                  Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full px-4 py-3 bg-[#0a0a0b] border border-[#262629] rounded-lg text-white focus:border-[#c9a227] focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full px-4 py-3 bg-[#0a0a0b] border border-[#262629] rounded-lg text-white focus:border-[#c9a227] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full px-4 py-3 bg-[#0a0a0b] border border-[#262629] rounded-lg text-white focus:border-[#c9a227] focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#c9a227] text-[#0a0a0b] font-semibold rounded-lg hover:bg-[#e4c85c] transition-colors flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 border-t border-[#262629]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Khalid Alhajj. Built with range.
          </p>
          <p className="text-sm text-gray-500">
            <span className="text-[#c9a227]">Next.js</span> · <span className="text-[#c9a227]">Tailwind</span> · <span className="text-[#c9a227]">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <>
      <div className="noise-overlay" />
      <Navigation />
      <main>
        <HeroSection />
        <div className="section-divider max-w-7xl mx-auto" />
        <AboutSection />
        <div className="section-divider max-w-7xl mx-auto" />
        <SkillsSection />
        <div className="section-divider max-w-7xl mx-auto" />
        <ProjectsSection />
        <div className="section-divider max-w-7xl mx-auto" />
        <ExperienceSection />
        <div className="section-divider max-w-7xl mx-auto" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
