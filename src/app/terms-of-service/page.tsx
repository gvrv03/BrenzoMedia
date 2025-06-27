import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center text-cyan-600 hover:text-cyan-600 -300 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="glass backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
          <div className="flex items-center mb-8">
            <FileText className="w-8 h-8 text-cyan-600 mr-3" />
            <h1 className="text-4xl font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Terms of Service
            </h1>
          </div>

          <div className="space-y-8 text-white" style={{ fontFamily: "Inter, sans-serif" }}>
            <div>
              <p className="text-lg mb-4">
                <strong>Effective Date:</strong> January 20, 2025
              </p>
              <p className="text-lg">
                Welcome to Brenzo Media. These Terms of Service govern your use of our website and services. By
                accessing or using our services, you agree to be bound by these terms.
              </p>
            </div>

            <section>
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-cyan-600 mr-2" />
                <h2 className="text-2xl font-bold">Services Overview</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>Brenzo Media provides content marketing services including:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Strategic content creation and planning</li>
                  <li>Personal brand building and development</li>
                  <li>Social media growth and management</li>
                  <li>Digital marketing consultation</li>
                  <li>Content distribution and optimization</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Scale className="w-6 h-6 text-cyan-600 mr-2" />
                <h2 className="text-2xl font-bold">Client Responsibilities</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <h3 className="text-xl font-semibold text-white">Content Provision</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide raw content materials as agreed upon in the service agreement</li>
                  <li>Ensure all provided content is original or properly licensed</li>
                  <li>Respond to requests for feedback and approvals in a timely manner</li>
                  <li>Provide accurate business information and branding guidelines</li>
                </ul>

                <h3 className="text-xl font-semibold text-white">Communication</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Maintain regular communication through agreed channels</li>
                  <li>Provide constructive feedback within specified timeframes</li>
                  <li>Notify us of any changes to business objectives or requirements</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-cyan-600 mr-2" />
                <h2 className="text-2xl font-bold">Payment Terms</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <h3 className="text-xl font-semibold text-white">Billing</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Monthly retainer fees are due on the 1st of each month</li>
                  <li>Project-based work requires 50% upfront payment</li>
                  <li>Late payments may incur a 5% monthly service charge</li>
                  <li>All prices are in Indian Rupees (INR) unless otherwise specified</li>
                </ul>

                <h3 className="text-xl font-semibold text-white">Refunds</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Refunds are subject to our separate Refund Policy</li>
                  <li>Work completed cannot be refunded</li>
                  <li>Cancellations require 30 days written notice</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <div className="space-y-4 text-gray-300">
                <h3 className="text-xl font-semibold text-white">Client Content</h3>
                <p>
                  You retain ownership of all content, materials, and intellectual property you provide to us. You grant
                  us a license to use, modify, and distribute this content solely for the purpose of providing our
                  services.
                </p>

                <h3 className="text-xl font-semibold text-white">Created Content</h3>
                <p>
                  Upon full payment, you own all content we create specifically for your brand. We retain the right to
                  use anonymized case studies and general methodologies for marketing purposes.
                </p>

                <h3 className="text-xl font-semibold text-white">Brenzo Media Property</h3>
                <p>
                  Our proprietary methods, templates, and business processes remain our intellectual property and may
                  not be shared or used without written permission.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Service Limitations</h2>
              <div className="space-y-4 text-gray-300">
                <h3 className="text-xl font-semibold text-white">Performance Disclaimers</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>We cannot guarantee specific results, follower counts, or revenue increases</li>
                  <li>Social media algorithms and platform policies are beyond our control</li>
                  <li>Results depend on various factors including market conditions and client participation</li>
                </ul>

                <h3 className="text-xl font-semibold text-white">Service Scope</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Services are limited to those specified in your service agreement</li>
                  <li>Additional requests may incur extra charges</li>
                  <li>We reserve the right to refuse work that conflicts with our values or capabilities</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Termination</h2>
              <div className="space-y-4 text-gray-300">
                <p>Either party may terminate services with 30 days written notice. Upon termination:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>All outstanding payments become immediately due</li>
                  <li>We will provide all completed work and source files</li>
                  <li>Confidentiality obligations continue indefinitely</li>
                  <li>You retain ownership of all paid-for deliverables</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Our liability is limited to the amount paid for services in the 12 months preceding any claim. We are
                  not liable for indirect, consequential, or punitive damages.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  These terms are governed by the laws of India. Any disputes will be resolved through binding
                  arbitration in [Your City], India.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4 text-gray-300">
                <p>For questions about these Terms of Service, contact us:</p>
                <div className="glass backdrop-blur-md bgGradient p-4 rounded-lg">
                  <p>
                    <strong>Email:</strong> legal@brenzo.media
                  </p>
                  <p>
                    <strong>Address:</strong> [Your Business Address]
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
