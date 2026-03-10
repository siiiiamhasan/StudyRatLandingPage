import { useEffect } from 'react';
import { Heart, Shield, Smartphone, Globe, Zap, Mail } from 'lucide-react';

export default function About() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <main className="legal-page">
            <div className="legal-container">
                <h1>About StudyRat</h1>

                <p>
                    StudyRat is a free, offline study habit tracker built for students who want to stay consistent, focused, and on track for their exams. Whether you're preparing for board exams, university finals, or competitive tests — StudyRat helps you build a daily study routine and stick to it.
                </p>

                <h2>Our Mission</h2>
                <p>
                    We believe that great results come from daily consistency, not last-minute cramming. StudyRat was created to give every student a simple, distraction-free tool to track their study habits, monitor their progress, and stay motivated — without ads, accounts, or data collection.
                </p>

                <h2>What Makes StudyRat Different</h2>
                <ul>
                    <li><strong>100% Offline & Private</strong> — Your data never leaves your device. No servers, no cloud, no tracking. Everything stays on your phone.</li>
                    <li><strong>Completely Free</strong> — No ads, no in-app purchases, no premium tiers. Every feature is available to everyone.</li>
                    <li><strong>Built for Students</strong> — Designed specifically around study workflows: daily habit check-offs, exam countdowns, streak tracking, and focus sessions.</li>
                    <li><strong>6 Languages Supported</strong> — Use StudyRat in your preferred language for a more comfortable experience.</li>
                    <li><strong>Burnout Detection</strong> — Smart insights that help you recognize when you're overworking and need rest.</li>
                    <li><strong>Focus Heatmaps</strong> — Visualize your study patterns over time with beautiful heatmap charts.</li>
                </ul>

                <h2>Key Features</h2>
                <ul>
                    <li><strong>Daily Tracking</strong> — Check off your study subjects each day with a clean, intuitive interface.</li>
                    <li><strong>Advanced Analytics</strong> — Charts, consistency scores, and momentum tracking to understand your progress.</li>
                    <li><strong>Streak System</strong> — Stay motivated with powerful streak tracking. Never break the chain.</li>
                    <li><strong>Focus Timer</strong> — Built-in Pomodoro timer with customizable durations to track focused study time.</li>
                    <li><strong>Smart Reminders</strong> — Custom notifications for each subject with follow-up alerts and quiet hours.</li>
                    <li><strong>Data Backup</strong> — Export and import your data anytime with JSON backup and restore.</li>
                    <li><strong>Exam Countdown</strong> — Set your exam date and see exactly how many days you have left.</li>
                    <li><strong>Home Screen Widget</strong> — Android widget showing your streak, tasks completed, and exam countdown.</li>
                </ul>

                <h2>Who Built This</h2>
                <p>
                    StudyRat is an independent project built by a solo developer who understands the challenges students face. It was born out of the need for a simple, honest study tool — one that respects your privacy and actually helps you study without distractions.
                </p>

                <h2>Get in Touch</h2>
                <p>
                    Have feedback, suggestions, or found a bug? We'd love to hear from you.
                </p>
                <ul>
                    <li>Email: <a href="mailto:support@studyrat.app">support@studyrat.app</a></li>
                    <li>Feedback Form: <a href="https://forms.gle/G4uNK3Ye7GuSi6Qa8" target="_blank" rel="noopener noreferrer">Submit Feedback</a></li>
                </ul>
            </div>
        </main>
    );
}
