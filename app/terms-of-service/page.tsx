'use client';

import React from 'react';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-300 mb-4">
              Welcome to PipelineAI. These terms and conditions outline the rules and regulations for the use of our website and services.
            </p>
            <p className="text-gray-300 mb-4">
              By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use PipelineAI if you do not accept all of the terms and conditions stated on this page.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. License to Use</h2>
            <p className="text-gray-300 mb-4">
              Unless otherwise stated, PipelineAI and/or its licensors own the intellectual property rights for all material on PipelineAI. All intellectual property rights are reserved.
            </p>
            <p className="text-gray-300 mb-4">
              You may view and/or print pages from our website for your own personal use subject to restrictions set in these terms and conditions.
            </p>
            <p className="text-gray-300 mb-4">
              You must not:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">Republish material from this website</li>
              <li className="mb-2">Sell, rent or sub-license material from this website</li>
              <li className="mb-2">Reproduce, duplicate or copy material from this website</li>
              <li className="mb-2">Redistribute content from PipelineAI (unless content is specifically made for redistribution)</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. User Accounts</h2>
            <p className="text-gray-300 mb-4">
              When you create an account with us, you guarantee that the information you provide is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the service.
            </p>
            <p className="text-gray-300 mb-4">
              You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Services and Billing</h2>
            <p className="text-gray-300 mb-4">
              PipelineAI offers various subscription plans for our services. By selecting a subscription plan, you agree to pay the subscription fees indicated for that service. Payments will be charged on the day you sign up for a subscription and will cover the use of that service for the period indicated.
            </p>
            <p className="text-gray-300 mb-4">
              Subscription fees are not refundable. We reserve the right to change subscription fees at any time, provided that, for existing subscribers, the change will become effective only at the end of the then-current billing cycle.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              In no event shall PipelineAI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">Your access to or use of or inability to access or use the service</li>
              <li className="mb-2">Any conduct or content of any third party on the service</li>
              <li className="mb-2">Any content obtained from the service</li>
              <li className="mb-2">Unauthorized access, use or alteration of your transmissions or content</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Governing Law</h2>
            <p className="text-gray-300 mb-4">
              These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-300 mb-4">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Changes to Terms</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="text-gray-300 mb-4">
              By continuing to access or use our service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the service.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-300 mb-4">
              Email: legal@pipelineai.com<br />
              Address: 123 AI Street, Tech City, TC 12345
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService; 