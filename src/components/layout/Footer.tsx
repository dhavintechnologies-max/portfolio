import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { SITE_NAME, NAV_LINKS, SOCIAL_LINKS, CONTACT_INFO } from "@/lib/constants";
import { Linkedin, Twitter, Github, Instagram, Mail, Phone, MapPin } from "lucide-react";

const serviceLinks = [
  { label: "Custom Web Applications", href: "/services/web-applications" },
  { label: "Mobile Applications", href: "/services/mobile-applications" },
  { label: "Full-stack Development", href: "/services/fullstack-development" },
  { label: "AI & Automation", href: "/services/ai-automation" },
];

const companyLinks = [
  ...NAV_LINKS,
  { label: "Contact", href: "/contact" },
];

const socialIcons = [
  { Icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { Icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
  { Icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
  { Icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-border-dark">
      <Container>
        <div className="py-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-1">
              <Image
                src="/images/logo.png"
                alt="Dhavin Technologies"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-xl font-extrabold tracking-tight">
                havin
              </span>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              Your technical partners for digital products that scale. Built by engineers, for visionaries.
            </p>
            <div className="flex gap-3">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-bg-card-dark transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-text-on-dark mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-on-dark transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-text-on-dark mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-on-dark transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-text-on-dark mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-text-on-dark transition-colors"
                >
                  <Mail size={14} />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-text-on-dark transition-colors"
                >
                  <Phone size={14} />
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-text-muted">
                  <MapPin size={14} />
                  {CONTACT_INFO.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-dark py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-text-muted hover:text-text-on-dark transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-text-muted hover:text-text-on-dark transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
