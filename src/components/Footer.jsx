import { Link } from 'react-router-dom';
import logo from '../assets/Icon.png';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <img src={logo} alt="StudyRat" width={24} height={24} />
                        <span>StudyRat</span>
                    </div>
                    <p className="footer-tagline">Build better study habits, one day at a time.</p>
                </div>
                <div className="footer-links-group">
                    <h4>PRODUCT</h4>
                    <a href="#features">Features</a>
                    <a href="https://play.google.com/store/search?q=StudyRat&c=apps" target="_blank" rel="noopener noreferrer">Download</a>
                    <a href="https://forms.gle/G4uNK3Ye7GuSi6Qa8" target="_blank" rel="noopener noreferrer">Feedback</a>
                </div>
                <div className="footer-links-group">
                    <h4>COMPANY</h4>
                    <a href="mailto:support@studyrat.app">About</a>
                    <Link to="/privacy">Privacy</Link>
                    <Link to="/terms">Terms</Link>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} StudyRat. All rights reserved.</p>
            </div>
        </footer>
    );
}
