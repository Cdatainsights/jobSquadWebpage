import React from "react";
import { NextPage } from "next";
import styles from "./privacy.module.css";

export const Privacy = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updateDate}>Last updated: September 7, 2024</p>
      </header>

      <section className={styles.section}>
        <p className={styles.paragraph}>
          Welcome to Job Squad&apos;s Privacy Policy!
        </p>
        <p className={styles.paragraph}>
          At Job Squad, accessible from https://www.jobsquad.info, the privacy
          of our visitors is of utmost importance to us. This document outlines
          the types of personal information that is received and collected by
          Job Squad and how it is used.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Consent</h2>
        <p className={styles.paragraph}>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Information We Collect</h2>
        <p className={styles.paragraph}>
          When you register for an account, we may ask for your contact
          information, including items such as name, email address, and phone
          number.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>How We Use Your Information</h2>
        <p className={styles.paragraph}>
          We use the information we collect in various ways, including to
          provide, operate, and maintain our website, improve our website, and
          understand and analyze how you use our website.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Cookies</h2>
        <p className={styles.paragraph}>
          Job Squad uses cookies to improve the user experience. By using our
          website, you consent to the use of cookies in accordance with our
          Cookie Policy.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Third-Party Privacy Policies</h2>
        <p className={styles.paragraph}>
          Job Squad&apos;s Privacy Policy does not apply to other websites. Thus, we
          advise you to consult the respective Privacy Policies of these
          third-party websites for more detailed information.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Changes to This Privacy Policy</h2>
        <p className={styles.paragraph}>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} Job Squad. All rights reserved.
        </p>
      </footer>
    </main>
  );
};
