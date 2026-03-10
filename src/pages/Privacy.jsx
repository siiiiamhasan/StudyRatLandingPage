import { useEffect } from 'react';

export default function Privacy() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <main className="legal-page">
            <div className="legal-container">
                <h1>Privacy Policy</h1>
                <p className="legal-updated">Last Updated: March 10, 2026</p>

                <h2>1. Overview</h2>
                <p>
                    StudyRat is built with a privacy-first approach. The app works entirely offline and stores all data exclusively on your device. We do not collect, transmit, or share any personal information with any server, cloud service, or third party.
                </p>

                <h2>2. No Account or Personal Information Required</h2>
                <p>
                    StudyRat does not require account creation, sign-in, or any personal information to use. You are never asked to provide an email address, phone number, or any identifying details. The profile name, username, and avatar shown in the app are cosmetic, stored only on your device, and never sent anywhere.
                </p>

                <h2>3. Data Stored on Your Device</h2>
                <p>The following data is created and stored locally on your device as you use the app:</p>
                <ul>
                    <li>Study habits (names, daily targets, icons, reminder times)</li>
                    <li>Daily habit completion logs</li>
                    <li>Focus session records (duration, date, time)</li>
                    <li>Streak count and exam countdown information</li>
                    <li>Profile display name, username, and avatar image</li>
                    <li>Notification preferences and scheduled reminder IDs</li>
                    <li>Theme preference (light or dark mode)</li>
                    <li>Language preference</li>
                </ul>
                <p>All of this data is stored using your device's local storage (AsyncStorage). None of it is ever transmitted over the internet.</p>

                <h2>4. No Data Collection or Tracking</h2>
                <p>
                    StudyRat does not include any analytics, tracking, or telemetry SDKs. We do not collect device information, usage statistics, crash reports, or behavioral data. There are no analytics services such as Google Analytics, Firebase Analytics, Mixpanel, or similar tools in the app.
                </p>

                <h2>5. No Third-Party Data Sharing</h2>
                <p>
                    StudyRat does not share any data with third parties. There are no advertising networks, data brokers, or external services that receive information from the app. The app contains no advertisements of any kind.
                </p>

                <h2>6. Notifications</h2>
                <p>
                    StudyRat uses local notifications to remind you of study sessions and streak maintenance. These notifications are scheduled and processed entirely on your device. No notification data is sent to any external server. You have full control over notification settings within the app.
                </p>

                <h2>7. Data Export and Import</h2>
                <p>
                    You can export all of your app data as a JSON backup file at any time from the Profile screen. This file is saved to your device or shared through your device's share sheet — it is not uploaded to any server.
                </p>
                <p>
                    You can also import a previously exported backup file to restore your data. The import process validates the file locally before applying it.
                </p>

                <h2>8. Android Home Screen Widget</h2>
                <p>
                    The optional Android home screen widget displays your current streak, tasks completed today, and exam countdown. This information is passed from the app to the widget through your device's local SharedPreferences storage. No data leaves your device for the widget to function.
                </p>

                <h2>9. Image Picker</h2>
                <p>
                    StudyRat allows you to choose a profile image from your device's photo library. The selected image is stored locally on your device and is never uploaded or transmitted anywhere.
                </p>

                <h2>10. App Permissions</h2>
                <p>StudyRat requests the following device permissions:</p>
                <ul>
                    <li>Notifications — to schedule local study reminders.</li>
                    <li>Photo library access — to select a profile avatar image.</li>
                    <li>Vibration — to alert you when a focus timer completes.</li>
                    <li>File access — to export and import backup files.</li>
                </ul>
                <p>None of these permissions are used to collect or transmit your data.</p>

                <h2>11. Data Deletion</h2>
                <p>
                    Since all data is stored only on your device, uninstalling the app will permanently delete all of your data. There is no server-side data to delete. We recommend exporting a backup before uninstalling if you wish to preserve your data.
                </p>

                <h2>12. Children's Privacy</h2>
                <p>
                    StudyRat does not collect any personal information from any user, including children. Because no data is collected or transmitted, the app can be used safely by users of all ages.
                </p>

                <h2>13. Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date. Continued use of the app after changes constitutes acceptance of the revised policy.
                </p>

                <h2>14. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at{' '}
                    <a href="mailto:privacy@studyrat.app">privacy@studyrat.app</a>.
                </p>
            </div>
        </main>
    );
}
