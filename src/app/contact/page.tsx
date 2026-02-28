import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GradientText } from "@/components/ui/GradientText";
import { ContactForm } from "@/components/forms/ContactForm";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Twitter, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Dhavin Technologies. Book a discovery call, send us a message, or reach out on WhatsApp.",
};

const contactMethods = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone}`,
  },
  {
    icon: <MessageCircle size={20} />,
    label: "WhatsApp",
    value: "Message us on WhatsApp",
    href: CONTACT_INFO.whatsapp,
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: CONTACT_INFO.location,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-bg-dark">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Let&apos;s <GradientText>Talk</GradientText>
              </h1>
              <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-2xl">
                Have a project in mind? Want to explore how we can help? Drop us
                a message and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Contact form + info */}
      <section className="py-24 bg-bg-light">
        <Container>
          <div className="grid lg:grid-cols-[1fr_400px] gap-16">
            {/* Form */}
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold text-text-on-light mb-6">
                  Send us a message
                </h2>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Contact info */}
            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="text-2xl font-bold text-text-on-light mb-6">
                  Other ways to reach us
                </h2>
                <div className="space-y-4">
                  {contactMethods.map((method) => {
                    const content = (
                      <div className="flex items-start gap-4 p-4 rounded-xl border border-border-light hover:border-accent/30 transition-colors">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                          {method.icon}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-text-on-light">
                            {method.label}
                          </p>
                          <p className="text-sm text-text-muted">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    );

                    return method.href ? (
                      <a
                        key={method.label}
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={method.label}>{content}</div>
                    );
                  })}
                </div>

                {/* Social links */}
                <div className="mt-8">
                  <p className="text-sm font-medium text-text-on-light mb-3">
                    Follow us
                  </p>
                  <div className="flex gap-3">
                    {[
                      { Icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
                      { Icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
                      { Icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
                    ].map(({ Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="p-3 rounded-lg border border-border-light text-text-muted hover:text-accent hover:border-accent/30 transition-all"
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
