import Link from "next/link";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Terms of Service - Ansen Bey",
  description:
    "Terms of Service for Ansen Bey's portfolio website. Learn about the terms and conditions for using this website.",
};

export default function TermsPage() {
  const lastUpdated = "June 8th, 2025";

  return (
    <div className="min-h-screen bg-primary pt-24 pb-20">
      <div className="container-custom px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-accent/10 rounded-2xl">
                <DocumentTextIcon className="w-12 h-12 text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Terms of Service
            </h1>
            <p className="text-text-secondary text-lg">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="card p-8 md:p-12 space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Introduction
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {`Welcome to my portfolio website. These Terms of Service
                  ("Terms") govern your use of my website and services. By
                  accessing or using my website, you agree to be bound by these
                  Terms. If you disagree with any part of these terms, then you
                  may not access the website.`}
                </p>
              </section>

              {/* Acceptance of Terms */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  By accessing and using this website, you accept and agree to
                  be bound by the terms and provision of this agreement. These
                  Terms apply to all visitors, users, and others who access or
                  use the website.
                </p>
              </section>

              {/* Use License */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Use License
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Permission is granted to temporarily access and view the
                  materials on this website for personal, non-commercial
                  transitory viewing only. This is the grant of a license, not a
                  transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li>Modify or copy the materials</li>
                  <li>
                    Use the materials for any commercial purpose or for any
                    public display (commercial or non-commercial)
                  </li>
                  <li>
                    Attempt to decompile or reverse engineer any software
                    contained on the website
                  </li>
                  <li>
                    Remove any copyright or other proprietary notations from the
                    materials
                  </li>
                </ul>
                <p className="text-text-secondary leading-relaxed mt-4">
                  This license shall automatically terminate if you violate any
                  of these restrictions and may be terminated by me at any time.
                </p>
              </section>

              {/* User Conduct */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  User Conduct
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  When using this website, you agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li>Violate any applicable laws or regulations</li>
                  <li>
                    Transmit any harmful, offensive, or inappropriate content
                  </li>
                  <li>
                    Attempt to gain unauthorized access to any part of the
                    website
                  </li>
                  <li>{`Interfere with or disrupt the website's functionality`}</li>
                  <li>
                    Use automated systems to access the website without
                    permission
                  </li>
                  <li>
                    Collect or harvest any personally identifiable information
                    from the website
                  </li>
                  <li>Impersonate any person or entity</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Intellectual Property Rights
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  The content, design, graphics, text, software, images, and
                  other materials on this website are owned by me and are
                  protected by copyright, trademark, and other intellectual
                  property laws. You may not reproduce, distribute, modify, or
                  create derivative works of any content without my explicit
                  written permission.
                </p>
              </section>

              {/* Portfolio Content */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Portfolio Content
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  The projects and work samples displayed on this website are
                  for demonstration purposes. Some projects may be fictional or
                  created for educational purposes. All project details,
                  including client names and business information, are either
                  real (with permission) or used for portfolio demonstration
                  purposes only.
                </p>
              </section>

              {/* Contact and Communications */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Contact and Communications
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  When you contact me through this website, you agree that:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-text-secondary">
                  <li>You will provide accurate and truthful information</li>
                  <li>
                    You will not send spam, promotional content, or
                    inappropriate messages
                  </li>
                  <li>
                    I may use your contact information to respond to your
                    inquiry
                  </li>
                  <li>I am not obligated to respond to every inquiry</li>
                </ul>
              </section>

              {/* Disclaimer */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Disclaimer
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {`The information on this website is provided on an "as is"
                  basis. To the fullest extent permitted by law, I exclude all
                  representations, warranties, conditions, and other terms which
                  might otherwise have effect in relation to this website. I do
                  not warrant that:`}
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-text-secondary">
                  <li>
                    The website will be constantly available or available at all
                  </li>
                  <li>
                    The information on this website is complete, true, accurate,
                    or non-misleading
                  </li>
                  <li>
                    The website will be free from viruses or other malicious
                    software
                  </li>
                </ul>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  To the maximum extent permitted by applicable law, I shall not
                  be liable for any direct, indirect, incidental, special,
                  consequential, or punitive damages, including but not limited
                  to loss of profits, data, or other intangible losses,
                  resulting from your use of the website.
                </p>
              </section>

              {/* External Links */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  External Links
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  This website may contain links to external websites that are
                  not provided or maintained by me. I do not guarantee the
                  accuracy, relevance, timeliness, or completeness of any
                  information on these external websites. I am not responsible
                  for the content, privacy policies, or practices of any
                  third-party websites.
                </p>
              </section>

              {/* Professional Services */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Professional Services
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  If you engage me for professional web development services,
                  separate terms and conditions will apply. These website Terms
                  of Service do not constitute a contract for professional
                  services. Any professional engagement will require a separate
                  written agreement.
                </p>
              </section>

              {/* Privacy */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Privacy
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  Your privacy is important to me. Please review my{" "}
                  <Link
                    href="/privacy"
                    className="text-accent hover:text-accentHover transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  , which also governs your use of the website, to understand my
                  practices.
                </p>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Termination
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  I may terminate or suspend your access to the website
                  immediately, without prior notice or liability, for any reason
                  whatsoever, including without limitation if you breach the
                  Terms. Upon termination, your right to use the website will
                  cease immediately.
                </p>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Governing Law
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  These Terms shall be interpreted and governed by the laws of
                  India. Any disputes relating to these Terms or the website
                  shall be subject to the jurisdiction of the courts in
                  Guwahati, Assam, India.
                </p>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Changes to Terms
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  I reserve the right, at my sole discretion, to modify or
                  replace these Terms at any time. If a revision is material, I
                  will try to provide at least 30 days notice prior to any new
                  terms taking effect. What constitutes a material change will
                  be determined at my sole discretion.
                </p>
              </section>

              {/* Severability */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Severability
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  If any provision of these Terms is held to be unenforceable or
                  invalid, such provision will be changed and interpreted to
                  accomplish the objectives of such provision to the greatest
                  extent possible under applicable law and the remaining
                  provisions will continue in full force and effect.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Contact Information
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please
                  contact me:
                </p>
                <div className="bg-background-hover p-6 rounded-lg">
                  <p className="text-text-secondary mb-2">
                    <strong className="text-text-primary">Email:</strong>{" "}
                    ansenbeyc73@gmail.com
                  </p>
                  <p className="text-text-secondary">
                    <strong className="text-text-primary">Location:</strong>{" "}
                    Guwahati, Assam, India
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="btn-primary inline-flex items-center group"
            >
              <span>← Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
