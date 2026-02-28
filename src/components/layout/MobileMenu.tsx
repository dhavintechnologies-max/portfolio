"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-60 bg-bg-dark/95 backdrop-blur-xl"
        >
          <div className="flex h-full flex-col px-6 py-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
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
              </div>
              <button
                onClick={onClose}
                className="p-2 text-text-on-dark/70 hover:text-text-on-dark transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-1 flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="text-3xl font-semibold text-text-on-dark/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA */}
            <div className="pb-8">
              <Button href="/contact" className="w-full" onClick={onClose}>
                Book a Discovery Call
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
