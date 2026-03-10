import { useEffect } from 'react';

export default function Terms() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <main className="legal-page">
            <div className="legal-container">
                <h1>Terms of Service</h1>
                <p className="legal-updated">Last Updated: March 10, 2026</p>

                <h2>1. Introduction</h2>
                <p>
                    Welcome to StudyRat. By downloading or using this app, you agree to these Terms of Service. Please read them carefully before using the app.
                </p>

                <h2>2. What StudyRat Does</h2>
                <p>StudyRat is a free, offline study habit tracker and focus timer. The app helps you:</p>
                <ul>
                    <li>Track daily study habits and mark them as completed.</li>
                    <li>Use a Pomodoro-style focus timer with customizable durations.</li>
                    <li>Monitor your study streak and view activity heatmaps.</li>
                    <li>Set an exam date and track your countdown.</li>
                    <li>Set local notification reminders for study sessions.</li>
                    <li>Export and import your data as a JSON file.</li>
                    <li>View an Android home screen widget showing your streak, tasks, and exam countdown.</li>
                </ul>

                <h2>3. No Account Required</h2>
                <p>
                    StudyRat does not require you to create an account, sign in, or provide any personal information to use the app. All features are available immediately upon installation without registration.
                </p>

                <h2>4. No Payments</h2>
                <p>
                    StudyRat is completely free. There are no in-app purchases, premium subscriptions, virtual currencies, or payment obligations of any kind. All features are available to every user at no cost.
                </p>

                <h2>5. No Advertisements</h2>
                <p>
                    StudyRat does not display any advertisements. There are no ad SDKs or advertising networks integrated into the app.
                </p>

                <h2>6. Your Data</h2>
                <p>
                    All your data — including habits, study logs, focus sessions, profile information, and preferences — is stored exclusively on your device. StudyRat does not transmit, upload, or share your data with any server, cloud service, or third party.
                </p>
                <p>
                    You can export your data at any time as a JSON backup file via the Profile screen. You can also import a previously exported backup to restore your data.
                </p>
                <p>
                    If you uninstall the app without exporting a backup, your data will be permanently lost.
                </p>

                <h2>7. Notifications</h2>
                <p>
                    StudyRat may schedule local notifications to remind you of upcoming study sessions, streak maintenance, and daily reviews. These notifications are processed entirely on your device and are not sent through any external push notification server. You can enable, disable, and configure notifications in the app settings.
                </p>

                <h2>8. Intellectual Property</h2>
                <p>
                    You may not copy, modify, reverse-engineer, or create derivative works of the StudyRat app, its code, or its trademarks. All intellectual property rights in the app remain with the developer.
                </p>

                <h2>9. Device Security</h2>
                <p>
                    You are responsible for keeping your device secure. We recommend that you do not jailbreak or root your device, as this may compromise security features and prevent the app from functioning correctly.
                </p>

                <h2>10. Disclaimer</h2>
                <p>
                    StudyRat is provided "as is" without warranties of any kind. We do not guarantee that the app will be error-free or uninterrupted. We are not responsible for any data loss resulting from device failure, app uninstallation, or other circumstances beyond our control.
                </p>

                <h2>11. Changes to These Terms</h2>
                <p>
                    We may update these Terms of Service from time to time. Any changes will be reflected on this page with an updated date. Continued use of the app after changes constitutes acceptance of the revised terms.
                </p>

                <h2>12. Contact Us</h2>
                <p>
                    If you have any questions about these Terms of Service, please contact us at{' '}
                    <a href="mailto:support@studyrat.app">support@studyrat.app</a>.
                </p>
            </div>
        </main>
    );
}
