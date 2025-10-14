import React from 'react';
import { Link } from 'react-router-dom';
import './TermsOfService.css';

function TermsOfService() {
  return (
    <div className="terms-service">
      <div className="terms-container">
        <header className="terms-header">
          <Link to="/" className="back-link">← Back to Converter</Link>
          <h1>Terms of Service</h1>
          <p className="terms-date">Last updated: October 14, 2025</p>
        </header>

        <section className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using CSV JSON SQL Converter ("the Service"), you accept and agree to be bound by
            the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Description of Service</h2>
          <p>
            CSV JSON SQL Converter is a web-based tool that allows users to convert between CSV, JSON, and SQL data formats.
            The service operates entirely within the user's web browser and does not require server-side processing.
          </p>
          <ul>
            <li>CSV to JSON conversion</li>
            <li>JSON to CSV conversion</li>
            <li>JSON beautification</li>
            <li>CSV to SQL conversion</li>
            <li>JSON to SQL conversion</li>
            <li>SQL to CSV conversion</li>
            <li>SQL to JSON conversion</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>3. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Use the service only for lawful purposes</li>
            <li>Not upload or process illegal, harmful, or copyrighted content without permission</li>
            <li>Not attempt to reverse engineer, modify, or tamper with the service</li>
            <li>Not use the service to process sensitive personal information of others without consent</li>
            <li>Respect the intellectual property rights of others</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>4. Data Processing</h2>
          <p>
            All data processing occurs locally in your web browser. We do not store, transmit, or have access to
            any data you upload or convert. Your data remains entirely on your device and under your control.
          </p>
        </section>

        <section className="terms-section">
          <h2>5. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive
            property of CSV JSON SQL Converter and its licensors. The service is protected by copyright,
            trademark, and other laws.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Disclaimer of Warranties</h2>
          <p>
            The Service is provided "as is" and "as available" without warranties of any kind, either express
            or implied. We do not guarantee that the service will be uninterrupted or error-free.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Limitation of Liability</h2>
          <p>
            In no event shall CSV JSON SQL Converter be liable for any indirect, incidental, special,
            consequential, or punitive damages arising out of or related to your use of the service.
          </p>
        </section>

        <section className="terms-section">
          <h2>8. Termination</h2>
          <p>
            We reserve the right to terminate or suspend access to our service immediately, without prior
            notice or liability, for any reason whatsoever.
          </p>
        </section>

        <section className="terms-section">
          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material,
            we will try to provide at least 30 days notice prior to any new terms taking effect.
          </p>
        </section>

        <section className="terms-section">
          <h2>10. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us through our website.
          </p>
        </section>
      </div>
    </div>
  );
}

export default TermsOfService;
