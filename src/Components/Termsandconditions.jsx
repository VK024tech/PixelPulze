import React from "react";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Termsandconditions() {
  return (
    <div className="text-gray dark:text-white max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl mb-4">
          Terms and <br /> Conditions
        </h1>
        <Link
          to="/"
          className="flex gap-1 text-sm md:text-[16px] cursor-pointer hover:gap-4 transition-all duration-200"
        >
          <ArrowLongLeftIcon className="size-6" />
          Go to Home
        </Link>
      </div>
      <p className="text-[12px] sm:text-sm mb-8">Last Updated: July 13, 2025</p>
      <p className="text-sm sm:text-lg mb-8">
        Welcome to Pixel Pulze, an AI-powered image generation service. These
        Terms and Conditions (“Terms”) govern your use of Pixel Pulze’s website,
        services, and platform. By accessing or using Pixel Pulze, you agree to
        be bound by these Terms. If you do not agree, please do not use our
        services.
      </p>

      <section>
        <h2 className="text-2xl mb-4">1. About Pixel Pulze</h2>
        <p className="text-sm sm:text-lg mb-8">
          Pixel Pulze provides AI-powered image generation using Stable
          Diffusion or Third party services for Rs. 1 per image (~$0.012), with
          a minimum recharge of Rs. 10 (or 5$) via Dodo Payments. Our service is
          designed for artists, developers, and businesses to create
          high-quality visuals effortlessly.
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">2. Acceptance of Terms</h2>
        <p className="text-sm sm:text-lg mb-8">
          By creating an account, submitting prompts, or using Pixel Pulze, you
          agree to these Terms, our Privacy Policy, and any additional
          guidelines posted on our website. You must be at least 18 years old or
          have legal guardian consent to use our services.
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">3. User Responsibilities</h2>
        <p className="text-sm sm:text-lg mb-8">
          You agree to:
          <br /> Provide accurate account information (e.g., name, email).
          <br /> Keep your account credentials secure and not share them. <br />
          Use Pixel Pulze for lawful purposes only, avoiding prompts that are
          illegal, offensive, or infringe intellectual property rights.
          <br /> Comply with all applicable laws, including India’s DPDP Act and
          international regulations (e.g., GDPR).
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">4. Payment Terms</h2>
        <p className="text-sm sm:text-lg mb-8">
          Pixel Pulze operates on a pay-per-use model: Rs. 1 (~$0.012) per
          image, with a minimum recharge of Rs. 50 (or $5) via Dodo Payments.
          Payments are processed securely through Dodo Payments. You are
          responsible for maintaining sufficient balance for image generation.
          All payments are non-refundable unless required by law (e.g., Consumer
          Protection Act, 2019).
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">5. Intellectual Property</h2>
        <p className="text-sm sm:text-lg mb-8">
          Generated Images: You own the images you generate, subject to
          compliance with these Terms and applicable laws. Pixel Pulze does not
          claim ownership but reserves the right to use anonymized prompts for
          service improvement.
          <br /> Pixel Pulze’s IP: Our platform, code, and UI (including
          React/Tailwind CSS design) are owned by Pixel Pulze. You may not copy,
          modify, or distribute our software without permission.
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">6. Prohibited Conduct</h2>
        <p className="text-sm sm:text-lg mb-8">
          You may not:
          <br /> Generate images that are illegal, harmful, or violate
          third-party rights (e.g., copyrighted content).
          <br /> Use Pixel Pulze to create offensive, explicit, or defamatory
          content.
          <br /> Attempt to reverse-engineer, hack, or overload our platform
          (e.g., API abuse).
          <br />
          Resell or commercialize Pixel Pulze’s services without authorization.
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">7. Termination</h2>
        <p className="text-sm sm:text-lg mb-8">
          We may suspend or terminate your account if you: Violate these Terms
          or applicable laws.
          <br /> Engage in fraudulent activity or abuse our platform.
          <br /> Fail to maintain sufficient balance for services. <br />
          You may terminate your account by contacting
          vinkofficialpromo@gmail.com. Upon termination, unused balance is
          non-refundable unless required by law.
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">8. Limitation of Liability</h2>
        <p className="text-sm sm:text-lg mb-8">
          Pixel Pulze is provided “as is.” We are not liable for: Errors in
          generated images or service interruptions. Losses arising from your
          use of generated images. Indirect, incidental, or consequential
          damages.
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">9. Refunds and Disputes</h2>
        <p className="text-sm sm:text-lg mb-8">
          Payments (e.g., Rs. 50 recharges, Rs. 1/image) are non-refundable
          except in cases of technical errors (e.g., failed image generation).
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">10. Governing Law</h2>
        <p className="text-sm sm:text-lg mb-8">
          These Terms are governed by the laws of India. EU users may have
          additional rights under GDPR.
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">11. Contact Us</h2>
        <p className="text-sm sm:text-lg mb-8">
          For questions about these Terms, email vinkofficialpromo@gmail.com .
        </p>
      </section>
      <section>
        <h2 className="text-2xl mb-4">12. Updates to Terms</h2>
        <p className="text-sm sm:text-lg mb-8">
          We may update these Terms to reflect changes in our services or legal
          requirements.
        </p>
      </section>
    </div>
  );
}

export default Termsandconditions;
