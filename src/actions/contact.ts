"use server"

import { revalidatePath } from "next/cache"

type FormResult = {
  success: boolean
  message: string
}

export async function handleContactSubmission(prevState: any, formData: FormData): Promise<FormResult> {
  console.log("=== Server Action Started ===")

  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const projectType = formData.get("projectType") as string
    const message = formData.get("message") as string

    console.log("Form data:", { name, email, phone, projectType, message: message?.substring(0, 50) + "..." })

    // Validation
    if (!name?.trim()) {
      return { success: false, message: "Name is required." }
    }
    if (!email?.trim()) {
      return { success: false, message: "Email is required." }
    }
    if (!projectType?.trim()) {
      return { success: false, message: "Project type is required." }
    }
    if (!message?.trim()) {
      return { success: false, message: "Message is required." }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { success: false, message: "Please enter a valid email address." }
    }

    // Simulate database save (replace with actual Supabase call)
    const { createClient } = await import("@supabase/supabase-js")
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

    const { data, error } = await supabase.from("contacts").insert([
      {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        project_type: projectType.trim(),
        message: message.trim(),
      },
    ])

    if (error) {
      console.error("Supabase error:", error)
      return { success: false, message: "Database error. Please try again." }
    }

    console.log("=== Success: Data saved to Supabase ===")
    revalidatePath("/")

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("=== Server Action Error ===", error)
    return {
      success: false,
      message: "Sorry, there was an error. Please try again or contact us directly.",
    }
  }
}
