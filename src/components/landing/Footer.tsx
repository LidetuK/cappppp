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
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        {/* Company Logo */}
        <img src = "/assets/LOGO.png" alt="Captivite Logo" className="w-32 h-auto mb-4" />

        {/* Company Info */}
        <p className="text-muted-foreground max-w-md">
          Transforming businesses through intelligent automation and AI-powered solutions.
        </p>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground mt-4">
          © {new Date().getFullYear()} Captivite. All rights reserved.
        </p>

        {/* Terms, Privacy, and Cookies - Hidden */}
        {/* <div className="flex gap-4 text-sm text-muted-foreground mt-4">
          <Link to="/terms" className="hover:text-primary">
            Terms
          </Link>
          <Link to="/privacy" className="hover:text-primary">
            Privacy
          </Link>
          <Link to="/cookies" className="hover:text-primary">
            Cookies
          </Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
