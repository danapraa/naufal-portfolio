import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./Icons";

export default function Contact() {
  const items = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: <MailIcon />,
      color: "bg-grape",
    },
    {
      label: "WhatsApp",
      value: profile.phone,
      href: profile.whatsapp,
      icon: <PhoneIcon />,
      color: "bg-sun",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/naufalwahyu",
      href: profile.linkedin,
      icon: <LinkedInIcon />,
      color: "bg-ice",
    },
    {
      label: "GitHub",
      value: "github.com/danapraa",
      href: profile.github,
      icon: <GitHubIcon />,
      color: "bg-bubble",
    },
  ];

  return (
    <section
      id="kontak"
      className="border-t-[3px] border-ink bg-acid py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <Reveal>
          <p className="font-label inline-block rounded-lg border-2 border-ink bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-hard-sm">
            08 / Kontak
          </p>
          <h2 className="mt-5 text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl">
            Ayo bikin sesuatu{" "}
            <span className="inline-block -rotate-2 rounded-xl border-[3px] border-ink bg-white px-3 shadow-hard-sm">
              bareng.
            </span>
          </h2>
          <p className="mt-6 max-w-lg text-base font-medium leading-relaxed sm:text-lg">
            Saya terbuka untuk posisi Web Developer, Front-End Developer, 
            Junior Software Developer, dan UI/UX Designer Silakan hubungi saya kapan saja.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="brut-btn mt-8 bg-white"
          >
            <MailIcon className="h-4 w-4" />
            Kirim Email
          </a>
        </Reveal>

        <div className="grid gap-4">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 100}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="brut-card brut-lift flex items-center gap-4 bg-white p-4"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-[3px] border-ink ${item.color}`}
                >
                  {item.icon}
                </span>
                <span className="min-w-0">
                  <span className="font-label block text-xs font-bold uppercase tracking-wide text-ink/60">
                    {item.label}
                  </span>
                  <span className="block truncate font-bold">{item.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}