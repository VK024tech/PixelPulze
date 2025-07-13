import React from "react";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
function PrivacyPolicy() {
  return (
    <div className="text-gray dark:text-white max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl mb-4">Privacy Policy for Pixel Pulze</h1>
        <Link
          to="/"
          className="flex gap-1 cursor-pointer hover:gap-4 transition-all duration-200"
        >
          <ArrowLongLeftIcon className="size-6" />
          Go to Home
        </Link>
      </div>
      <p className="text-sm mb-8">Last Updated: July 13, 2025</p>
      <p className="text-lg mb-8">
        At Pixel Pulze, we value your privacy and are committed to protecting
        your personal data. This Privacy Policy explains how we collect, use,
        store, and safeguard your information when you use our AI-powered image
        generation service. By using Pixel Pulze, you agree to the practices
        described below.
      </p>

      <section>
        <h2 className="text-2xl mb-4">1. Information We Collect</h2>
        <p className="text-lg mb-8">
          We collect the following data to provide and improve our services:
          Account Information: Name, email, and user ID when you create an
          account. <br />
          Prompt Data: Text prompts (e.g., “simple explanation of the image 🎨”)
          and settings (e.g., resolution, CFG scale) for generating images.
          <br /> Payment Information: Transaction details (e.g., Rs. 50
          recharge) processed securely via Dodo Payments. We do not store
          payment card details.
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">2. How We Use Your Information</h2>
        <p className="text-lg mb-8">
          We use your data to: Generate high-quality images using Stable
          Diffusion and third party services.
          <br /> Process payments via Dodo Payments for recharges (Rs. 50
          minimum, Rs. 1/image). <br />
          Improve our services and user experience (e.g., optimizing API
          performance). <br />
          Comply with legal obligations (e.g., DPDP Act, GDPR).
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">3. Data Storage and Security</h2>
        <p className="text-lg mb-8">
          Your data is stored on secure servers. We implement industry-standard
          measures to protect against unauthorized access, loss, or breaches.
          Generated images are stored temporarily and deleted after delivery
          unless you opt to save them in your account.
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">4. Data Sharing</h2>
        <p className="text-lg mb-8">
          We share data only when necessary: With Dodo Payments to process
          recharges (see their Privacy Policy).
          <br /> With third-party AI providers to generate images, ensuring
          prompts are anonymized. If required by law (e.g., under DPDP Act or
          GDPR).
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">5. Your Rights</h2>
        <p className="text-lg mb-8">
          Under the DPDP Act and GDPR (if applicable), you have the right to:
          Access, correct, or delete your personal data. Withdraw consent for
          data processing. Request data portability (e.g., export your prompts).
          To exercise these rights, contact us at vinkofficialpromo@gmail.com.
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">6. Cookies and Tracking</h2>
        <p className="text-lg mb-8">
          We use minimal cookies for essential functions (e.g., session
          management). Optional analytics cookies (e.g., Google Analytics) may
          track usage patterns if you consent. You can manage cookie preferences
          in your browser.
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">7. Third-Party Services</h2>
        <p className="text-lg mb-8">
          We use: Dodo Payments for secure transactions (Rs. 50 recharges, Rs.
          1/image). Stable Diffusion API (e.g., via Replicate or Civitai) for
          image generation. These services have their own privacy policies,
          which we encourage you to review.
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">8. Data Retention</h2>
        <p className="text-lg mb-8">
          Account and payment data are retained while your account is active or
          as required by law. Prompts and generated images are deleted within 24
          hours unless saved in your account. You can request deletion of all
          data via vinkofficialpromo@gmail.com.
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">9. Contact Us</h2>
        <p className="text-lg mb-8">
          For questions or concerns about this Privacy Policy, email us at
          vinkofficialpromo@gmail.com.
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">10. Updates to This Policy</h2>
        <p className="text-lg mb-8">
          We may update this policy to reflect changes in our services or legal
          requirements.
        </p>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
