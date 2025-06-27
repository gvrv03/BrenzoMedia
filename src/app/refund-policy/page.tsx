import { ArrowLeft, RefreshCw, CreditCard, Clock, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function RefundPolicy() {
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
            <RefreshCw className="w-8 h-8 text-cyan-600  mr-3" />
            <h1 className="text-4xl font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Refund Policy
            </h1>
          </div>

          <div className="space-y-8 text-white" style={{ fontFamily: "Inter, sans-serif" }}>
            <div>
              <p className="text-lg mb-4">
                <strong>Effective Date:</strong> January 20, 2025
              </p>
              <p className="text-lg">
                At Brenzo Media, we strive to deliver exceptional content marketing services. This Refund Policy
                outlines the terms and conditions for refunds and cancellations.
              </p>
            </div>

            <div className="glass backdrop-blur-md bgGradient   /20 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <AlertCircle className="w-6 h-6 text-cyan-600  mr-2" />
                <h2 className="text-xl font-bold">Important Notice</h2>
              </div>
              <p className="text-gray-300">
                Due to the custom nature of our content marketing services and the immediate value delivered, all sales
                are generally final. However, we understand that exceptional circumstances may arise.
              </p>
            </div>

            <section>
              <div className="flex items-center mb-4">
                <CreditCard className="w-6 h-6 text-cyan-600  mr-2" />
                <h2 className="text-2xl font-bold">Refund Eligibility</h2>
              </div>
              <div className="space-y-6">
                <div className="glass backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">Monthly Retainer Services</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Refunds may be considered within the first 7 days of service commencement</li>
                    <li>No work must have been delivered or started</li>
                    <li>Client must demonstrate that service expectations were not met due to our failure</li>
                    <li>Refund amount will be prorated based on work completed</li>
                  </ul>
                </div>

                <div className="glass backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">Project-Based Services</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Refunds considered only before project commencement</li>
                    <li>Once work begins, payments are non-refundable</li>
                    <li>Partial refunds may apply if project scope is significantly reduced</li>
                    <li>Completed deliverables cannot be refunded</li>
                  </ul>
                </div>

                <div className="glass backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">Strategy Consultations</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Free initial consultations are not subject to refunds</li>
                    <li>Paid strategy sessions are non-refundable once completed</li>
                    <li>Cancellations must be made 24 hours in advance</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-cyan-600  mr-2" />
                <h2 className="text-2xl font-bold">Refund Process & Timeline</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <h3 className="text-xl font-semibold text-white">How to Request a Refund</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Contact us within the eligible timeframe via email at refunds@brenzo.media</li>
                  <li>Provide your order/invoice number and detailed reason for the refund request</li>
                  <li>Include any relevant documentation or evidence supporting your claim</li>
                  <li>Allow 5-7 business days for our team to review your request</li>
                </ol>

                <h3 className="text-xl font-semibold text-white">Processing Timeline</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="glass backdrop-blur-md bgGradient   /20 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-cyan-600  mb-2">5-7 Days</div>
                    <div className="text-sm">Review Period</div>
                  </div>
                  <div className="glass backdrop-blur-md bgGradient   /20 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-cyan-600  mb-2">3-5 Days</div>
                    <div className="text-sm">Processing Time</div>
                  </div>
                  <div className="glass backdrop-blur-md bgGradient   /20 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-cyan-600  mb-2">5-10 Days</div>
                    <div className="text-sm">Bank Processing</div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Non-Refundable Circumstances</h2>
              <div className="space-y-4 text-gray-300">
                <p>Refunds will not be provided in the following situations:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Change of mind or business direction after work has commenced</li>
                  <li>
                    Dissatisfaction with results due to factors beyond our control (algorithm changes, market
                    conditions)
                  </li>
                  <li>Failure to provide necessary materials or feedback as outlined in the service agreement</li>
                  <li>Requests made after the eligible refund period</li>
                  <li>Services where deliverables have been completed and delivered</li>
                  <li>Third-party costs incurred on your behalf (advertising spend, software licenses)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Cancellation Policy</h2>
              <div className="space-y-4 text-gray-300">
                <h3 className="text-xl font-semibold text-white">Monthly Services</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>30 days written notice required for cancellation</li>
                  <li>Services continue until the end of the current billing period</li>
                  <li>No refund for the current month's services</li>
                  <li>All completed work and source files will be provided</li>
                </ul>

                <h3 className="text-xl font-semibold text-white">Project Services</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Cancellation possible before work commencement with full refund</li>
                  <li>Partial cancellation may incur charges for completed work</li>
                  <li>Client retains rights to all paid deliverables</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  If you're unsatisfied with our refund decision, we encourage you to contact us directly to discuss
                  alternative solutions. We're committed to finding mutually beneficial resolutions.
                </p>
                <div className="glass backdrop-blur-md bgGradient   /20 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Alternative Solutions May Include:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Service credits for future work</li>
                    <li>Additional revisions or modifications</li>
                    <li>Extended service periods</li>
                    <li>Partial refunds in exceptional circumstances</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Force Majeure</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  In cases of force majeure (natural disasters, pandemics, government regulations, etc.) that prevent us
                  from delivering services, we will work with clients to reschedule or provide alternative solutions.
                  Refunds may be considered on a case-by-case basis.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4 text-gray-300">
                <p>For refund requests or questions about this policy:</p>
                <div className="glass backdrop-blur-md bgGradient   /20 p-4 rounded-lg">
                  <p>
                    <strong>Email:</strong> refunds@brenzo.media
                  </p>
                  <p>
                    <strong>Subject Line:</strong> Refund Request - [Your Invoice Number]
                  </p>
                  <p>
                    <strong>Response Time:</strong> 5-7 business days
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Policy Updates</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  This Refund Policy may be updated periodically. Changes will be posted on our website with an updated
                  effective date. Continued use of our services after changes constitutes acceptance of the new terms.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
