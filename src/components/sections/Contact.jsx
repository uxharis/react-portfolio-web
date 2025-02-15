import React, { useState } from "react"
import RevealOnScroll from "../RevealOnScroll"

import emailjs from "emailjs-com"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
      .then(() => {
        alert("Message Send!")
        setFormData({ name: "", email: "", message: "" })
      })
      .catch(() => alert("Opps... Somthing Worng"))
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">Get In Touch</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} id="name" name="name" required className="w-full bg-white/5 border border-white/5 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Name" />
            </div>
            <div className="relative">
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} name="email" id="email" required className="w-full bg-white/5 border border-white/5 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="exaple@gmail.com" />
            </div>
            <div className="relative">
              <textarea rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} name="message" id="message" required className="w-full bg-white/5 border border-white/5 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Your Message.." />
            </div>

            <button type="submit" className="w-100 py-3 px-6 bg-blue-500 text-white rounded transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,224,0.4)]">
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  )
}
