import React from "react";

const Privacy = () => (
  <div className="max-w-2xl mx-auto px-4 py-10 text-gray-800">
    <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
    <p className="mb-2"><strong>Effective Date:</strong> [Effective Date]</p>
    <p className="mb-4">
      Thank you for using StudyRat ("we", "us", or "our"). This Privacy Policy explains how we collect, use, and protect your information when you use our study-tracking app, including focus timers and gamified features.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">1. Data Collection</h2>
    <ul className="list-disc pl-6 mb-4">
      <li>
        <strong>Study Sessions & Progress:</strong> Data about your study sessions, focus timers, and gamification progress is stored locally on your device and, if you choose, in cloud storage to enable backup and synchronization across devices.
      </li>
      <li>
        <strong>Personal Information:</strong> We do not require you to provide personal information to use the core features of StudyRat. If you contact us for support, we may collect your email address and any information you provide.
      </li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">2. Data Usage</h2>
    <ul className="list-disc pl-6 mb-4">
      <li>Provide and improve StudyRat’s features.</li>
      <li>Save your study progress and gamification achievements.</li>
      <li>Respond to your support requests.</li>
    </ul>
    <p className="mb-4">
      We do not sell or share your personal data with third parties for marketing purposes.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">3. Third-Party Services</h2>
    <p className="mb-4">
      StudyRat may use third-party services (such as analytics or cloud storage providers) that may collect information as described in their own privacy policies. We encourage you to review the privacy policies of any third-party services you use in connection with StudyRat.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">4. Security</h2>
    <p className="mb-4">
      We take reasonable measures to protect your data from unauthorized access, loss, or misuse. However, no method of transmission or storage is 100% secure.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Deletion Rights</h2>
    <p className="mb-4">
      You have the right to delete your data at any time. You can:
    </p>
    <ul className="list-disc pl-6 mb-4">
      <li>Delete your study data from within the app.</li>
      <li>Contact us at [Your Email Address] to request deletion of any data stored on our servers.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes to This Policy</h2>
    <p className="mb-4">
      We may update this Privacy Policy from time to time. We will notify you of any changes by updating the effective date at the top of this page.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact Us</h2>
    <p>
      If you have any questions or concerns about this Privacy Policy, please contact us at [Your Email Address].
    </p>
  </div>
);

export default Privacy;import { useEffect } from 'react';

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
