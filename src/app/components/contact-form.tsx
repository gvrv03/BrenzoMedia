"use client"

import * as React from "react"
import { useActionState } from "react"
import {
  Send,
  User,
  Mail,
  MessageSquare,
  Phone,
  CheckCircle,
  AlertCircle,
  Loader2,
  User2,
  MessageSquareDashed,
} from "lucide-react"
import { useEffect, useState } from "react"
import { handleContactSubmission } from "../../actions/contact"

const initialState = {
  success: false,
  message: "",
}

export default function ContactForm() {
  const [isVisible, setIsVisible] = useState(false)
  const [state, formAction, isPending] = useActionState(handleContactSubmission, initialState)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("contact-form")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact-form" className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <div className="glass backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 mb-8 inline-block">
              <div className="flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-[#4FB6EC] mr-3 animate-bounce" />
                <h2
                  className="text-4xl md:text-5xl font-bold text-white"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Get In Touch
                </h2>
              </div>
            </div>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Ready to scale your content and grow your brand? Let &#769;s discuss your project.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Info Card */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="glass backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3
                className="text-2xl font-bold text-white mb-6"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Why Work With Us?
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: CheckCircle,
                    title: "Proven Results",
                    description: "500+ creators scaled, 10M+ views generated",
                  },
                  {
                    icon: Phone,
                    title: "Personal Attention",
                    description: "Direct access to our strategy team",
                  },
                  {
                    icon: MessageSquare,
                    title: "Quick Response",
                    description: "We respond within 24 hours",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="glass backdrop-blur-md bg-[#4FB6EC]/10 border border-[#4FB6EC]/30 p-2 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-[#4FB6EC]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-white">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <form
              action={formAction}
              className="glass backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:border-[#4FB6EC]/40"
            >
              {/* Status Message */}
              {state?.message && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-start ${
                    state.success
                      ? "bg-green-500/20 border border-green-400/30 text-green-400"
                      : "bg-red-500/20 border border-red-400/30 text-red-400"
                  }`}
                >
                  {state.success ? (
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 mr-3 mt-0.5" />
                  )}
                  <span>{state.message}</span>
                </div>
              )}

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#4FB6EC]" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    disabled={isPending}
                    className="w-full pl-12 pr-4 py-3 glass bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#4FB6EC] focus:outline-none transition-all duration-300 hover:border-[#4FB6EC] disabled:opacity-50"
                  />
                </div>

                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#4FB6EC]" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    disabled={isPending}
                    className="w-full pl-12 pr-4 py-3 glass bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#4FB6EC] focus:outline-none transition-all duration-300 hover:border-[#4FB6EC] disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Phone + Project Type */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="relative group">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#4FB6EC]" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone (Optional)"
                    disabled={isPending}
                    className="w-full pl-12 pr-4 py-3 glass bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#4FB6EC] focus:outline-none transition-all duration-300 hover:border-[#4FB6EC] disabled:opacity-50"
                  />
                </div>
                <div className="relative group">
                  <MessageSquareDashed className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#4FB6EC]" />
                  <input
                    type="text"
                    name="projectType"
                    placeholder="Your Instagram/Youtube"
                    disabled={isPending}
                    className="w-full pl-12 pr-4 py-3 glass bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#4FB6EC] focus:outline-none transition-all duration-300 hover:border-[#4FB6EC] disabled:opacity-50"
                  />
                </div>

               
              </div>

              {/* Message */}
              <div className="mb-6 relative group">
                <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-[#4FB6EC]" />
                <textarea
                  name="message"
                  placeholder="Tell us about your project and goals..."
                  rows={4}
                  required
                  disabled={isPending}
                  className="w-full pl-12 pr-4 py-3 glass bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#4FB6EC] focus:outline-none transition-all duration-300 hover:border-[#4FB6EC] resize-none disabled:opacity-50"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isPending}
                className="w-full glass bgGradient cursor-pointer border border-[#4FB6EC]/30 text-white px-8 py-4 rounded-xl hover:bg-[#4FB6EC] hover:text-white transition-all duration-300 font-semibold text-lg hover:scale-105 hover:shadow-lg hover:shadow-[#4FB6EC]/25 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-white text-sm mt-4 text-center">
                We  &#769;ll get back to you within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
