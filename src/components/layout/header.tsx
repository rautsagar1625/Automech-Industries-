"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/config/site";
import { ButtonArrow, ButtonLink } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function Wordmark({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="flex flex-col leading-none">
      <span
        className={cn(
          "font-display text-[1.35rem] font-bold tracking-[0.02em] uppercase [font-stretch:80%]",
          tone === "light" ? "text-navy" : "text-on-navy"
        )}
      >
        Automech
      </span>
      <span
        className={cn(
          "label mt-1 text-[0.62rem] tracking-[0.24em]",
          tone === "light" ? "text-graphite" : "text-on-navy-muted"
        )}
      >
        Industries · Est. {siteConfig.company.foundedYear}
      </span>
    </span>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  const menuTriggerRef = React.useRef<HTMLButtonElement>(null);
  const mobileNavPanelRef = React.useRef<HTMLDivElement>(null);
  const headerRef = React.useRef<HTMLElement>(null);
  const [panelTop, setPanelTop] = React.useState<number | null>(null);

  // Close mobile drawer when route changes during render
  const [prevPathname, setPrevPathname] = React.useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  React.useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 8);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scrolling when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Focus trap and keyboard management for mobile menu
  React.useEffect(() => {
    if (!mobileMenuOpen) return;

    const panel = mobileNavPanelRef.current;
    const selector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    panel?.querySelector<HTMLElement>(selector)?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        menuTriggerRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && panel) {
        const focusable = panel.querySelectorAll<HTMLElement>(selector);
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = siteConfig.mainNav.filter(
    (item) => item.href !== "/" && item.href !== "/request-quote"
  );

  const closeMenu = () => {
    setMobileMenuOpen(false);
    menuTriggerRef.current?.focus();
  };

  const { phone, email } = siteConfig.company.contact;

  return (
    <>
      {/* Utility bar: scrolls away, desktop only */}
      <div className="bg-navy border-navy-rule text-on-navy-muted hidden border-b md:block">
        <div className="container-site flex h-9 items-center justify-between gap-6 text-xs">
          <p className="flex items-center gap-5">
            <span>{siteConfig.company.location.fullAddressString}</span>
            <span className="bg-navy-rule h-3 w-px" aria-hidden="true" />
            <span>Steel fabrication since {siteConfig.company.foundedYear}</span>
          </p>
          <p className="flex items-center gap-5">
            {phone && (
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-on-navy">
                {phone}
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} className="hover:text-on-navy">
                {email}
              </a>
            )}
            <Link href="/request-quote" className="text-on-navy hover:underline">
              Send us your drawings
            </Link>
          </p>
        </div>
      </div>

      <header
        ref={headerRef}
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-colors duration-300",
          isScrolled || mobileMenuOpen
            ? "border-navy-rule bg-navy/95 backdrop-blur-md"
            : "bg-navy border-transparent"
        )}
      >
        <div className="container-site flex h-[var(--header-height)] items-center justify-between gap-6">
          <Link href="/" aria-label={`${siteConfig.name}, home`} className="shrink-0">
            <Wordmark tone="dark" />
          </Link>

          <nav className="hidden lg:block" aria-label="Main">
            <ul className="flex items-center gap-1">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "relative px-3 py-2 text-[0.94rem] transition-colors",
                        isActive
                          ? "text-on-navy font-medium"
                          : "text-on-navy-muted hover:text-on-navy"
                      )}
                    >
                      {item.title}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="bg-brand-light absolute inset-x-3 -bottom-[1.2rem] h-0.5"
                          transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <ButtonLink href="/request-quote" size="sm" className="hidden sm:inline-flex">
              Request a quote
              <ButtonArrow />
            </ButtonLink>

            <button
              ref={menuTriggerRef}
              type="button"
              className="text-on-navy inline-flex h-10 items-center gap-2.5 px-2 hover:bg-white/10 lg:hidden"
              aria-controls="mobile-nav-panel"
              aria-expanded={mobileMenuOpen}
              onClick={() => {
                setPanelTop(headerRef.current?.getBoundingClientRect().bottom ?? null);
                setMobileMenuOpen((open) => !open);
              }}
            >
              <span className="text-sm font-medium">{mobileMenuOpen ? "Close" : "Menu"}</span>
              <span className="relative block h-3 w-5" aria-hidden="true">
                <span
                  className={cn(
                    "bg-on-navy absolute left-0 h-[1.5px] w-full transition-transform duration-300",
                    mobileMenuOpen ? "top-1.5 rotate-45" : "top-0"
                  )}
                />
                <span
                  className={cn(
                    "bg-on-navy absolute left-0 h-[1.5px] w-full transition-transform duration-300",
                    mobileMenuOpen ? "top-1.5 -rotate-45" : "top-3"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            ref={mobileNavPanelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={panelTop !== null ? { top: panelTop } : undefined}
            className="fixed inset-x-0 top-[var(--header-height)] bottom-0 z-40 flex flex-col overflow-y-auto bg-white lg:hidden"
          >
            <nav aria-label="Mobile" className="container-site flex-1 pt-4">
              <ul>
                {[{ title: "Home", href: "/" }, ...navLinks].map((item, idx) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.li
                      key={item.href}
                      className="border-rule border-b"
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: prefersReducedMotion ? 0 : 0.04 * idx, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        aria-current={isActive ? "page" : undefined}
                        className="flex items-center justify-between py-4"
                      >
                        <span
                          className={cn(
                            "font-display text-[1.75rem] font-semibold",
                            isActive ? "text-brand" : "text-navy"
                          )}
                        >
                          {item.title}
                        </span>
                        <span className="label text-graphite">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="container-site border-rule bg-steel border-t py-6">
              <ButtonLink href="/request-quote" onClick={closeMenu} size="lg" className="w-full">
                Request a quote
                <ButtonArrow />
              </ButtonLink>
              <div className="mt-4 space-y-1.5 text-sm">
                {phone && (
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-navy hover:text-brand flex items-center gap-2 font-medium transition-colors"
                  >
                    <span className="text-graphite text-xs">Tel:</span>
                    <span>{phone}</span>
                  </a>
                )}
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="text-navy hover:text-brand flex items-center gap-2 font-medium transition-colors"
                  >
                    <span className="text-graphite text-xs">Email:</span>
                    <span>{email}</span>
                  </a>
                )}
                <p className="text-graphite pt-1 text-xs">
                  {siteConfig.company.location.fullAddressString}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
