"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-bg-dark/80 backdrop-blur-xl border-b border-border-dark"
            : "bg-transparent"
        )}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1">
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

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-medium text-text-on-dark/70 hover:text-text-on-dark transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA + Mobile hamburger */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <Button href="/contact" size="sm">
                  Book a Discovery Call
                </Button>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 text-text-on-dark/70 hover:text-text-on-dark transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </Container>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
