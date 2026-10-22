"use client";

import { useEffect } from "react";

export default function SiteMarkup({ html, locale }: { html: string; locale: "ar" | "en" }) {
  useEffect(() => {
    const root = document.querySelector(".site-shell");
    if (!root) return;
    const menuButton = root.querySelector<HTMLButtonElement>(".menu-toggle");
    const nav = root.querySelector<HTMLElement>(".main-nav");
    const toggleMenu = () => {
      if (!menuButton || !nav) return;
      const open = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("export-menu-open", open);
    };
    const closeMenu = () => {
      if (!menuButton || !nav) return;
      menuButton.setAttribute("aria-expanded", "false");
      nav.classList.remove("export-menu-open");
    };
    menuButton?.addEventListener("click", toggleMenu);
    nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    const languageLink = root.querySelector<HTMLAnchorElement>(".lang-switch");
    const switchLanguage = (event: MouseEvent) => {
      if (!languageLink || !window.location.hash) return;
      event.preventDefault();
      window.location.href = languageLink.href + window.location.hash;
    };
    languageLink?.addEventListener("click", switchLanguage);
    const form = root.querySelector<HTMLFormElement>("#contact-form");
    const submit = (event: Event) => {
      event.preventDefault();
      window.alert(locale === "ar"
        ? "نموذج التواصل غير متصل حالياً بخدمة إرسال. يرجى المحاولة لاحقاً."
        : "The contact form is not connected to a submission service yet. Please try again later.");
    };
    form?.addEventListener("submit", submit);
    return () => {
      menuButton?.removeEventListener("click", toggleMenu);
      nav?.querySelectorAll("a").forEach((link) => link.removeEventListener("click", closeMenu));
      languageLink?.removeEventListener("click", switchLanguage);
      form?.removeEventListener("submit", submit);
    };
  }, [locale]);

  return <div className="site-shell" dangerouslySetInnerHTML={{ __html: html }} />;
}
