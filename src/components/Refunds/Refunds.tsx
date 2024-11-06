import React from 'react';
import { NextPage } from 'next';
import styles from './refunds.module.css';

export const Refunds = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Refund Policy</h1>
        <p className={styles.updateDate}>Last updated: September 7, 2024</p>
      </header>

      <section className={styles.section}>
        <p className={styles.paragraph}>Thank you for shopping with Job Squad!</p>
        <p className={styles.paragraph}>
          If you are not entirely satisfied with your purchase, we&apos;re here to help. This Refund Policy outlines our policies for returns and refunds.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Returns</h2>
        <p className={styles.paragraph}>
          You have 30 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Refunds</h2>
        <p className={styles.paragraph}>
          Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you of the status of your refund after inspecting the item.
        </p>
        <p className={styles.paragraph}>
          If your return is approved, we will initiate a refund to your original method of payment. You will receive the credit within a certain number of days, depending on your card issuer&apos;s policies.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Shipping Costs</h2>
        <p className={styles.paragraph}>
          You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Contact Us</h2>
        <p className={styles.paragraph}>
          If you have any questions on how to return your item to us, please contact us at <u>info@cdatainsights.com</u>
        </p>
      </section>


      <footer className={styles.footer}>
        <p className={styles.footerText}>&copy; {new Date().getFullYear()} Job Squad. All rights reserved.</p>
      </footer>
    </main>
  );
};

