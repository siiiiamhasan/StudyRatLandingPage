import { useState } from 'react';
import {
    CheckSquare, BarChart3, Flame, Bell, Download, Timer,
    BookOpen, Target, Shield, Zap, Globe, Clock, ChevronLeft, ChevronRight
} from 'lucide-react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';

const screenshots = [img1, img2, img5, img3, img4];

const features = [
    {
        icon: CheckSquare,
        title: 'Daily Tracking',
        description: 'Simple, intuitive interface to check off your study subjects each day. Build momentum with visual feedback.',
        color: '#22C55E',
        bg: '#DCFCE7',
    },
    {
        icon: BarChart3,
        title: 'Advanced Analytics',
        description: 'Beautiful charts and insights to understand your progress. Consistency scores, momentum tracking, and more.',
        color: '#3B82F6',
        bg: '#DBEAFE',
    },
    {
        icon: Flame,
        title: 'Streak System',
        description: 'Stay motivated with powerful streak tracking. Never break the chain and watch your consistency grow.',
        color: '#EA580C',
        bg: '#FED7AA',
    },
    {
        icon: Download,
        title: 'Data Backup',
        description: 'Export and import your data anytime. Your progress is always safe with JSON backup and restore.',
        color: '#22C55E',
        bg: '#DCFCE7',
    },
    {
        icon: Bell,
        title: 'Smart Reminders',
        description: 'Set custom reminders for each study subject. Follow-up alerts, quiet hours, and streak rescue notifications.',
        color: '#7C3AED',
        bg: '#EDE9FE',
    },
    {
        icon: Timer,
        title: 'Focus Timer',
        description: 'Built-in Pomodoro timer with customizable durations. Track your focused study time with precision.',
        color: '#F59E0B',
        bg: '#FEF3C7',
    },
];

const highlights = [
    { icon: Shield, text: '100% Offline & Private' },
    { icon: Globe, text: '6 Languages Supported' },
    { icon: Target, text: 'Exam Countdown Timer' },
    { icon: Zap, text: 'Burnout Detection' },
    { icon: BookOpen, text: 'Built for Students' },
    { icon: Clock, text: 'Focus Heatmaps' },
];

export default function Home() {
    const [activeSlide, setActiveSlide] = useState(2);

    const goTo = (index) => {
        if (index < 0) index = screenshots.length - 1;
        if (index >= screenshots.length) index = 0;
        setActiveSlide(index);
    };

    return (
        <main>
            {/* ── Hero Section ───────────────────────── */}
            <section className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="badge-dot" />
                            Now Available on Android
                        </div>
                        <h1>
                            Build Better Study Habits,{' '}
                            <span className="text-gradient">One Day at a Time</span>
                        </h1>
                        <p className="hero-description">
                            Track your daily study sessions with beautiful analytics,
                            powerful streak tracking, and a minimalist interface
                            designed to keep you focused and accountable.
                        </p>
                        <a
                            href="https://play.google.com/store/search?q=StudyRat&c=apps"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg"
                        >
                            Download Now
                            <span className="btn-arrow">&rsaquo;</span>
                        </a>
                    </div>
                    <div className="hero-preview">
                        <div className="phone-mockup">
                            <div className="phone-screen">
                                <div className="phone-tabs">
                                    <span className="phone-tab active">Today</span>
                                    <span className="phone-tab">Analytics</span>
                                    <span className="phone-tab">Profile</span>
                                </div>
                                <div className="phone-habit">
                                    <div className="phone-habit-icon" style={{ background: '#DBEAFE' }}>
                                        <BookOpen size={16} color="#3B82F6" />
                                    </div>
                                    <div className="phone-habit-info">
                                        <span className="phone-habit-name">Mathematics</span>
                                        <span className="phone-habit-streak">12 day streak</span>
                                    </div>
                                    <div className="phone-check done">&#10003;</div>
                                </div>
                                <div className="phone-habit">
                                    <div className="phone-habit-icon" style={{ background: '#FEF3C7' }}>
                                        <Target size={16} color="#F59E0B" />
                                    </div>
                                    <div className="phone-habit-info">
                                        <span className="phone-habit-name">Physics</span>
                                        <span className="phone-habit-streak">8 day streak</span>
                                    </div>
                                    <div className="phone-check done">&#10003;</div>
                                </div>
                                <div className="phone-habit">
                                    <div className="phone-habit-icon" style={{ background: '#EDE9FE' }}>
                                        <Zap size={16} color="#7C3AED" />
                                    </div>
                                    <div className="phone-habit-info">
                                        <span className="phone-habit-name">Chemistry</span>
                                        <span className="phone-habit-streak">5 day streak</span>
                                    </div>
                                    <div className="phone-check">&#9675;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Features Section ────────────────────── */}
            <section className="features" id="features">
                <div className="features-container">
                    <h2>
                        Everything you need to{' '}
                        <span className="text-gradient">ace your exams</span>
                    </h2>
                    <p className="features-subtitle">
                        Powerful features designed to help you track, analyze, and improve
                        your daily study routines.
                    </p>
                    <div className="features-grid">
                        {features.map((f) => (
                            <div className="feature-card" key={f.title}>
                                <div className="feature-icon" style={{ backgroundColor: f.bg }}>
                                    <f.icon size={22} color={f.color} />
                                </div>
                                <h3>{f.title}</h3>
                                <p>{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Showcase Section ────────────────────── */}
            <section className="showcase">
                <div className="showcase-container">
                    <h2>
                        See it in <span className="text-gradient">action</span>
                    </h2>
                    <p className="showcase-subtitle">
                        Experience the beautiful interface and powerful features that make
                        StudyRat your perfect companion.
                    </p>
                    <div className="showcase-carousel">
                        <button
                            className="carousel-arrow carousel-arrow-left"
                            onClick={() => goTo(activeSlide - 1)}
                            aria-label="Previous screenshot"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <div className="carousel-track">
                            {screenshots.map((src, i) => {
                                const offset = i - activeSlide;
                                return (
                                    <div
                                        className={`carousel-slide${offset === 0 ? ' active' : ''}`}
                                        key={i}
                                        style={{
                                            transform: `translateX(${offset * 220}px) scale(${offset === 0 ? 1 : 0.8})`,
                                            zIndex: offset === 0 ? 5 : 3 - Math.abs(offset),
                                            opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.2,
                                        }}
                                        onClick={() => setActiveSlide(i)}
                                    >
                                        <img src={src} alt={`StudyRat screenshot ${i + 1}`} />
                                    </div>
                                );
                            })}
                        </div>
                        <button
                            className="carousel-arrow carousel-arrow-right"
                            onClick={() => goTo(activeSlide + 1)}
                            aria-label="Next screenshot"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                    <div className="carousel-dots">
                        {screenshots.map((_, i) => (
                            <button
                                className={`carousel-dot${i === activeSlide ? ' active' : ''}`}
                                key={i}
                                onClick={() => setActiveSlide(i)}
                                aria-label={`Go to screenshot ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Highlights Strip ────────────────────── */}
            <section className="highlights">
                <div className="highlights-container">
                    {highlights.map((h) => (
                        <div className="highlight-item" key={h.text}>
                            <h.icon size={20} />
                            <span>{h.text}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA Section ─────────────────────────── */}
            <section className="cta">
                <div className="cta-container">
                    <h2>
                        Start building better study habits{' '}
                        <span className="text-gradient">today</span>
                    </h2>
                    <p>
                        Join thousands of students who use StudyRat to stay consistent,
                        focused, and on track for their exams.
                    </p>
                    <a
                        href="https://play.google.com/store/search?q=StudyRat&c=apps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-lg"
                    >
                        Get StudyRat Free
                        <span className="btn-arrow">&rsaquo;</span>
                    </a>
                </div>
            </section>
        </main>
    );
}
