import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Icon.png';

export default function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const scrollToFeatures = (e) => {
        e.preventDefault();
        if (!isHome) {
            window.location.href = '/#features';
            return;
        }
        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="StudyRat" width={28} height={28} />
                    <span>StudyRat</span>
                </Link>
                <div className="navbar-links">
                    <a href="#features" onClick={scrollToFeatures}>Features</a>
                    <a href="https://forms.gle/G4uNK3Ye7GuSi6Qa8" target="_blank" rel="noopener noreferrer">Feedback</a>
                    <a
                        href="https://play.google.com/store/search?q=StudyRat&c=apps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    );
}
