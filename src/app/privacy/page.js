import Link from "next/link";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Privacy Policy - Ansen Bey",
  description:
    "Privacy Policy for Ansen Bey's portfolio website. Learn how we protect your privacy and handle your data.",
};

export default function PrivacyPage() {
  const lastUpdated = "June 8th, 2025";

  return (
    <div className="min-h-screen bg-primary pt-24 pb-20">
      <div className="container-custom px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-accent/10 rounded-2xl">
                <ShieldCheckIcon className="w-12 h-12 text-accent" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Privacy Policy
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
                  Welcome to my portfolio website. I am committed to protecting
                  your privacy and ensuring the security of any personal
                  information you provide. This Privacy Policy explains how I
                  collect, use, and protect your information when you visit my
                  website.
                </p>
              </section>

              {/* Information Collection */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Information I Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Information You Provide
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      When you contact me through email or contact forms, I may
                      collect:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-text-secondary">
                      <li>Your name and email address</li>
                      <li>Your message content</li>
                      <li>Any other information you choose to provide</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Automatically Collected Information
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      I may automatically collect certain technical information:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-text-secondary">
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>IP address (anonymized)</li>
                      <li>Pages visited and time spent on site</li>
                      <li>Referring website</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How I Use Information */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  How I Use Your Information
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  I use the collected information for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li>To respond to your inquiries and communications</li>
                  <li>To improve my website and user experience</li>
                  <li>To analyze website traffic and usage patterns</li>
                  <li>To prevent spam and abuse</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              {/* Analytics */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Analytics
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {`This website uses Vercel Analytics to help me understand how
                  visitors use the site. Vercel Analytics collects anonymous
                  usage data that cannot be used to identify individual users.
                  This helps me improve the website's performance and user
                  experience.`}
                </p>
              </section>

              {/* Data Sharing */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Information Sharing
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  I do not sell, trade, or rent your personal information to
                  third parties. I may share your information only in the
                  following circumstances:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-text-secondary">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements or court orders</li>
                  <li>To protect my rights, property, or safety</li>
                  <li>
                    In connection with a business transaction (merger,
                    acquisition, etc.)
                  </li>
                </ul>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Data Security
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  I implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no
                  method of transmission over the internet is 100% secure, and I
                  cannot guarantee absolute security.
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Cookies
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  This website may use cookies and similar technologies to
                  enhance your browsing experience. You can control cookies
                  through your browser settings. Disabling cookies may affect
                  some features of the website.
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Your Rights
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Depending on your location, you may have the following rights
                  regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li>Right to access your personal information</li>
                  <li>Right to correct inaccurate information</li>
                  <li>Right to delete your personal information</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                </ul>
                <p className="text-text-secondary leading-relaxed mt-4">
                  To exercise these rights, please contact me using the
                  information provided below.
                </p>
              </section>

              {/* Third-Party Links */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Third-Party Links
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  My website may contain links to third-party websites. I am not
                  responsible for the privacy practices or content of these
                  external sites. I encourage you to review the privacy policies
                  of any third-party websites you visit.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  {`Children's Privacy`}
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  My website is not intended for children under the age of 13. I
                  do not knowingly collect personal information from children
                  under 13. If I become aware that I have collected personal
                  information from a child under 13, I will take steps to delete
                  such information.
                </p>
              </section>

              {/* Changes to Privacy Policy */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {`I may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with an updated "Last
                  updated" date. I encourage you to review this Privacy Policy
                  periodically for any changes.`}
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Contact Me
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or my
                  privacy practices, please contact me:
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
