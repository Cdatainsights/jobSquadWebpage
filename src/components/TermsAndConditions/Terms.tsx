import React from 'react';
import { NextPage } from 'next';
import styles from './terms.module.css';

export const Terms = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Terms and Conditions</h1>
        <p className={styles.updateDate}>Last updated: September 7, 2024</p>
      </header>

      <section className={styles.section}>
        <p className={styles.paragraph}>Welcome to Job Squad!</p>
        <p className={styles.paragraph}>
          These terms and conditions outline the rules and regulations for the use of Job Squad's website,
          located at https://www.jobsquad.info/.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Acceptance of Terms</h2>
        <p className={styles.paragraph}>
          By accessing this website, we assume you accept these terms and conditions. Do not continue to use Job Squad's website
          if you do not agree to take all of the terms and conditions stated on this page.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Cookies</h2>
        <p className={styles.paragraph}>
          We employ the use of cookies. By accessing Job Squad's website, you agree to use cookies in accordance with 
          Job Squad’s Privacy Policy.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>License</h2>
        <p className={styles.paragraph}>
          Unless otherwise stated, Job Squad and/or its licensors own the intellectual property rights for all material on 
          Job Squad's website. All intellectual property rights are reserved. You may access this from Job Squad for your 
          own personal use, subject to restrictions set in these terms and conditions.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Restrictions</h2>
        <p className={styles.paragraph}>You are specifically restricted from all of the following:</p>
        <ul className={styles.list}>
          <li>Publishing any website material in any other media;</li>
          <li>Selling, sublicensing, or commercializing any website material;</li>
          <li>Using this website in any way that is damaging to the website;</li>
          <li>Engaging in any data mining, data harvesting, or similar activities;</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Your Privacy</h2>
        <p className={styles.paragraph}>
          Please read our Privacy Policy.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Governing Law</h2>
        <p className={styles.paragraph}>
          These terms will be governed by and interpreted in accordance with the laws of [Your Jurisdiction], 
          and you submit to the non-exclusive jurisdiction of the courts located in [Your Jurisdiction] for the resolution of any disputes.
        </p>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>&copy; {new Date().getFullYear()} Job Squad. All rights reserved.</p>
      </footer>
    </main>
  );
};
