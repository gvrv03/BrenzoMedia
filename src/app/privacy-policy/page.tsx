import { ArrowLeft, Shield, Eye, Lock, Database } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center text-cyan-600  hover:text-cyan-600  -300 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="glass backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
          <div className="flex items-center mb-8">
            <Shield className="w-8 h-8 text-cyan-600  mr-3" />
            <h1 className="text-4xl font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Privacy Policy
            </h1>
          </div>

          <div className="space-y-8 text-white" style={{ fontFamily: "Inter, sans-serif" }}>
            <div>
              <p className="text-lg mb-4">
                <strong>Effective Date:</strong> January 20, 2025
              </p>
              <p className="text-lg">
                At Brenzo Media, we are committed to protecting your privacy and ensuring the security of your personal
                information. This Privacy Policy explains how we collect, use, and safeguard your data.
              </p>
            </div>

            <section>
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-cyan-600  mr-2" />
                <h2 className="text-2xl font-bold">Information We Collect</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Business information and project details</li>
                    <li>Communication preferences</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Usage Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Website usage data and analytics</li>
                    <li>Device information and browser type</li>
                    <li>IP address and location data</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-cyan-600  mr-2" />
                <h2 className="text-2xl font-bold">How We Use Your Information</h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Provide and improve our content marketing services</li>
                <li>Communicate with you about projects and services</li>
                <li>Process payments and manage billing</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Analyze website performance and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-cyan-600  mr-2" />
                <h2 className="text-2xl font-bold">Data Protection & Security</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>We implement industry-standard security measures to protect your personal information, including:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Encrypted data transmission (SSL/TLS)</li>
                  <li>Secure database storage with access controls</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal data on a need-to-know basis</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your data only
                  in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>With trusted service providers who assist in our operations</li>
                  <li>When required by law or legal process</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <div className="space-y-4 text-gray-300">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate data</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability (receive your data in a structured format)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Cookies & Tracking</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We use cookies and similar technologies to enhance your browsing experience, analyze website traffic,
                  and personalize content. You can control cookie settings through your browser preferences.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="glass backdrop-blur-md bgGradient   p-4 rounded-lg">
                  <p>
                    <strong>Email:</strong> privacy@brenzo.media
                  </p>
                  <p>
                    <strong>Address:</strong> [Your Business Address]
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by
                  posting the new policy on our website and updating the effective date.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
