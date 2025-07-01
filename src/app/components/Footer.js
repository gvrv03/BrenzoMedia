import React from "react";
import { Instagram, Mail } from "lucide-react"; // Optional: you can use other icon libraries

const Footer = () => {
  return (
    <footer className=" text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-lg font-bold">BrenzoMedia</h2>
          </div>
          <p className="text-sm text-white/70">
            Create viral, high-quality cinematic content with our proven system.
          </p>
          <div className="flex gap-4 mt-4">
            <Instagram className="h-5 w-5 cursor-pointer" />
            <Mail className="h-5 w-5 cursor-pointer" />
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold mb-3">Pages</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Home</li>
            <li>About</li>
            <li>Collaborations</li>
            <li>Wall of Love</li>
            <li>Growth</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Imprint / Legal Notice</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>brenzomedia@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-10 pt-4 text-center text-sm text-white/50">
        <p>© 2025 BrenzoMedia. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
