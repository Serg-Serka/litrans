"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname(); // Get the current route
  const t = useTranslations(); // Get translations

  return (
    <header className="flex justify-between items-center bg-white shadow-md header">
      <nav className="flex gap-4">
        <Link href="/" className={pathname === "/" ? "nav-link-selected-text" : "nav-link-text"}>
          <Image
            src="/images/logo_3.png"
            // src="/images/logo_2.webp"
            alt={t("navigation.home")}
            className="nav-link-image"
            width={70}
            height={50}
          />
        </Link>
        <Link href="/trading" className={pathname === "/trading" ? "nav-link-selected-text" : "nav-link-text"}>{t("navigation.trading")}</Link>
        <Link href="/logistic" className={pathname === "/logistic" ? "nav-link-selected-text" : "nav-link-text"}>{t("navigation.logistic")}</Link>
        <Link href="/contact" className={pathname === "/contact" ? "nav-link-selected-text" : "nav-link-text"}>{t("navigation.contact")}</Link>
      </nav>
      <nav className="flex gap-4">
        <LanguageSwitcher />
      </nav>
    </header>
  );
};

export default Header;
