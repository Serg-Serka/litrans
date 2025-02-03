"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const pathname = usePathname(); // Get the current route
  const t = useTranslations(); // Get translations

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <nav className="flex gap-4">
        <Link href="/" className={pathname === "/" ? "text-blue-500 font-bold" : ""}>{t("navigation.home")}</Link>
        <Link href="/trading" className={pathname === "/about" ? "text-blue-500 font-bold" : ""}>{t("navigation.trading")}</Link>
        <Link href="/logistic" className={pathname === "/services" ? "text-blue-500 font-bold" : ""}>{t("navigation.logistic")}</Link>
        <Link href="/contact" className={pathname === "/contact" ? "text-blue-500 font-bold" : ""}>{t("navigation.contact")}</Link>
      </nav>
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
