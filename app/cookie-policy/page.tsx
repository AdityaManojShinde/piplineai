'use client';

import React from 'react';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-300 mb-4">
              This Cookie Policy explains how PipelineAI ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. What Are Cookies?</h2>
            <p className="text-gray-300 mb-4">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
            <p className="text-gray-300 mb-4">
              Cookies set by the website owner (in this case, PipelineAI) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Why Do We Use Cookies?</h2>
            <p className="text-gray-300 mb-4">
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics, and other purposes.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Types of Cookies We Use</h2>
            <p className="text-gray-300 mb-4">
              The specific types of first and third-party cookies served through our website and the purposes they perform are described below:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">
                <strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.
              </li>
              <li className="mb-2">
                <strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
              </li>
              <li className="mb-2">
                <strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.
              </li>
              <li className="mb-2">
                <strong>Advertising Cookies:</strong> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
              </li>
              <li className="mb-2">
                <strong>Social Media Cookies:</strong> These cookies are used to enable you to share pages and content that you find interesting on our website through third-party social networking and other websites. These cookies may also be used for advertising purposes.
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. How Can You Control Cookies?</h2>
            <p className="text-gray-300 mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
            </p>
            <p className="text-gray-300 mb-4">
              You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Changes to This Cookie Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
            <p className="text-gray-300 mb-4">
              The date at the top of this Cookie Policy indicates when it was last updated.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about our use of cookies or other technologies, please contact us at:
            </p>
            <p className="text-gray-300 mb-4">
              Email: privacy@pipelineai.com<br />
              Address: 123 AI Street, Tech City, TC 12345
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy; 