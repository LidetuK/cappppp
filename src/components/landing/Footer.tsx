// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram,
//   Code,
//   Terminal,
//   Database,
//   Webhook,
//   Settings,
//   FileCode,
// } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center md:items-stretch text-center md:text-left">
        
        {/* Left Side - Company Info (Vertically Centered) */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center min-h-[400px]">
          {/* Company Logo */}
          <img 
            src="/assets/LOGO.png" 
            alt="Captivite Logo" 
            className="w-24 h-auto mb-3"
            aria-label="Captivite Company Logo"
          />

          {/* Company Info */}
          <p className="text-sm text-muted-foreground max-w-md">
            Transforming businesses through intelligent automation and AI-powered solutions.
          </p>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground mt-3">
            © {new Date().getFullYear()} Captivite. All rights reserved.
          </p>
        </div>

        {/* Right Side - Embedded Form */}
        <div className="w-full md:w-1/2 flex justify-center items-center min-h-[400px]">
          <iframe 
            src="https://white-background-wizard.vercel.app/" 
            width="100%" 
            height="400px" 
            style={{ border: "none" }}
            title="Embedded Form"
            aria-label="Signup Form"
          />
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
