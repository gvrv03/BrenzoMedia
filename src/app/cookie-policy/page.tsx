import { ArrowLeft, Cookie, Settings, Eye, Shield } from "lucide-react"
import Link from "next/link"

export default function CookiePolicy() {
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
            <Cookie className="w-8 h-8 text-cyan-600  mr-3" />
            <h1 className="text-4xl font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Cookie Policy
            </h1>
          </div>

          <div className="space-y-8 text-white" style={{ fontFamily: "Inter, sans-serif" }}>
            <div>
              <p className="text-lg mb-4">
                <strong>Effective Date:</strong> January 20, 2025
              </p>
              <p className="text-lg">
                This Cookie Policy explains how Brenzo Media uses cookies and similar technologies on our website to
                enhance your browsing experience and improve our services.
              </p>
            </div>

            <section>
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-cyan-600  mr-2" />
                <h2 className="text-2xl font-bold">What Are Cookies?</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Cookies are small text files that are stored on your device when you visit a website. They help
                  websites remember your preferences, login status, and other information to make your browsing
                  experience more convenient and personalized.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Settings className="w-6 h-6 text-cyan-600  mr-2" />
                <h2 className="text-2xl font-bold">Types of Cookies We Use</h2>
              </div>
              <div className="space-y-6">
                <div className="glass backdrop-blur-md bgGradient   /10 border border-[4FB6EC] /20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">Essential Cookies</h3>
                  <p className="text-gray-300 mb-3">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Session management and security</li>
                    <li>Form submission and contact functionality</li>
                    <li>Basic website navigation</li>
                  </ul>
                </div>

                <div className="glass backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">Analytics Cookies</h3>
                  <p className="text-gray-300 mb-3">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Google Analytics for website traffic analysis</li>
                    <li>Page view tracking and user behavior</li>
                    <li>Performance monitoring and optimization</li>
                  </ul>
                </div>

                <div className="glass backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">Marketing Cookies</h3>
                  <p className="text-gray-300 mb-3">
                    These cookies are used to deliver relevant advertisements and track campaign effectiveness.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Social media integration (LinkedIn, Twitter, Instagram)</li>
                    <li>Retargeting and remarketing campaigns</li>
                    <li>Conversion tracking and attribution</li>
                  </ul>
                </div>

                <div className="glass backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">Functional Cookies</h3>
                  <p className="text-gray-300 mb-3">
                    These cookies enhance your experience by remembering your preferences.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Language and region preferences</li>
                    <li>Theme and display settings</li>
                    <li>Form auto-fill and saved preferences</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-cyan-600  mr-2" />
                <h2 className="text-2xl font-bold">Third-Party Cookies</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>We may use third-party services that set their own cookies:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="glass backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Google Analytics</h4>
                    <p className="text-sm">Website traffic and user behavior analysis</p>
                  </div>
                  <div className="glass backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Google Ads</h4>
                    <p className="text-sm">Advertising and conversion tracking</p>
                  </div>
                  <div className="glass backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Social Media</h4>
                    <p className="text-sm">LinkedIn, Twitter, Instagram integration</p>
                  </div>
                  <div className="glass backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Calendly</h4>
                    <p className="text-sm">Appointment scheduling functionality</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Managing Your Cookie Preferences</h2>
              <div className="space-y-4 text-gray-300">
                <h3 className="text-xl font-semibold text-white">Browser Settings</h3>
                <p>You can control cookies through your browser settings:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data
                  </li>
                  <li>
                    <strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data
                  </li>
                  <li>
                    <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
                  </li>
                  <li>
                    <strong>Edge:</strong> Settings → Cookies and site permissions
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-white">Opt-Out Options</h3>
                <div className="glass backdrop-blur-md bgGradient   /10 border border-[4FB6EC] /20 p-4 rounded-lg">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Google Analytics:</strong>{" "}
                      <a
                        href="https://tools.google.com/dlpage/gaoptout"
                        className="text-cyan-600  hover:text-cyan-600  -300"
                      >
                        Google Analytics Opt-out Browser Add-on
                      </a>
                    </li>
                    <li>
                      <strong>Google Ads:</strong>{" "}
                      <a href="https://www.google.com/settings/ads" className="text-cyan-600  hover:text-cyan-600  -300">
                        Google Ad Settings
                      </a>
                    </li>
                    <li>
                      <strong>General Advertising:</strong>{" "}
                      <a href="http://www.aboutads.info/choices/" className="text-cyan-600  hover:text-cyan-600  -300">
                        Digital Advertising Alliance
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Cookie Retention</h2>
              <div className="space-y-4 text-gray-300">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Session Cookies</h3>
                    <p>Deleted when you close your browser</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Persistent Cookies</h3>
                    <p>Stored for up to 2 years or until manually deleted</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Impact of Disabling Cookies</h2>
              <div className="space-y-4 text-gray-300">
                <p>Disabling cookies may affect your experience on our website:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Contact forms may not function properly</li>
                  <li>Website preferences will not be saved</li>
                  <li>Some interactive features may be limited</li>
                  <li>Analytics and improvement efforts may be hindered</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We may update this Cookie Policy to reflect changes in our practices or applicable laws. We will
                  notify you of any material changes by posting the updated policy on our website.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <div className="space-y-4 text-gray-300">
                <p>If you have questions about our use of cookies, please contact us:</p>
                <div className="glass backdrop-blur-md bgGradient   /10 border border-[4FB6EC] /20 p-4 rounded-lg">
                  <p>
                    <strong>Email:</strong> privacy@brenzo.media
                  </p>
                  <p>
                    <strong>Website:</strong> www.brenzo.media
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
